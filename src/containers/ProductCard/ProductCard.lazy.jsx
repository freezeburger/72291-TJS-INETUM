import { lazy, Suspense } from 'react';

const LazyProductCard = lazy(() => import('./ProductCard'));

const ProductCard = props => (
  <Suspense fallback={null}>
    <LazyProductCard {...props} />
  </Suspense>
);

export default ProductCard;
ProductCard.displayName = 'ProductCard';
