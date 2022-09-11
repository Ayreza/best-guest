const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5a0ac9c18amshbb05d9344e9ffd0p1cf3a6jsn49aa092661f0",
    "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
  },
};

fetch(
  "https://airbnb19.p.rapidapi.com/api/v1/searchProperty?category=TAB_8225&totalRecords=10&currency=USD&adults=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
