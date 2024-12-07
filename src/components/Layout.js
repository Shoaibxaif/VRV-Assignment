// components/Layout.jsx
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
