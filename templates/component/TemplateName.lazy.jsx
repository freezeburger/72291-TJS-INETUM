import { lazy, Suspense } from 'react';

const Lazytemplatename = lazy(() => import('./TemplateName'));

const TemplateName = props => (
  <Suspense fallback={null}>
    <Lazytemplatename {...props} />
  </Suspense>
);

export default TemplateName;
TemplateName.displayName = 'TemplateName';
