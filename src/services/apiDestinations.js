// const API_URL = import.meta.env.VITE_API_URL;
const API_URL = import.meta.env.VITE_API_URL;

export async function getDestinos({ page = 1 }) {
  try {
    const res = await fetch(
      `${API_URL}/api/destinos?populate=Imagem&pagination[pageSize]=10&pagination[page]=${page}`,
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar destinos");
    }

    const json = await res.json();

    return json;
  } catch (error) {
    throw new Error("Erro ao buscar ofertas", error);
  }
}

export async function getAllDestinos() {
  try {
    const res = await fetch(`${API_URL}/api/destinos?populate=Imagem`);

    if (!res.ok) {
      throw new Error("Erro ao buscar destinos");
    }

    const json = await res.json();

    return json;
  } catch (error) {
    throw new Error("Erro ao buscar destinos", error);
  }
}

export async function getOfertas() {
  try {
    const endpoints = [
      `${API_URL}/api/destinos?filters[Promocao][$eq]=true&populate=*`,
    ];

    const responses = await Promise.all(endpoints.map((url) => fetch(url)));

    for (const res of responses) {
      if (!res.ok) {
        throw new Error("Erro ao buscar ofertas");
      }
    }

    const jsonPromises = responses.map((res) => res.json());
    const json = await Promise.all(jsonPromises);

    return json[0].data;
  } catch (error) {
    throw new Error("Erro ao buscar ofertas", error);
  }
}

export async function getDestaques() {
  try {
    const endpoints = [
      `${API_URL}/api/destinos?filters[Destaque][$eq]=true&populate=Imagem`,
    ];

    const responses = await Promise.all(endpoints.map((url) => fetch(url)));

    for (const res of responses) {
      if (!res.ok) {
        throw new Error("Erro ao buscar destaques");
      }
    }

    const jsonPromises = responses.map((res) => res.json());
    const json = await Promise.all(jsonPromises);

    return json[0].data;
  } catch (error) {
    throw new Error("Erro ao buscar destaques", error);
  }
}

export async function deleteDestino(id) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/destinos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Erro ao deletar destino");
  }
  if (res.status === 204) return { success: true };

  return res.json();
}

export async function createDestinoWithImage({ data, image }) {
  const token = localStorage.getItem("token");

  // 1 CRIA O DESTINO (JSON)
  const res = await fetch(`${API_URL}/api/destinos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("Erro ao criar destino:", error);
    throw new Error(error.error?.message || "Erro ao criar destino");
  }

  const destino = await res.json();

  // 2 UPLOAD DA IMAGEM
  if (image) {
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "api::destino.destino");
    formData.append("refId", destino.data.id);
    formData.append("field", "Imagem");

    const uploadRes = await fetch(`${API_URL}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!uploadRes.ok) {
      const uploadError = await uploadRes.json();
      console.error("Erro upload imagem:", uploadError);
      throw new Error("Erro ao enviar imagem");
    }
  }

  return destino;
}
