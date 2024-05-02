import React from "react";
import { Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const userEmail = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).email;

const items = [
  {
    key: "1",
    label: <span>{userEmail&&userEmail}</span>,
  },
  {
    key: "2",
    label: (
      <span
        onClick={logoutUser}
      >
        Logout
      </span>
    ),
  },
];

function logoutUser() {
    localStorage.removeItem("user");
}

const SignoutDropdown = () => {
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button style={{ display: "flex", alignItems: "center" }}>
          <UserOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default SignoutDropdown;
