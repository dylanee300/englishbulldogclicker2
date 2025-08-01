const ownedDoggies = document.querySelectorAll("owned-doggie") as NodeListOf<HTMLDivElement>;
const totalOwned = document.getElementById("total-Owned") as HTMLDivElement;
const equiptDoggie = document.getElementById("equipt-Doggie") as HTMLButtonElement;
const unequiptDoggie = document.getElementById("unequipt-Doggie") as HTMLButtonElement;

ownedDoggies.forEach((doggie) => {
    doggie.addEventListener("click", () => {
        console.log("test");
    });
});