import { Car } from "./js/Car.js";

const el = (id) => document.getElementById(id);
const $model = el("model");
const $brand = el("brand");
const $color = el("color");
const $year = el("year");
const $create = el("create");
const $start = el("start");
const $accelerate = el("accelerate");
const $stop = el("stop");
const $status = el("status");

let car = null;

function render() {
  if (!car) {
    $status.textContent = "Aucune voiture créée.";
    $start.disabled = true;
    $accelerate.disabled = true;
    $stop.disabled = true;
    return;
  }
  $status.textContent = car.status();
  $start.disabled = car.started;
  $accelerate.disabled = !car.started;
  $stop.disabled = !car.started && car.speed === 0;
}

$create.addEventListener("click", () => {
  const model = ($model.value || "Model 3").trim();
  const brand = ($brand.value || "Tesla").trim();
  const color = ($color.value || "rouge").trim();
  const year = parseInt($year.value || "2024", 10);
  car = new Car(model, brand, color, isNaN(year) ? 2024 : year);
  render();
});

$start.addEventListener("click", () => {
  if (!car) return;
  car.start();
  render();
});

$accelerate.addEventListener("click", () => {
  if (!car) return;
  car.accelerate(10);
  render();
});

$stop.addEventListener("click", () => {
  if (!car) return;
  car.stop();
  render();
});

render();
