import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Select,
} from "antd";
import { useState } from "react";
import { createBookAPI, handleUploadFileAPI } from "../../services/api.service";

const BookForm = ({ fetchBooks }) => {
  const [preview, setPreview] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

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

  const handleSubmitBtn = async (values) => {
    try {
      const { mainText, author, price, quantity, category } = values;
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
    form.resetFields();
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
          form.submit();
        }}
        okText="Create"
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
      >
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          form={form}
          onFinish={handleSubmitBtn}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="mainText"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Author"
            name="author"
            rules={[{ required: true, message: "Please input your author!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your price!" }]}
          >
            <InputNumber min={1} addonAfter={" đ"} />
          </Form.Item>

          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please input your quantity!" }]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[
              { required: true, message: "Please select your category!" },
            ]}
          >
            <Select
              style={{ width: 120 }}
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
          </Form.Item>
        </Form>
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
              onClick={(event) => {
                event.target.value = null;
              }}
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
      </Modal>
    </div>
  );
};

export default BookForm;
