const url = "https://rqumbnvfrmsowdaxrvkm.supabase.co/rest/v1/9TSEVEN";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdW1ibnZmcm1zb3dkYXhydmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjIzOTAsImV4cCI6MjA2MjYzODM5MH0.JpvYefKey3yiK285pXmaVs-tAR15E9OhoBp3bA22pKY";
const options = {
  method: "GET",
  headers: {
    apikey: API_KEY,
    "Content-Type": "application/json",
    // Authorization: "Bearer " + API_KEY,
  },
};
export const fetchProducts = async () => {
  // const url = "https://dummyjson.com/products";

  // const URL_full = url + "?apikey=" + API_KEY;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const json = await response.json();
  console.log(json);
  return json;
};

// export async function singleProductFetch(request, segmentData) {
//   const params = await segmentData.params
//   const slug = params.slug
// }

export async function getProductSlug(slug, options) {
  console.log("slug", slug);
  let urlSingle = await fetch(`https://rqumbnvfrmsowdaxrvkm.supabase.co/rest/v1/9TSEVEN?slug_name=eq.${slug}`);
  const response = await fetch(urlSingle, options);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  let data = await response.json();
  console.log(data);
  return data;
}
