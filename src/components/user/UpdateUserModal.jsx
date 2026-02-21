import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
import { Button, Input, notification, Modal } from "antd";

const UpdateUserModal = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Create User",
        description: "Tạo user thành công",
      });
      resetAndCloseModal();
      //   await loadUser();
    } else {
      notification.error({
        message: "Error Create User",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  return (
    <>
      <Modal
        title="Update User"
        open={isModalOpen}
        onOk={() => {
          handleSubmitBtn();
        }}
        okText="Save"
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>Full Name</span>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <span>Email</span>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <span>Phone</span>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateUserModal;
