import {
  Button,
  Checkbox,
  Form,
  Input,
  Space,
  Typography,
  notification,
} from "antd";
import { loginUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await loginUserAPI(values.email, values.password);
      console.log(res);
      if (res.data) {
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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background:
          "linear-gradient(135deg, rgb(244, 247, 255) 0%, rgb(232, 243, 255) 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          padding: "32px 28px",
          borderRadius: "24px",
          backgroundColor: "#ffffff",
          boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
          border: "1px solid rgba(148, 163, 184, 0.18)",
        }}
      >
        <Space direction="vertical" size={6} style={{ marginBottom: "28px" }}>
          <Typography.Title
            level={2}
            style={{ margin: 0, fontSize: "30px", color: "#0f172a" }}
          >
            Welcome back
          </Typography.Title>
          <Typography.Text style={{ color: "#64748b", fontSize: "15px" }}>
            Đăng nhập để tiếp tục sử dụng hệ thống của bạn.
          </Typography.Text>
        </Space>

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

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              style={{ height: "44px", fontWeight: 600, borderRadius: "12px" }}
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <Typography.Text style={{ color: "#64748b", fontSize: "14px" }}>
          Chưa có tài khoản?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{
              color: "#1677ff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Đăng ký ngay
          </span>
        </Typography.Text>
      </div>
    </div>
  );
};

export default LoginPage;
