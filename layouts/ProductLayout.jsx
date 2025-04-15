import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsContainer from "../components/products/ProductContainer";
const client = new QueryClient();
const ProductLayout = () => {
  return (
    <QueryClientProvider client={client}>
      <ProductsContainer></ProductsContainer>
    </QueryClientProvider>
  );
};

export default ProductLayout;
