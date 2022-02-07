// var getCity = document.getElementsByClassName("searchArea")

var searchBox = document.querySelector(".searchBox");
var buttonEl = document.querySelector(".searchBtn");

function getCity() {
  console.log("SEARCH BOX VALUE: ", searchBox.value);
  localStorage.setItem("city", searchBox.value);
  getLocation(searchBox.value);
}
buttonEl.addEventListener("click", getCity);

var getLocation = function (city) {
  console.log("CITY: ", city);
  fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${city}&appid=3d99aa740a8790cbc606690f11d5e00e`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};
