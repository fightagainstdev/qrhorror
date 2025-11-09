# 13th Floor Horror Game

A 3D horror game built with TypeScript and WebGL. Navigate through a haunted hotel, find keys to unlock doors, and avoid the enemy while searching for the exit.

## Features

- **First-person 3D gameplay** with realistic lighting and shadows
- **Procedurally generated hotel layout** with multiple rooms and corridors
- **AI enemy** that patrols, chases, and searches for the player
- **Hiding mechanics** - hide in closets and showers to avoid detection
- **Key collection system** - find keys to unlock doors and progress
- **Fullscreen immersive experience** with dynamic camera adjustment
- **Atmospheric audio** with dynamic sound effects and music

## Gameplay

- **Objective**: Find all the keys to unlock doors and reach the exit
- **Controls**:
  - WASD: Move
  - Mouse: Look around
  - F: Toggle flashlight
  - E: Interact with doors and hiding spots
  - Click: Start game and lock pointer

- **Game Mechanics**:
  - Hide in designated spots when the enemy is nearby
  - Collect keys to unlock corresponding room doors
  - Use health packs to restore health
  - Avoid the enemy's line of sight

## Technical Details

- **Engine**: Custom WebGL renderer built with TypeScript
- **Graphics**: Real-time 3D rendering with dynamic lighting and shadows
- **Audio**: Web Audio API with custom MIDI-like synthesizer
- **Physics**: Custom collision detection system
- **AI**: Pathfinding and state-based enemy behavior

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run serve
```

### Build
```bash
npm run build
```

## Project Structure

```
src/
├── ai/              # Enemy AI and navigation
├── core/            # Core game systems (player, controls, state machine)
├── engine/          # Rendering engine and 3D utilities
├── game-states/     # Game state management
├── modeling/        # 3D models and level geometry
└── sounds.ts        # Audio definitions
```

## Credits

Developed by 曲睿Lumin团队

## License

This project is for educational and demonstration purposes.