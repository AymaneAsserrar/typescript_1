import { Car } from "./Car";

const car1 = new Car("Clio", "Renault", "bleu", 2018);
const car2 = new Car("Model 3", "Tesla", "rouge", 2024);

console.log("accélérer alors que la voiture est arrêtée");
console.log("car1 (avant):", car1.status());
car1.accelerate(10);
console.log("car1 (après tentative accélération à l’arrêt):", car1.status());

console.log("\n--- Séquence complète pour car2 ---");
console.log("Initial:", car2.status());
console.log("Action: start()");
car2.start();
console.log("État:", car2.status());

console.log("Action: accelerate(30)");
car2.accelerate(30);
console.log("État:", car2.status());

console.log("Action: accelerate(25)");
car2.accelerate(25);
console.log("État:", car2.status());

console.log("Action: stop()");
car2.stop();
console.log("État final:", car2.status());
