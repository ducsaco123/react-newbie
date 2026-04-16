import { Button, Input, InputNumber, Modal, notification, Select } from "antd";
import { useState } from "react";
import { createBookAPI, handleUploadFileAPI } from "../../services/api.service";

const BookForm = ({ fetchBooks }) => {
  const [preview, setPreview] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [mainText, setMainText] = useState("");
  const [price, setPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Arts");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnChangeFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setPreview(null);
      return;
    }

    const file = e.target.files[0];
    if (file) {
      const resUpload = await handleUploadFileAPI(file, "book");
      if (resUpload.data) {
        setThumbnail(resUpload.data.fileUploaded);
      }
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmitBtn = async () => {
    try {
      const res = await createBookAPI(
        thumbnail,
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
    setPrice(1);
    setQuantity(1);
    setCategory("Arts");
    setThumbnail("");
    setPreview(null);
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
            <span>Title</span>
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
            <InputNumber value={price} min={1} onChange={(e) => setPrice(e)} />
          </div>
          <div>
            <span>Quantity</span>
            <InputNumber
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(e)}
            />
          </div>
          <div>
            <span>Category</span>
            <Select
              value={category}
              style={{ width: 120 }}
              onChange={(value) => setCategory(value)}
              options={[
                { value: "Arts", label: "Arts" },
                { value: "Business", label: "Business" },
                { value: "Comics", label: "Comics" },

                { value: "Cooking", label: "Cooking" },
                { value: "Entertainment", label: "Entertainment" },
                { value: "History", label: "History" },

                { value: "Music", label: "Music" },
                { value: "Sports", label: "Sports" },
                { value: "Teen", label: "Teen" },
                { value: "Travel", label: "Travel" },
              ]}
            />
          </div>
          <div>
            <span>Image</span>
            <div>
              <label
                htmlFor="btnUpload"
                style={{
                  display: "block",
                  width: "fit-content",
                  marginTop: "15px",
                  padding: "5px 10px",
                  background: "aqua",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Upload Image
              </label>
              <input
                type="file"
                hidden
                id="btnUpload"
                onChange={handleOnChangeFile}
              />
            </div>
            {preview && (
              <>
                <div
                  style={{
                    marginTop: "10px",
                    width: "150px",
                    height: "100px",
                    border: "1px solid #ccc",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={preview}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookForm;
