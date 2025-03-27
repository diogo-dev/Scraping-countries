# I'm going to scrape the https://www.scrapethissite.com/pages/simple/ website

from bs4 import BeautifulSoup
import requests 

page_to_scrape = requests.get('https://www.scrapethissite.com/pages/simple/')
soup = BeautifulSoup(page_to_scrape.text, "html.parser")

countries_names = soup.find_all("h3", attrs={"class":"country-name"})
countries_capitals = soup.find_all("span", attrs={"class":"country-capital"})
countries_population = soup.find_all("span", attrs={"class":"country-population"})
countries_areas = soup.find_all("span", attrs={"class":"country-area"})

names = [name.text.strip() for name in countries_names]
capitals = [capital.text for capital in countries_capitals]
populations = [int(population.text) for population in countries_population]
areas = [float(area.text) for area in countries_areas]

country_list = [
    {"name": name, "capital": capital, "population": population, "area": area}
    for name, capital, population, area in zip(names, capitals, populations, areas)
]

API_URL = "http://localhost:8080/countries"
for country in country_list:
    response = requests.post(API_URL, json=country)
    print(f"Enviado: {country['name']} - Status: {response.status_code}")
    print("Resposta do servidor:", response.text, "\n")
