export default async function Config(
  method: string,
  url: string,
  query?: Record<string, any>,
  body?: Record<string, any>
) {
  const app_url = import.meta.env.VITE_API_URL;
  const api_key = import.meta.env.VITE_API_KEY;

  const params = new URLSearchParams({
    api_key,
    language: "es-ES",
    ...(query || {}),
  });

  const config: RequestInit = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method.toUpperCase() !== "GET" && body) {
    config.body = JSON.stringify(body);
  }

  try {
    const api = await fetch(`${app_url}${url}?${params.toString()}`, config);

    if (!api.ok) {
      throw new Error(`HTTP error! Status: ${api.status}`);
    }
    return await api.json();
  } catch (error) {
    console.error(error);
    return {};
  }
}
