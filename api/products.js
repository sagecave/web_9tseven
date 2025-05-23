export const fetchProducts = async () => {
  // const url = "https://dummyjson.com/products";
  const url = "https://rqumbnvfrmsowdaxrvkm.supabase.co/rest/v1/9TSEVEN";
  const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdW1ibnZmcm1zb3dkYXhydmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjIzOTAsImV4cCI6MjA2MjYzODM5MH0.JpvYefKey3yiK285pXmaVs-tAR15E9OhoBp3bA22pKY";
  // const URL_full = url + "?apikey=" + API_KEY;

  const options = {
    method: "GET",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
      // Authorization: "Bearer " + API_KEY,
    },
  };

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
