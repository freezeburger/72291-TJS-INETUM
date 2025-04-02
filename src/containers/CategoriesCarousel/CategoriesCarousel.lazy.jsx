import { lazy, Suspense } from 'react';

const LazyCategoriesCarousel = lazy(() => import('./CategoriesCarousel'));

const CategoriesCarousel = props => (
  <Suspense fallback={null}>
    <LazyCategoriesCarousel {...props} />
  </Suspense>
);

export default CategoriesCarousel;
CategoriesCarousel.displayName = 'CategoriesCarousel';
