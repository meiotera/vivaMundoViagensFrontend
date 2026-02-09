const API_URL = import.meta.env.VITE_API_URL;

export async function getServicos() {
  const res = await fetch(`${API_URL}/api/servicos?populate=*`);

  if (!res.ok) {
    const errorBody = await res.json();
    console.error("Erro Strapi:", errorBody);
    throw new Error(errorBody?.error?.message || "Erro ao buscar serviços");
  }

  const json = await res.json();
  return json.data;
}
