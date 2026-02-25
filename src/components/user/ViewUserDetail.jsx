import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import {
  handleUploadFileAPI,
  updateUserAvatarAPI,
} from "../../services/api.service";

const ViewUserDetail = ({
  setOpenUserDetail,
  openUserDetail,
  selectUser,
  setSelectUser,
  loadUser,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setSelectUser(null);
    setOpenUserDetail(false);
  };

  const handleOnChangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    //step 1: upload file
    const resUpload = await handleUploadFileAPI(selectedFile, "avatar");
    if (resUpload.data) {
      //success
      const newAvatar = resUpload.data.fileUploaded;
      //step 2: update user
      const resUpdateAvatar = await updateUserAvatarAPI(
        selectUser._id,
        selectUser.fullName,
        selectUser.phone,
        newAvatar,
      );
      if (resUpdateAvatar.data) {
        setOpenUserDetail(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser();
        notification.success({
          message: "Update user avatar",
          description: "Update avatar successfully",
        });
      } else {
        notification.error({
          message: "Upload avatar failed",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
    } else {
      //failed
      notification.error({
        message: "Upload file failed",
        description: JSON.stringify(resUpload.message),
      });
    }
  };
  return (
    <>
      <Drawer
        width={"40vw"}
        title="User Detail"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={openUserDetail}
      >
        {selectUser ? (
          <>
            <p>Id: {selectUser._id}</p>
            <br />
            <p>Full Name: {selectUser.fullName}</p>
            <br />
            <p>Email: {selectUser.email}</p>
            <br />
            <p>Phone: {selectUser.phone}</p>
            <br />
            <p>Avatar:</p>
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
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${selectUser.avatar}`}
              />
            </div>
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
                Upload Avatar
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
                <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
                  Save
                </Button>
              </>
            )}
          </>
        ) : (
          <>
            <p>No user selected</p>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ViewUserDetail;
