type FetchData = {
  path: string;
};

export async function fetchData({ path }: FetchData) {
  const response = await fetch(
    `${String(process.env.BASE_URL)}${path}${path.includes("?") ? "&" : "?"}${
      process.env.MODE !== "development" && "filter[status][_eq]=published"
    }`
  );

  const data = await response.json();

  return data.data;
}
