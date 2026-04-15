import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  BookOutlined,
  GithubOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  const [current, setCurrent] = useState("");

  const { user } = useContext(AuthContext);

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
    ...(!user.id
      ? [
          {
            label: <NavLink to="/login">Login</NavLink>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "settings",
            icon: <GithubOutlined />,
            children: [
              {
                label: <NavLink to="/login">Logout</NavLink>,
                key: "login",
                icon: <LogoutOutlined />,
              },
            ],
          },
        ]
      : []),
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
