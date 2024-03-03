import { Game } from "../Game.js";

export class Block {
  #ctx;
  constructor(ctx, x, y, texture, frames, id) {
    this.#ctx = ctx;

    this.pos = {
      x,
      y,
      dx: 0,
      dy: 0,
    };

    this.id = id;

    // Animation
    this.texture = texture;
    this.frames = frames;
    this.offset = 0;
  }
  /**
   * Runs every frame
   */
  update() {
    this.tick();
  }
  /**
   * Runs every animation frame
   */
  fixedUpdate() {}
  /**
   * Draws The Texture
   */
  draw() {
    this.#ctx.drawImage(
      this.texture,
      256 * this.offset,
      0,
      256,
      256,
      this.pos.dx,
      this.pos.dy,
      Game.blockSize,
      Game.blockSize
    );
  }
  /**
   * Animate The Texture
   */
  animate() {
    this.offset++
    if (this.offset >= this.frames) this.offset = 0
  }
  /**
   * Runs Every Tick. Can be modified unlike update
   */
  tick() {}
}
