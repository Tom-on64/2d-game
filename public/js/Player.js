import { Game } from "./Game.js";
import { World } from "./World.js";
import { loadImage } from "./utils.js";

export class Player {
  // DOM
  #ctx;
  #canvas;
  /**
   * Creates the player
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx, x, y, canvas) {
    this.#ctx = ctx;
    this.#canvas = canvas;
    // Player Data
    this.health = 100;
    this.speed = 3;
    this.jump = 4;
    this.inventory = [];
    this.pos = {
      x,
      y,
      vx: 0,
      vy: 0,
    };
    this.keydown = false;
    this.key = "";
    // Texture
    this.texture = loadImage("/img/player.png");
    this.frames = 6
    this.offset = 0
  }
  /**
   * Runs every frame
   */
  update() {
    this.draw();

    // Velocity
    this.pos.x += this.pos.vx;
    this.pos.y += this.pos.vy;

    // Gravity
    if (!this.collisionCheck().bottom) this.pos.vy += Game.gravity;
    if (this.collisionCheck().bottom) this.pos.vy = 0;

    // Friction
    if (this.pos.vx > 0 + Game.friction) this.pos.vx -= Game.friction;
    else if (this.pos.vx < 0 - Game.friction) this.pos.vx += Game.friction;
    else this.pos.vx = 0;

    // Keypress Handeling
    if (this.keydown) {
      if (this.key == "ArrowRight" || this.key == "D") this.pos.vx = this.speed;
      if (this.key == "ArrowLeft" || this.key == "A") this.pos.vx = -this.speed;
      if (this.key == " " || this.key == "W")
        if (this.collisionCheck().bottom) this.pos.vy = -this.jump;
    }
  }
  /**
   * Runs every animation frame
   */
  fixedUpdate() {
    if (this.offset < 5) this.offset += 1
    else this.offset = 0
  }
  /**
   * Draws Sprites
   */
  draw() {
    this.#ctx.drawImage(
      this.texture,
      256 * this.offset,
      0, 
      256, 
      256, 
      this.#canvas.width / 2 - Game.blockSize / 2, 
      this.#canvas.height / 2 - Game.blockSize / 2, 
      Game.blockSize, 
      Game.blockSize, 
    );
  }
  /**
   * Checks for collisions
   * @returns {object} Contains left, right, top, bottom: Each are bools, true if coliding
   */
  collisionCheck() {
    let left = false;
    let right = false;
    let top = false;
    let bottom = false;

    return { left, right, top, bottom };
  }
}
