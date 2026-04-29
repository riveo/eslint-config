import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ComponentSmoke } from './smoke/component.tsx';
import { HooksAndA11ySmoke } from './smoke/hooks-and-a11y.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComponentSmoke />
    <HooksAndA11ySmoke />
  </StrictMode>,
);
