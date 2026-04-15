import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  BookOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  const [current, setCurrent] = useState("");

  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <NavLink to="/user">Users</NavLink>,
      key: "users",
      icon: <UserOutlined />,
    },
    {
      label: <NavLink to="/book">Books</NavLink>,
      key: "books",
      icon: <BookOutlined />,
    },
    {
      label: "Settings",
      key: "settings",
      icon: <SettingOutlined />,
      children: [
        {
          label: <NavLink to="/register">Register</NavLink>,
          key: "register",
          icon: <UserOutlined />,
        },
        {
          label: <NavLink to="/login">Login</NavLink>,
          key: "login",
          icon: <UserOutlined />,
        },
      ],
    },
  ];
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default Header;
