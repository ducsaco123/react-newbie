import { Button, Form, Input } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <div
          style={{
            // display: "flex",
            // gap: "15px",
            // flexDirection: "column",
            margin: "50px",
          }}
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
            rules={[{ required: true, message: "Please input your Email!" }]}
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
            rules={[{ required: true, message: "Please input your Phone!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => form.submit()}>
              Register
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default RegisterPage;
