import { Player } from "./Player.js";
import { World } from "./World.js";
import blocks from "./blocks/blocks.js";

export class Game {
  // DOM
  #canvas;
  #ctx;
  // Classes
  #world;
  #player;
  // Game
  static blocks = blocks;
  static entities = [];
  static items = [];
  static blockSize = 64;
  static gravity = 0.1;
  static friction = 0.1;
  /**
   * Create A Game Client
   * @param {CanvasRenderingContext2D} ctx Context for 2d canvas graphics
   * @param {HTMLCanvasElement} canvas Canvas for client
   */
  constructor(ctx, canvas) {
    this.#ctx = ctx;
    this.#canvas = canvas;

    // Classes
    this.#world = new World(this.#ctx);
    this.#player = new Player(this.#ctx, 0, 100, this.#canvas);

    // Timing
    this.timestamp = 0;
    this.timer = 0;
    this.timeBuffer = 100;

    // Resizing
    window.onresize = () => this.resize();
    this.resize();

    // Button Detection
    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));

    this.update(0);
  }
  /**
   * The update loop (run once)
   */
  update(time = 0) {
    // Create deltatime
    let dt = time - this.timestamp;
    this.timestamp = time;

    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

    // Runs Every Frame
    this.#player.update();
    this.#world.update();

    // Only Runs Every Animation Frame
    if (this.timer >= this.timeBuffer) {
      // Update
      this.#player.fixedUpdate();
      this.#world.fixedUpdate();
      // Timer
      this.timer = 0;
    } else this.timer += dt;
    // Request Another Loop
    requestAnimationFrame(this.update.bind(this));
  }
  /**
   * Handle keydown event
   * @param {*} e
   */
  keydown(e) {
    this.#player.keydown = true;
    this.#player.key = e.key;
  }
  /**
   * Handle keyup event
   * @param {*} e
   */
  keyup(e) {
    this.#player.keydown = false;
    this.#player.key = e.key;
  }
  /**
   * Resizes canvas
   */
  resize() {
    this.#canvas.width =
      Math.floor(window.innerWidth / Game.blockSize) * Game.blockSize;
    this.#canvas.height =
      Math.floor(window.innerHeight / Game.blockSize) * Game.blockSize;
  }
}
