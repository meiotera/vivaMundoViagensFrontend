import { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/site/Home";
import Destinations from "./pages/site/Destinations";
import About from "./pages/site/About";
import Contact from "./pages/site/Contact";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loader as loaderHome } from "./pages/site/Home";
import { loader as loaderDestinations } from "./pages/site/Destinations";
import { loader as loaderDashboard } from "./pages/admin/Dashboard";

import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

import { AuthProvider } from "./features/auth/context/AuthContext";
import Destinos from "./pages/admin/Destinos";

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const Root = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          { path: "/", element: <Home />, loader: loaderHome },
          {
            path: "destinos",
            element: <Destinations />,
            loader: loaderDestinations,
          },
          { path: "sobre", element: <About /> },
          { path: "contato", element: <Contact /> },
        ],
      },
      {
        path: "/admin/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
                loader: loaderDashboard,
              },
              {
                path: "destinos",
                element: <Destinos />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Carregando...</div>}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />

      <Toaster position="top-center" autoClose={3000} theme="colored" />
    </QueryClientProvider>
  );
};

export default App;
