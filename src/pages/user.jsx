import UserTable from "../components/user/UserTable";
import UserForm from "../components/user/UserForm";
import { useEffect, useState } from "react";
import { fetchAllUsersAPI } from "../services/api.service";

const User = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadUser();
  }, [current, pageSize]);

  const loadUser = async () => {
    try {
      const res = await fetchAllUsersAPI(current, pageSize);
      if (res.data) {
        setDataUsers(res.data.result);
        setCurrent(res.data.meta.current);
        setPageSize(res.data.meta.pageSize);
        setTotal(res.data.meta.total);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <UserForm loadUser={loadUser} />
        <UserTable
          dataUsers={dataUsers}
          loadUser={loadUser}
          current={current}
          pageSize={pageSize}
          total={total}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
        />
      </div>
    </>
  );
};

export default User;
