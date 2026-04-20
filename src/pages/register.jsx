import { Button, Form, Input, Typography, notification } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone,
    );
    if (res.data) {
      notification.success({
        message: "Register User",
        description: "Đăng ký user thành công",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Error Register User",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-title">
          <h1>Create account</h1>
          <p>Đăng ký nhanh để bắt đầu quản lý người dùng và kho sách.</p>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          disabled={loading}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please input your Full Name!" },
            ]}
          >
            <Input />
          </Form.Item>

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

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Register
            </Button>
          </Form.Item>
        </Form>

        <Typography.Text className="auth-footer">
          Đã có tài khoản?{" "}
          <span className="auth-link" onClick={() => navigate("/login")}>
            Đăng nhập ngay
          </span>
        </Typography.Text>
      </div>
    </div>
  );
};

export default RegisterPage;
