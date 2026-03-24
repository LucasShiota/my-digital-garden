---
{"dg-publish":true,"permalink":"/immune-defense/3-0-game-design/3-2-buildings/dynamic-buildings-specs/","dg-note-properties":{}}
---


_ _ _ _ __

### Spider Nest

**Visual & Layout**
- Ground Layer: Inconspicuous pile of leaves. The sprite art automatically changes to a color variation that blends with the environment. It is small, can be easily obscured, and players far away cannot detect it regardless of line of sight.
- Underground Layer: A makeshift dirt bunker using bushcraft. Lantern, wooden support beams, crates, some military gear and equipment scattered.

**Deployment & Levels**
- Build Access: Sabotage Corps (default),  Scout Corps (default)

| Building Requirements Table | <               | <               | <              | <            | <              |               |
| --------------------------- | --------------- | --------------- | -------------- | ------------ | -------------- | ------------- |
| **Level**                   | **Set Up Cost** | **Cost/second** | **Build Time** | Max Subrooms | Main Room Size | Hallway Width |
| 0.5 (Set Up)                | none            | none            | none           | n/a          | n/a            | n/a           |
| 1                           | n/a             |                 |                | 0            | 1x2            | n/a           |
| 2                           | n/a             |                 |                | 1            | 2x3            | 1             |
| 3                           | n/a             |                 |                | 2            | 3x4            | 2             |
| 4                           | n/a             |                 |                | 4            | 3x4            | 2             |

| Upgrades Table | <           | <                                                                                                                                                                                                  | <                                                                |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Name**       | Type        | Description                                                                                                                                                                                        | Restrictions                                                     |
| Reinforced     | Room        | +Minus X% Cave In Chance                                                                                                                                                                           |                                                                  |
| Secret Exit    | Subroom     | -New interactable exit object<br>-X00% longer interaction time, Sneaky Peak is still enabled<br>-Interacting teleports player to a random location in the Ground Layer X meters away from the Nest |                                                                  |
| Commune        | Main Room   | -Allow up to 3 other allies to occupy the Nest<br>-Allow Hive Tunnels to be connected to the Nest                                                                                                  |                                                                  |
| Storage        | Subroom     | -Creates HP and Ammo globs storing interactable                                                                                                                                                    |                                                                  |
| Storage 2      | Storage     |                                                                                                                                                                                                    |                                                                  |
| Hive Tunnel    | Subroom     | -Creates a narrow tunnel that connects to another Nest if it's within X meters away<br>-Tunnel has property: 'tight space'                                                                         | -Pioneer Subclass<br>-'Commune' Upgrade<br>-Nest within X meters |
| Hive Tunnel 2  | Hive Tunnel |                                                                                                                                                                                                    | Level 4                                                          |
| Empty Room     |             |                                                                                                                                                                                                    |                                                                  |
|                |             |                                                                                                                                                                                                    |                                                                  |

**Technical Interaction Behavior**
- **Enter Nest:** `Interact` with the 'Hole' to fade the screen to black >> despawns the player >> spawns the player on the underground layer next to the ladder >> screen fades back out
- **Sneaky Peak:**  `Interact` with the 'Ladder' to fade the screen to black >> screen fades back out on the <u>Ground</u> Layer >> The 'Hole Cover' sprite subtly changes to an ajar/lifted position to indicate someone is peaking
- **Exit Nest:  While in the Sneaky Peak state, `Interact` again to instantly teleport to the <u>Ground</u> Layer next to the 'Hole'
- **Stop Sneaky Peak**:  While in the Sneaky Peak state, `Cancel` to fade in and out back to the player character
- 
	
**Additional Rules**
- **Hidden:** Player must be within 3 meters of the 'Hole' for 3 seconds before the entrance is highlighted and becomes interactable.
- **Grenade Drop**: When a player `Alt-Interact` with a holding a grenade will make them spawn a live grenade in the nest
- **Cave-In:** 
- **Dibs** & **Anti-Idling:** When a player creates a Nest, they have 'Dibs' on that particular one. Only they can access the Nest while they have 'Dibs'
	- This rule is ignored if the 'Commune' upgrade is unlocked.
	- The player loses 'dibs' and 'Commune' upgrade is automatically unlocked if:
		- X minutes passes by. Timer temporarily has 2x speed if Nest is not in use after Y seconds as buffer.
		- The player is flagged as 'Idling' inside their Nest after Z seconds and a visual warning.

**Design Intent**
- The primary purpose of the spider nest is to act as a quick-to-build safe space for players.
- The exclusive 
- Therefore this building is most effective if it's built far away from the frontlines and deep in enemy territory. 
### Foxhole

| Level 1 Layout Matrix | <   | <   | <   |
| --------------------- | --- | --- | --- |
|                       |     |     |     |
|                       |     |     |     |
|                       |     |     |     |
