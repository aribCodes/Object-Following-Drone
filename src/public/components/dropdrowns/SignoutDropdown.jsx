import React, { memo } from "react";
import { Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logoutUser, userDataOnLogin } from "../../../lib/services/firebaseService";
import auth from "../../../config/firebase/firebaseConfig";

// userDataOnLogin()
console.log(auth.currentUser)
// const userEmail = localStorage.getItem("userEmail") && localStorage.getItem("userEmail");
const items = [
  {
    key: "1",
    // label: <span>{auth.currentUser.email && auth.currentUser.email}</span>,
    label: <span>-</span>,
  },
  {
    key: "2",
    label: <span onClick={logoutUser}>Logout</span>,
  },
];

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

export default memo(SignoutDropdown);
