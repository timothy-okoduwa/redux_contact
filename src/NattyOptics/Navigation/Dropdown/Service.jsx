import React from "react";
import { Menu, Dropdown, Space } from "antd";
const Service = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a>First thing you want to link to</a>
      </Menu.Item>
      <Menu.Item>
        <a>second thing you want to link to</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Space direction="horizontal">
        <Space wrap>
          <Dropdown overlay={menu} placement="bottomCenter">
            <div>SERVICE</div>
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
};

export default Service;
