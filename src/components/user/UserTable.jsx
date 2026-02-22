import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import UpdateUserModal from "./UpdateUserModal";
import { useState } from "react";

const UserTable = ({ dataUsers, loadUser }) => {
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectUser, setSelectUser] = useState(null);

  const columns = [
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
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
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
    </>
  );
};

export default UserTable;
