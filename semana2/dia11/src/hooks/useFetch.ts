import { useState, useEffect } from "react";

type Error = 'string'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController(); // para poder cancelar si el componente se desmonta
    const { signal } = controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result: T = await response.json(); // 👈 Aquí tipamos dinámicamente
        setData(result);
        setError(null);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message || "Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // limpieza al desmontar
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
