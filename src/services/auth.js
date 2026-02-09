const API_URL = import.meta.env.VITE_API_URL;

export async function loginAdmin({ identifier, password }) {
  const res = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier, // email
      password,
    }),
  });

  if (!res.ok) {
    throw new Error("Email ou senha inválidos");
  }

  return res.json();
}
