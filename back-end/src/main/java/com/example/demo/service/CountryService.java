package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.example.demo.repository.CountryRepository;
import com.example.demo.model.Country;

@Service
public class CountryService {

  private final CountryRepository repository;

  public CountryService(CountryRepository repository) {
    this.repository = repository;
  }

  public List<Country> getAllCountries() {
    return repository.findAll();
  }

  public void saveCountry(Country country) {
    if (!repository.existsByName(country.getName())) {
      repository.save(country);
    }
  }

}
