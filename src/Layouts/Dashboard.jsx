import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { Link, Outlet } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button onClick={showDrawer} className="text-black text-2xl">
          <VscThreeBars />
        </Button>
      </Space>
      <div>
        <Outlet />
      </div>
      <Drawer
        title="Urban Haven"
        onClose={onClose}
        open={open}
        placement="left"
      >
        <Link to="/dashboard/allModerator">All Moderator</Link>
        <Link to="/dashboard/users">Users</Link>
      </Drawer>
    </>
  );
};
export default Dashboard;
