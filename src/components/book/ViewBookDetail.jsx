import { Button, Drawer } from "antd";

const ViewBookDetail = ({ selectBook, open, setOpen, setSelectBook }) => {
  const formatPrice = (price) => {
    const numericPrice = Number(price);

    if (Number.isNaN(numericPrice)) {
      return `${price} đ`;
    }

    return `${numericPrice.toLocaleString("vi-VN")} đ`;
  };

  const onClose = () => {
    setOpen(false);
    setSelectBook(null);
  };
  return (
    <>
      <Drawer
        width={"40vw"}
        title="Book Detail"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        {selectBook ? (
          <>
            <p>Id: {selectBook._id}</p>
            <br />
            <p>Title: {selectBook.mainText}</p>
            <br />
            <p>Author: {selectBook.author}</p>
            <br />
            <p>Category: {selectBook.category}</p>
            <br />
            <p>Price: {formatPrice(selectBook.price)}</p>
            <br />
            <p>Quantity: {selectBook.quantity}</p>
            <br />
            <p>Sold: {selectBook.sold}</p>
            <br />
            <p>Image:</p>
            <div
              style={{
                marginTop: "10px",
                width: "150px",
                height: "100px",
                border: "1px solid #ccc",
              }}
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${selectBook.thumbnail}`}
              />
            </div>
          </>
        ) : (
          <>
            <p>No book selected</p>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ViewBookDetail;
