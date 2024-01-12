
$('#search-button').on('click', function (e) {
    e.preventDefault()

    const searchInput = $("#search-input").val().trim();

const apiKey = '4321925998421f25dc4380154a8ce64c';
const queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&appid=${apiKey}`;




fetch (queryURL)
.then(function (response) {
    return response.json();

})
.then(function (data) {
    console.log(data);
    const newQueryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}`

    fetch(newQueryUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
    })
})

})


