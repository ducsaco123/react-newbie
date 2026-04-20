import { useCallback, useEffect, useState } from "react";
import BookTable from "../components/book/BookTable";
import { getBookAPI } from "../services/api.service";
import BookForm from "../components/book/BookForm";

const Book = () => {
  const [dataBooks, setDataBooks] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchBooks = useCallback(async () => {
    try {
      const res = await getBookAPI(current, pageSize);
      if (res.data && res.data.result) {
        setDataBooks(res.data.result);
        setCurrent(res.data.meta.current);
        setPageSize(res.data.meta.pageSize);
        setTotal(res.data.meta.total);
      }
    } catch (error) {
      console.error(error);
    }
  }, [current, pageSize]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="page-shell">
      <div className="dashboard-grid">
        <section className="section-card">
          <BookForm fetchBooks={fetchBooks} />
        </section>

        <section className="data-card">
          <BookTable
            dataBooks={dataBooks}
            current={current}
            pageSize={pageSize}
            total={total}
            setCurrent={setCurrent}
            setPageSize={setPageSize}
            fetchBooks={fetchBooks}
          />
        </section>
      </div>
    </div>
  );
};

export default Book;
