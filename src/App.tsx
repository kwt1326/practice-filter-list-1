import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import ProductList from './pages/ProductList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );
}

export default App;
