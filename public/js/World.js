export class World {
  #ctx;
  #canvas;
  // World
  static renderMap = []
  /**
   * Creates the world
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx, canvas, seed) {
    this.#ctx = ctx;
    this.#canvas = canvas;
    this.seed = 345;

    this.generateChunk(10, this.seed, true);
  }
  /**
   * Runs every frame
   */
  update() {}
  /**
   * Runs every animation frame
   */
  fixedUpdate() {}
  /**
   * Generates a single chunk
   * @param {number} x Chunk coordinate
   * @param {number} seed Seed
   * @param {boolean} isFlat If the generated world is flat
   */
  generateChunk(x, seed, isFlat=false) {
    for (let i = 0; i <= x; i++) seed = this.rng(seed);
    if (isFlat) { // Generate A Flat World
      
      return
    } // Generate A Normal World

  }

  rng(seed) {
    let a = 1664525;
    let c = 1013904223;
    let m = Math.pow(2, 32);
    return (seed * a + c) % m;
  }
}
