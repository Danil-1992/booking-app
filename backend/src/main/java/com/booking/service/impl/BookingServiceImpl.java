package com.booking.service.impl;

import com.booking.dto.BookingRequest;
import com.booking.model.Apartment;
import com.booking.model.Booking;
import com.booking.repository.ApartmentRepository;
import com.booking.repository.BookingRepository;
import com.booking.service.BookingService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

private final BookingRepository bookingRepository;
private final ApartmentRepository apartmentRepository;

public BookingServiceImpl(BookingRepository bookingRepository, ApartmentRepository apartmentRepository) {
    this.bookingRepository = bookingRepository;
    this.apartmentRepository = apartmentRepository;
}

    @Override
    public Booking createBookApartment(BookingRequest dto) {
        Apartment apartment = apartmentRepository.findById(dto.getApartmentId())
                .orElseThrow(() -> new EntityNotFoundException("Квартира не найдена"));

        Booking booking = new Booking();
        booking.setApartmentId(dto.getApartmentId());
        booking.setUserName(dto.getUserName());
        booking.setUserPhone(dto.getUserPhone());
        booking.setBookingTime(LocalDateTime.now());
        booking.setExpiresAt(LocalDateTime.now().plusHours(1));
        booking.setStatus("active");

        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
    checkAndExpireBooks();
    return bookingRepository.findAll();
}

     @Override
    public Booking cancelBooking(Long id) {
         Booking booking = bookingRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Бронь не найдена"));

         booking.setStatus("cancelled");
         return bookingRepository.save(booking);
     }

     private void checkAndExpireBooks() {
        List<Booking> activeBookings = bookingRepository.findByStatus("active");
        for (Booking booking : activeBookings) {
            if(booking.getExpiresAt().isBefore(LocalDateTime.now())) {
                booking.setStatus("expired");
                bookingRepository.save(booking);
            }
        }
     }
}
