import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Space, Table } from "antd";
import UpdateUserModal from "./UpdateUserModal";
import { useState } from "react";
import { deleteUserAPI } from "../../services/api.service";
import ViewUserDetail from "./ViewUserDetail";

const UserTable = ({ dataUsers, loadUser }) => {
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectUser, setSelectUser] = useState(null);
  const [openUserDetail, setOpenUserDetail] = useState(false);

  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Delete user success",
        description: "Xóa user thành công",
      });

      await loadUser();
    } else {
      notification.error({
        message: "Delete user failed",
        description: JSON.stringify(res.message),
      });
    }
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setSelectUser(record);
              setOpenUserDetail(true);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <EditOutlined
              style={{ cursor: "pointer", color: "orange" }}
              onClick={() => {
                setSelectUser(record);
                setIsModalUpdateOpen(true);
              }}
            />
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => handleDeleteUser(record._id)}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey="_id" />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        selectUser={selectUser}
        setSelectUser={setSelectUser}
        loadUser={loadUser}
      />
      <ViewUserDetail
        openUserDetail={openUserDetail}
        setOpenUserDetail={setOpenUserDetail}
        selectUser={selectUser}
        setSelectUser={setSelectUser}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
