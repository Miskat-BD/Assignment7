import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/homePage/HomePage";
import FriendDetails from "../Pages/friendDetails/FriendDetails";
import Stats from "../Pages/Stats/Stats";
import TimeLine from "../Pages/timeLines/TimeLine";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/friend-details',
        Component: FriendDetails
      },
      {
        path: '/timeline',
        Component: TimeLine
      },
      {
        path: '/stats',
        Component: Stats
      }
    ]
  }
])