import React, { useEffect } from "react";
import NavBar from "../widgets/NavBar/NavBar";
import { Outlet } from "react-router";
import { useAppDispatch } from "../shared/hooks/hooks";
import { getAllBookings } from "../entities/Bookings/model/bookingThunks";
import { getAllApartments } from "../entities/Apartments/model/apartmentThunks";

export default function Layout(): React.JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBookings());
  });

  useEffect(() => {
    dispatch(getAllApartments());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
