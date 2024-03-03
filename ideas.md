# Ideas

### Code

Canvas Screen Size:

```javascript
cellSize = 64;
canvas.width = Math.floor(window.innerWidth / cellSize) * cellSize;
canvas.height = Math.floor(window.innerHeight / cellSize) * cellSize;
```

### Classes

Game - Handles Updates, Game loop etc.

- #player
- #world
- init() -> tick() -> tick() ...

World - Renders World, Generates etc.

- entities [...]
- renderMap [...]

- Block

- Item

- Player

Entity

- Hostile
  - ...
- Passive
  - ...
- Other
  - ...
