export const fetchProducts = async () => {
  const url = process.env.NEXT_PUBLIC_DATA_SUPABASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_DATA_SUPABASE_ANON_KEY;
  // const url = "https://rqumbnvfrmsowdaxrvkm.supabase.co/rest/v1/9TSEVEN";
  // const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdW1ibnZmcm1zb3dkYXhydmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjIzOTAsImV4cCI6MjA2MjYzODM5MH0.JpvYefKey3yiK285pXmaVs-tAR15E9OhoBp3bA22pKY";

  const options = {
    method: "GET",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
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
