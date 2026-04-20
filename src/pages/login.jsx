import { Button, Form, Input, Typography, notification } from "antd";
import { loginUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await loginUserAPI(values.email, values.password);
      if (res.data) {
        localStorage.setItem("access_token", res.data.access_token);
        setUser(res.data.user);
        notification.success({
          message: "Login User",
          description: "Đăng nhập user thành công",
        });
        navigate("/");
      } else {
        notification.error({
          message: "Error Login User",
          description: JSON.stringify(res.message),
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-title">
          <h1>Welcome back</h1>
          <p>Đăng nhập để tiếp tục sử dụng hệ thống của bạn.</p>
        </div>

        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          disabled={loading}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" loading={loading}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>

        <Typography.Text className="auth-footer">
          Chưa có tài khoản? {" "}
          <span className="auth-link" onClick={() => navigate("/register")}>
            Đăng ký ngay
          </span>
        </Typography.Text>
      </div>
    </div>
  );
};

export default LoginPage;
