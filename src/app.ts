import { Car, CarType } from "./Car.js";

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
const $type = el("type") as HTMLSelectElement;
const $maxSpeed = el("maxSpeed") as HTMLInputElement;

const $create = el("create") as HTMLButtonElement;
const $start = el("start") as HTMLButtonElement;
const $accelerate = el("accelerate") as HTMLButtonElement;
const $brake = el("brake") as HTMLButtonElement;
const $stop = el("stop") as HTMLButtonElement;
const $refuel = el("refuel") as HTMLButtonElement;

const $status = el("status") as HTMLElement;
const $speedometer = el("speedometer") as HTMLElement;
const $fuelGauge = el("fuelGauge") as HTMLElement;
const $colorPreview = el("colorPreview") as HTMLElement;

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

function updateGauges(): void {
  if (!car) return;

  const speedPercentage = (car.speed / car.maxSpeed) * 100;
  const speedLabel = $speedometer.querySelector(".gauge-label") as HTMLElement;
  const speedVisual = $speedometer.querySelector(
    ".gauge-visual"
  ) as HTMLElement;
  speedLabel.textContent = `${car.speed.toFixed(0)} km/h`;
  speedVisual.style.setProperty("--value", `${speedPercentage}%`);

  const fuelLabel = $fuelGauge.querySelector(".gauge-label") as HTMLElement;
  const fuelVisual = $fuelGauge.querySelector(".gauge-visual") as HTMLElement;
  fuelLabel.textContent = `${car.fuelLevel.toFixed(0)}%`;
  fuelVisual.style.setProperty("--value", `${car.fuelLevel}%`);
}

function updateColorPreview(): void {
  if ($colorPreview) {
    $colorPreview.style.backgroundColor = $color.value;
  }
}

function render(): void {
  if (!car) {
    $status.textContent = "Aucune voiture créée.";
    $start.disabled = true;
    $accelerate.disabled = true;
    $brake.disabled = true;
    $stop.disabled = true;
    $refuel.disabled = true;
    return;
  }

  $status.textContent = car.status();
  $start.disabled = car.started;
  $accelerate.disabled = !car.started;
  $brake.disabled = !car.started || car.speed === 0;
  $stop.disabled = !car.started && car.speed === 0;
  $refuel.disabled = car.started;

  updateGauges();
}

$color.addEventListener("input", updateColorPreview);
updateColorPreview();

$create.addEventListener("click", () => {
  const model = ($model.value || "Model 3").trim();
  const brand = ($brand.value || "Tesla").trim();
  const color = $color.value;
  const year = parseInt($year.value || "2024", 10);
  const type = $type.value as CarType;
  const maxSpeed = parseInt($maxSpeed.value || "200", 10);

  car = new Car(
    model,
    brand,
    color,
    isNaN(year) ? 2024 : year,
    type,
    isNaN(maxSpeed) ? 200 : maxSpeed
  );

  // Save to localStorage
  localStorage.setItem(
    "lastCar",
    JSON.stringify({
      model,
      brand,
      color,
      year,
      type,
      maxSpeed,
    })
  );

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

$brake.addEventListener("click", () => {
  if (!car) return;
  car.brake(10);
  render();
});

$stop.addEventListener("click", () => {
  if (!car) return;
  car.stop();
  render();
});

$refuel.addEventListener("click", () => {
  if (!car) return;
  car.refuel(100);
  render();
});

// Load last car from localStorage
const lastCar = localStorage.getItem("lastCar");
if (lastCar) {
  try {
    const { model, brand, color, year, type, maxSpeed } = JSON.parse(lastCar);
    $model.value = model;
    $brand.value = brand;
    $color.value = color;
    $year.value = year.toString();
    $type.value = type;
    $maxSpeed.value = maxSpeed.toString();
    updateColorPreview();
  } catch (e) {
    console.error("Failed to load last car:", e);
  }
}

setInterval(() => {
  if (car && car.started) {
    render();
  }
}, 1000);

render();
