// fetch the cars
// iterate over the cars and use forEach
// insert the cars one by one into the html

const addCar = (car) => {
  const newCar = `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/${car.brand}%20${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`;
  const carsList = document.querySelector(".cars-list");
  carsList.insertAdjacentHTML('beforeend', newCar);
};

const fetchCars = () => {
  const url = "https://wagon-garage-api.herokuapp.com/even-cooler-garage/cars"
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.forEach(addCar)
    });
};

export { addCar, fetchCars }
