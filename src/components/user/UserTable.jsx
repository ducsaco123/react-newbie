import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import UpdateUserModal from "./UpdateUserModal";

const UserTable = ({ dataUsers }) => {
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
            <EditOutlined style={{ cursor: "pointer", color: "orange" }} />
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
      <UpdateUserModal />
    </>
  );
};

export default UserTable;
