import { lazy } from 'react';

export const MainPage = lazy(async () => import('./main-page'));
export const PlatformPage = lazy(async () => import('./platform-page/ui'));
export const CoursePage = lazy(async () => import('./course-page/ui/'));
export const PrivateCabinet = lazy(async () => import('./private-cabinet/'))
