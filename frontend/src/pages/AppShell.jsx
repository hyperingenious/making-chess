import { Outlet } from "react-router-dom";

function AppShell() {
  return (
    <div>
      <h1>So everyone, it's highly adv</h1>
      <Outlet />
    </div>
  );
}

export default AppShell;
