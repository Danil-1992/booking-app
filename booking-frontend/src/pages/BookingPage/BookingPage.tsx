import React from "react";
import { useAppSelector, useAppDispatch } from "../../shared/hooks/hooks";
import { cancelBooking } from "../../entities/Bookings/model/bookingThunks";
import styles from "./BookingPage.module.css";

export default function BookingPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { bookings, bookingLoading, bookingError } = useAppSelector(
    (state) => state.bookings
  );

  const handleCancel = (id: number) => {
    dispatch(cancelBooking(id));
  };

  if (bookingLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Загрузка бронирований...</p>
      </div>
    );
  }

  if (bookingError) {
    return (
      <div className={styles.error}>
        <p>❌ Ошибка: {bookingError}</p>
      </div>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div className={styles.empty}>
        <p>📭 У вас пока нет бронирований</p>
        <p>Вернитесь на главную и забронируйте квартиру</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мои бронирования</h1>
      <div className={styles.grid}>
        {bookings.map((booking) => (
          <div key={booking.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.statusBadge} data-status={booking.status}>
                {booking.status === "active" && "✅ Активно"}
                {booking.status === "cancelled" && "❌ Отменено"}
                {booking.status === "expired" && "⏰ Истекло"}
              </span>
              <span className={styles.id}>№ {booking.id}</span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.infoRow}>
                <span className={styles.label}>Квартира:</span>
                <span className={styles.value}>Кв. {booking.apartmentId}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.label}>Имя:</span>
                <span className={styles.value}>{booking.userName}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.label}>Телефон:</span>
                <span className={styles.value}>{booking.userPhone}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.label}>Забронировано:</span>
                <span className={styles.value}>
                  {new Date(booking.bookingTime).toLocaleString()}
                </span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.label}>Действительно до:</span>
                <span className={styles.value}>
                  {new Date(booking.expiresAt).toLocaleString()}
                </span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              {booking.status === "active" && (
                <button
                  onClick={() => handleCancel(booking.id)}
                  className={styles.cancelBtn}
                >
                  Отменить бронь
                </button>
              )}
              {booking.status === "cancelled" && (
                <span className={styles.cancelledText}>Бронь отменена</span>
              )}
              {booking.status === "expired" && (
                <span className={styles.expiredText}>Время истекло</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
