import { Link } from "react-router";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BookingModal from "../BookingModal/BookingModal";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";

import {
  bookingSchema,
  type BookingFormData,
} from "../../entities/Bookings/types/bookingSchema";
import { createBooking } from "../../entities/Bookings/model/bookingThunks";

export default function NavBar() {
  const [book, setBook] = useState(false);
  const dispatch = useAppDispatch();
  const { apartments } = useAppSelector((state) => state.apartments);
  const { bookingLoading, bookings } = useAppSelector(
    (state) => state.bookings
  );
  console.log(bookings);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      apartmentId: "",
      userName: "",
      userPhone: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    await dispatch(
      createBooking({
        apartmentId: data.apartmentId,
        userName: data.userName,
        userPhone: data.userPhone,
      })
    );
    reset();
    setBook(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🏠</span>
          <span className={styles.logoText}>
            Book<span className={styles.logoAccent}>Room</span>
          </span>
        </div>

        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            <span className={styles.linkIcon}>🔍</span>
            <span>Найти квартиру</span>
          </Link>

          <Link to="/bookings" className={styles.navLink}>
            <span className={styles.linkIcon}>📋</span>
            <span>Актуальные брони</span>
          </Link>

          <button className={styles.bookButton} onClick={() => setBook(true)}>
            <span>➕</span>
            <span>Забронировать</span>
          </button>
        </div>
      </div>

      <BookingModal isOpen={book} onClose={() => setBook(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h3>Забронировать квартиру</h3>

          <div className={styles.formGroup}>
            <label>Выберите квартиру *</label>
            <select {...register("apartmentId")}>
              <option value="">-- Выберите квартиру --</option>
              {apartments?.map((apt) => (
                <option key={apt.id} value={apt.id}>
                  {apt.houseAddress} - кв. {apt.number}
                </option>
              ))}
            </select>
            {errors.apartmentId && (
              <span className={styles.error}>{errors.apartmentId.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Ваше имя *</label>
            <input
              type="text"
              {...register("userName")}
              placeholder="Иван Иванов"
            />
            {errors.userName && (
              <span className={styles.error}>{errors.userName.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Телефон *</label>
            <input
              type="tel"
              {...register("userPhone")}
              placeholder="+7-999-123-45-67"
            />
            {errors.userPhone && (
              <span className={styles.error}>{errors.userPhone.message}</span>
            )}
          </div>

          <div className={styles.formButtons}>
            <button
              type="button"
              onClick={() => setBook(false)}
              className={styles.cancelBtn}
            >
              Отмена
            </button>
            <button
              type="submit"
              disabled={bookingLoading}
              className={styles.submitBtn}
            >
              {bookingLoading ? "Бронируем..." : "Забронировать"}
            </button>
          </div>
        </form>
      </BookingModal>
    </nav>
  );
}
