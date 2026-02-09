const API_URL = import.meta.env.VITE_API_URL;

export async function getPacotes({ page = 1 }) {
  try {
    const res = await fetch(
      `${API_URL}/api/pacotes?populate=Imagem&pagination[pageSize]=10&pagination[page]=${page}`,
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar os pacotes");
    }

    const json = await res.json();

    return json;
  } catch (error) {
    throw new Error("Não foi possivel buscar os pacotes", error);
  }
}

export async function getAllPacotes() {
  try {
    const res = await fetch(`${API_URL}/api/pacotes?populate=Imagem`);

    if (!res.ok) {
      throw new Error("Erro ao buscar os pacotes");
    }

    const json = await res.json();

    return json;
  } catch (error) {
    throw new Error("Não foi possivel buscar os pacotes", error);
  }
}
