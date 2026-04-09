package com.booking.service.impl;

import com.booking.model.Apartment;
import com.booking.repository.ApartmentRepository;
import com.booking.service.ApartmentService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ApartmentServiceImpl implements ApartmentService {

    private final ApartmentRepository apartmentRepository;

    public ApartmentServiceImpl(ApartmentRepository apartmentRepository) {
        this.apartmentRepository = apartmentRepository;
    }

    @Override
    public List<Apartment> getAllApartments() {
        return apartmentRepository.findAll();
    }
}
