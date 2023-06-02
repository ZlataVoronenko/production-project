import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // setTimeout for test
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
