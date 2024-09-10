export function images(url: string, id: string): { url: string } {
  return {
    url: `${url || process.env.BASE_URL}/assets/${id}`,
  };
}
