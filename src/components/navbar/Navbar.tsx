import { Layout, Menu, MenuProps } from "antd";
import { ViewType } from "../../types";
import { useState } from "react";

import styles from "./navbar.module.css";

const { Sider } = Layout;

type NavbarProps = {
  onItemChange: (value: ViewType) => void;
};

const Navbar = (props: NavbarProps) => {
  const { onItemChange } = props;

  const [collapsed, setCollapsed] = useState(false);

  const menuItems: MenuProps["items"] = [
    { key: "list", label: "List" },
    { key: "calendar", label: "calendar" },
  ];

  return (
    <Sider breakpoint="lg" collapsedWidth={0} width={200}>
      <Menu
        mode="vertical"
        defaultSelectedKeys={["list"]}
        onSelect={(item) => {
          onItemChange(item.key as ViewType);
        }}
        style={{ height: "100%", borderRight: 0 }}
        items={menuItems}
      />
    </Sider>
  );
};
export default Navbar;