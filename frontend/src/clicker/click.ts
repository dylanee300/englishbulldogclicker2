document.getElementById("exit-button")?.addEventListener("click", () => {
    window.location.href = "main.html";
});

document.getElementById("Upgrades-button")?.addEventListener("click", () => {
    window.location.href = "404.html";
});

const doggie = document.getElementById('doggie') as HTMLImageElement;
const display = document.getElementById('doggies') as HTMLSpanElement;

let count: number = parseInt(localStorage.getItem("count") || "0", 10);
let dpc: number = parseInt(localStorage.getItem("dpc") || "1", 10);

const doggies = document.getElementById("doggies");
if (doggies) {
  doggies.innerText = count.toString();
}

doggie.addEventListener("click", () => {
    count += dpc;
    localStorage.setItem("count", count.toString());
    display.innerText = count.toString();
});

// may have to do upgrades in here... 