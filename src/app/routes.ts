import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { RoomsPage } from "./pages/RoomsPage";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { BookingPage } from "./pages/BookingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "rooms", Component: RoomsPage },
      { path: "activities", Component: ActivitiesPage },
      { path: "booking", Component: BookingPage },
    ],
  },
]);
