import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootProvider } from './store';

import FallBackView from './components/FallBackView';
import Navigator from './pages/Navigator';
import ProductList from './pages/ProductList';

function App() {
  return (
    <RootProvider>
      <Suspense fallback={<FallBackView />}>
        <Router>
          <Routes>
            <Route path='/' element={<Navigator />} />
            <Route path='/products' element={<ProductList />} />
          </Routes>
        </Router>
      </Suspense>
    </RootProvider>
  );
}

export default App;
