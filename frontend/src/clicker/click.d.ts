declare global {
  const doggie: HTMLImageElement;
  const display: HTMLSpanElement;
  let count: number;
}

interface HTMLElementTagNameMap {
  "doggie": HTMLImageElement;
  "doggies": HTMLSpanElement;
  "exit-button": HTMLButtonElement;
  "Upgrades-button": HTMLButtonElement;
}