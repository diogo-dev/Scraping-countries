# Spring-boot + React + PostgreSQL + BeautifulSoup4

This is a full-stack simple project where I've used BeautifulSoup Python Library to scrape a website.

The web site is: https://www.scrapethissite.com/pages/simple/

After scrapring the page I sent all of the data (countries) to a back-end that saved the countries in a database. Then I had the idea of creating a front-end to exibt the information the way I wanned to (mostly I did this just for practice).

## Running the project
- 1st run the back-end with the command: mvn spring-boot:run
- 2nd execute the python script to save the information acquired through scraping
- 3rd while the back-end is still running, now you can execute the front-end with the command: npm run dev

## Reminder 
In the back-end there is a Controller file called: CountryController.java.

In this file exists an annotation: @CrossOrigin(origins = "http://localhost:5173"). If your front-end runs in a differt port DON'T FORGET to change it inside this annotation!

