import { Button, Input, InputNumber, Modal, notification } from "antd";
import { useState } from "react";
import { createBookAPI } from "../../services/api.service";

const BookForm = ({ fetchBooks }) => {
  const [mainText, setMainText] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBtn = async () => {
    try {
      const res = await createBookAPI(
        mainText,
        author,
        price,
        quantity,
        category,
      );
      if (res.data) {
        notification.success({
          message: "Create Book",
          description: "Tạo book thành công",
        });
        resetAndCloseModal();
        await fetchBooks();
      } else {
        notification.error({
          message: "Error Create Book",
          description: JSON.stringify(res.message),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetAndCloseModal = () => {
    setMainText("");
    setAuthor("");
    setPrice(0);
    setQuantity(0);
    setCategory("");
    setIsModalOpen(false);
  };

  return (
    <div className="user-form" style={{ width: "90%", margin: "10px 20px" }}>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table Books</h3>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create Book
          </Button>
        </div>
      </div>
      <Modal
        title="Create Book"
        open={isModalOpen}
        onOk={() => {
          handleSubmitBtn();
        }}
        okText="Create"
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>Main Text</span>
            <Input
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
            />
          </div>
          <div>
            <span>Author</span>
            <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            <span>Price</span>
            <InputNumber
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <span>Quantity</span>
            <InputNumber
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <span>Category</span>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookForm;
