import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootProvider } from './store';

import FallBackView from './components/FallBackView';
import ProductList from './pages/ProductList';

function App() {
  return (
    <RootProvider>
      <Suspense fallback={<FallBackView />}>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<ProductList />} />
          </Routes>
        </Router>
      </Suspense>
    </RootProvider>
  );
}

export default App;
