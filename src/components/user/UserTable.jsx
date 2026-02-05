import { Space, Table, Tag } from "antd";
import { fetchAllUsersAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);

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

  const loadUser = async () => {
    try {
      const res = await fetchAllUsersAPI();

      setDataUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadUser();
  }, []);
  return <Table columns={columns} dataSource={dataUsers} />;
};

export default UserTable;
