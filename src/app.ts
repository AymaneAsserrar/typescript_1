import { Car } from "./Car.js";

const el = (id: string): HTMLElement | null => {
  const element = document.getElementById(id);
  if (!element) {
    console.error(`Element with id "${id}" not found`);
  }
  return element;
};

const $model = el("model") as HTMLInputElement;
const $brand = el("brand") as HTMLInputElement;
const $color = el("color") as HTMLInputElement;
const $year = el("year") as HTMLInputElement;
const $create = el("create") as HTMLButtonElement;
const $start = el("start") as HTMLButtonElement;
const $accelerate = el("accelerate") as HTMLButtonElement;
const $stop = el("stop") as HTMLButtonElement;
const $status = el("status") as HTMLElement;

// Debug check for all elements
console.log("Elements loaded:", {
  model: $model,
  brand: $brand,
  color: $color,
  year: $year,
  create: $create,
  start: $start,
  accelerate: $accelerate,
  stop: $stop,
  status: $status,
});

let car: Car | null = null;

function render(): void {
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
  console.log("Create button clicked");
  const model = ($model.value || "Model 3").trim();
  const brand = ($brand.value || "Tesla").trim();
  const color = ($color.value || "rouge").trim();
  const year = parseInt($year.value || "2024", 10);
  console.log("Creating car with:", { model, brand, color, year });
  car = new Car(model, brand, color, isNaN(year) ? 2024 : year);
  console.log("Car created:", car);
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

// Initial render
render();
