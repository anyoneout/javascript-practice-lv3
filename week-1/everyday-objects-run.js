import { Car } from "./everyday-objects.js";
import { Phone } from "./everyday-objects.js";
import { Book } from "./everyday-objects.js";
import { Laptop } from "./everyday-objects.js";
import { Backpack } from "./everyday-objects.js";

// use node everyday-objects.js to try this out.
// Create instances
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Output: "2020 Toyota Corolla"
myCar.startEngine(); // Output: "The engine of Toyota Corolla is now running."

const myPhone = new Phone("Samsung", "Galaxy S10e", "20%");
myPhone.makeCall(8675309);
myPhone.batteryStatus();

const myBook = new Book("The Three Body Problem", "Liu Cixin", 302 );
const summary = myBook.getSummary();
console.log(summary);
myBook.readPage();

const myLaptop = new Laptop("Acer", "silver", 512);
myLaptop.bootUp();
myLaptop.shutDown();

const myBackpack = new Backpack("Jansport", "black", 24);
myBackpack.open();
myBackpack.checkCapacity();
