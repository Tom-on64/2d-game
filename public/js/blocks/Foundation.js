import { loadImage } from "../utils.js";
import { Block } from "./Block.js";

export class Foundation extends Block {
    constructor(ctx, x, y) {
        super(ctx, x, y, loadImage("/img/found.png"), 1, 1)
    }
}