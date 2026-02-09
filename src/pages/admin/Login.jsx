import { useLogin } from "../../features/login/useLogin";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

const LoginPage = () => {
  const { register, handleSubmit, errors, isSubmitting } = useLogin();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-xl bg-white p-6 shadow"
      >
        <Heading tag="h4">Login</Heading>

        <div className="flex flex-col gap-4 mt-6">
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email obrigatório" })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}

          <Input
            type="password"
            placeholder="Senha"
            {...register("password", { required: "Senha obrigatória" })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" variant="success" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
