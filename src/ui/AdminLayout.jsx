import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMainNav from "./AdminMainNav";

const AdminLayout = () => {
  return (
    <div className="container m-auto flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <AdminMainNav itemMenu={["Dashboard", "Destinos"]} />

      {/* CONTEÚDO */}
      <main className="flex-1 overflow-y-auto p-6">
        <AdminHeader />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
