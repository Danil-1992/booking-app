import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../Layout";
import MainPage from "../../pages/MainPage/MainPage";
import BookingPage from "../../pages/BookingPage/BookingPage";

export default function Router(): React.JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="bookings" element={<BookingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
