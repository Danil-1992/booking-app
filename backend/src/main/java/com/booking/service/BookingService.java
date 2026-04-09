package com.booking.service;

import com.booking.dto.BookingRequest;
import com.booking.model.Booking;

import java.util.List;

public interface BookingService {
    Booking createBookApartment(BookingRequest booking);
    List<Booking> getAllBookings();
    Booking cancelBooking(Long id);
}
