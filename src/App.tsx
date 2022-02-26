import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import FallBackView from './components/FallBackView';
import ProductList from './pages/ProductList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FallBackView />}>
        <ProductList />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
