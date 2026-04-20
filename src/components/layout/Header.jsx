import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
import {
  BookOutlined,
  GithubOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";
import "./header.css";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location && location.pathname) {
      const allRoutes = ["user", "book"];
      const currentRoute = allRoutes.find(
        (route) => `/${route}` === location.pathname,
      );
      if (currentRoute) {
        setCurrent(currentRoute);
      } else {
        setCurrent("home");
      }
    }
  }, [location]);

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
      key: "user",
      icon: <UserOutlined />,
    },
    {
      label: <NavLink to="/book">Books</NavLink>,
      key: "book",
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
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-brand">
          <span className="site-brand__badge">RV</span>
          <div>
            <strong>React Starter</strong>
          </div>
        </Link>
        <Menu
          className="site-menu"
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </header>
  );
};

export default Header;
