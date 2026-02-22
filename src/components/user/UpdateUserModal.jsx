import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";
import { Input, notification, Modal } from "antd";

const UpdateUserModal = ({
  isModalUpdateOpen,
  setIsModalUpdateOpen,
  selectUser,
  setSelectUser,
  loadUser,
}) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (selectUser) {
      setId(selectUser._id);
      setFullName(selectUser.fullName);
      setPhone(selectUser.phone);
    }
  }, [selectUser]);

  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "Update User",
        description: "Cập nhật user thành công",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error Update User",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setId("");
    setFullName("");
    setPhone("");
    setSelectUser(null);
  };
  return (
    <>
      <Modal
        title="Update User"
        open={isModalUpdateOpen}
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
            <span>Phone</span>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateUserModal;
