import { Game } from "./js/Game.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

new Game(ctx, canvas);
