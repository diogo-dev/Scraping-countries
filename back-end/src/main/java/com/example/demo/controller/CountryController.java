package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Country;
import com.example.demo.service.CountryService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/countries")
public class CountryController {

  private final CountryService service;

  public CountryController(CountryService service) {
    this.service = service;
  }

  @GetMapping
  public ResponseEntity<List<Country>> getAllCountries() {
    return ResponseEntity.ok(service.getAllCountries());
  }

  @PostMapping
  public ResponseEntity<String> addCountry(@RequestBody Country country) {
    service.saveCountry(country);
    return ResponseEntity.ok("Country saved: " + country.getName());
  }

}