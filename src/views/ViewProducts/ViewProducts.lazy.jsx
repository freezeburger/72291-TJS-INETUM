import { lazy, Suspense } from 'react';

const LazyViewProducts = lazy(() => import('./ViewProducts'));

const ViewProducts = props => (
  <Suspense fallback={null}>
    <LazyViewProducts {...props} />
  </Suspense>
);

export default ViewProducts;
ViewProducts.displayName = 'ViewProductsLazy';
