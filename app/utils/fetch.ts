import { endpoint } from "@/constants/endpoint";

type FetchData = {
  path: string;
};

export async function fetchData({ path }: FetchData) {
  const response = await fetch(
    `${`${endpoint}/graphql`}${path}${path.includes("?") ? "&" : "?"}${
      process.env.MODE !== "development" && "filter[status][_eq]=published"
    }`
  );

  const data = await response.json();

  return data.data;
}
