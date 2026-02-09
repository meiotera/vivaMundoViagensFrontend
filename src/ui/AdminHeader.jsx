import { useAuth } from "../features/auth/context/AuthContext";

const AdminHeader = () => {
  const { logout, user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Resumo Geral</h1>

        <div className="flex items-center gap-4">
          <span className="text-gray-600">
            Olá, <strong className="capitalize">{user?.username}</strong>
          </span>
          <button
            onClick={logout}
            className="text-sm bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 transition"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
