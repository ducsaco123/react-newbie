import { Drawer } from "antd";

const ViewUserDetail = ({
  setOpenUserDetail,
  openUserDetail,
  selectUser,
  setSelectUser,
}) => {
  const onClose = () => {
    setSelectUser(null);
    setOpenUserDetail(false);
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
            <div>
              <img
                height={100}
                width={150}
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
              <input type="file" hidden id="btnUpload" />
            </div>
            {/* <Button type="primary">Upload avatar</Button> */}
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
