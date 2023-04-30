import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { PlatformPage } from 'pages/platform-page';
import { PrivateCabinet } from 'pages/private-cabinet';
import { CoursePage } from 'pages/course-page';
import { TopicPage } from 'pages/topic-page';
import { GroupedCoursePage } from "pages/grouped-course-page";

export enum AppRoutes {
  MAIN = 'MAIN',
  PLATFORM = 'PLATFORM',
  PLATFORM_COURSE = 'PLATFORM_COURSE',
  PRIVATE_CABINET = 'PRIVATE_CABINET',
  TOPIC = 'TOPIC',
  GROUPED_COURSE = 'GROUPED_COURSE'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PLATFORM]: '/platform',
  [AppRoutes.PRIVATE_CABINET]: '/private-cabinet',
  [AppRoutes.PLATFORM_COURSE]: '/course/:id',
  [AppRoutes.TOPIC]: '/course/:id/topic/:id',
  [AppRoutes.GROUPED_COURSE]: '/course/grouped-course'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
  [AppRoutes.PLATFORM]: {
    path: RoutePath.PLATFORM,
    element: <PlatformPage />,
  },
  [AppRoutes.PRIVATE_CABINET]: {
    path: RoutePath.PRIVATE_CABINET,
    element: <PrivateCabinet />,
  },
  [AppRoutes.PLATFORM_COURSE]: {
    path: RoutePath.PLATFORM_COURSE,
    element: <CoursePage />,
  },
  [AppRoutes.TOPIC]: {
    path: RoutePath.TOPIC,
    element: <TopicPage />,
  },
  [AppRoutes.GROUPED_COURSE]: {
    path: RoutePath.GROUPED_COURSE,
    element: <GroupedCoursePage />,
  }
};
