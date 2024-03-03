import { loadImage } from "../utils.js";
import { Block } from "./Block.js";

export class Air extends Block {
  constructor(ctx, x, y) {
    super(ctx, x, y, loadImage("/img/air.png"), 1, 0);
  }
}
