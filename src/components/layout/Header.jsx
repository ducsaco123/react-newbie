import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
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
import { logoutAPI } from "../../services/api.service";
const Header = () => {
  const [current, setCurrent] = useState("");

  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logoutAPI();
      if (res.data) {
        localStorage.removeItem("access_token");
        setUser({
          email: "",
          phone: "",
          fullName: "",
          role: "",
          avatar: "",
          id: "",
        });
        message.success("Logout successfully");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
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
                label: (
                  <span
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </span>
                ),
                key: "logout",
                icon: <LogoutOutlined />,
              },
            ],
          },
        ]
      : []),
  ];
  return (
    <>
      <Menu selectedKeys={[current]} mode="horizontal" items={items} />
    </>
  );
};

export default Header;
