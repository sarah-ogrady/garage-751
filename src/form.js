// import and export
// select the form
// select all the inputs of the form
// prevent default
// post ajax request to the API
// on submit - event listener
import { addCar } from './car';

const form = document.querySelector("#new-car");

const createNewCar = () => {
  const anotherNewCar = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    plate: document.getElementById("plate").value,
    owner: document.getElementById("owner").value
  };
  const url = "https://wagon-garage-api.herokuapp.com/even-cooler-garage/cars";
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(anotherNewCar)
  })
    .then(response => response.json())
    .then((data) => {
      addCar(data);
      form.reset();
    });
};

const formEventListener = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    createNewCar();
  });
}

export { formEventListener };
