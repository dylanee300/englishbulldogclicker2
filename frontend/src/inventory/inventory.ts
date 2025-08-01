import { doggie } from "./clicker/click";

const totalDoggies:number = 3; // curent amount of doggies in game, the ones in te current market

const ownedDoggies = document.querySelectorAll("owned-doggies") as NodeListOf<HTMLDivElement>;
const totalOwned = document.getElementById("total-owned") as HTMLDivElement;
const equipDoggie = document.getElementById("equip-doggie") as HTMLButtonElement;
const unequipDoggie = document.getElementById("unequip-doggie") as HTMLButtonElement;
const currentDoggie = document.getElementById("doggie") as HTMLImageElement;

ownedDoggies.forEach((doggie) => {
  doggie.addEventListener("click", () => {
    console.log("Clicked:", doggie.dataset.name);
  });
});

