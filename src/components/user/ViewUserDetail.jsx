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
