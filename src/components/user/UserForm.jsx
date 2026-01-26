import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");

  const handleClickBtn = () => {
    console.log(fullName, Email, Password, Phone);
  };
  return (
    <div className="user-form" style={{ width: "90%", margin: "10px 20px" }}>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <Input value={Email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <span>Phone</span>
          <Input value={Phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <Button type="primary" onClick={handleClickBtn}>
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
