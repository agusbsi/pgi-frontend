import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      const { username, password } = values;

      if (username === "admin" && password === "admin") {
        message.success("Login successful!");
        navigate("/dashboard"); // Alihkan ke halaman dashboard admin
      } else if (username === "investor" && password === "investor") {
        message.success("Login successful!");
        navigate("/mobile"); // Alihkan ke halaman dashboard investor
      } else {
        message.error("Login failed! Invalid username or password.");
      }

      setLoading(false);
    }, 1000); // Simulasi delay loading
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: "linear-gradient(to top, #0f00ff, #0000ff)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          maxWidth: 350,
          width: "100%",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex justify-center mb-5">
          <img
            src="/logo192.png" // Path relatif dari folder public
            alt="Logo"
            style={{ width: 100, height: 100, objectFit: "contain" }}
          />
        </div>
        <Text
          strong
          style={{
            display: "block",
            marginBottom: "1rem",
            fontSize: "16px",
          }}
        >
          ( Pemuda Group Indonesia )
        </Text>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            className="text-left"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
