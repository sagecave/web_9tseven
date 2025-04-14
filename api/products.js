export const fetchProducts = async () => {
  const url = "https://dummyjson.com/products";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + API_KEY,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const json = await response.json();
  return json.products;
};
