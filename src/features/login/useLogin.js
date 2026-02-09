import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../services/auth";
import { useAuth } from "../auth/context/AuthContext"; // Importa o hook do contexto

export const useLogin = () => {
  const { login } = useAuth(); // Pega a função de login do contexto
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginAdmin({
        identifier: data.email,
        password: data.password,
      });

      // Centralizado no Contexto
      login(response.user, response.jwt);

      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.message || "Erro ao realizar login");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
