---
{"dg-publish":true,"permalink":"/immune-defense/buildings/dynamic-buildings-specs/","dg-note-properties":{}}
---


_ _ _ _ __

### Spider Hole

**Design Intent**
A spider hole is a low cost and quick-to-build covert safe space. 

Building a spider hole creates an small and camouflaged 'hole' where upon a player interacting, transports them into a tight underground room that shields them from artillery and hides them from enemy pursuers. In this room, the player can take simple vulnerable actions that would otherwise expose them, recollect their thoughts, and catch their breaths.

- **Short Term (Hole):** The effectiveness of cheap, fast, and secrecy are maximized when used by rather solitary players deep in enemy territory, far away from large ally forces and supply camps to take refuge in.
- **Long Term (Nest):** This initial temporary safe space can be upgraded and expand into a more long term functional secret base. Further incentivizing Saboteurs and Scouts to use them since they operate in enemy territory for extended periods of time.
- **Macro Use Case (Colony)**: A developed spider nest can eventually be connected to other nearby nests and create an underground network for mass covert stronghold and logistics.

- This growth potential creates a scenario where unchecked enemy "backliners" and weak territorial security can greatly influence the outcome of the game, opening an avenue for an <u>alternate & unconventional win condition</u>. 
	- This allows class role design space for Defenders and Engineers to serve as the "bug catchers" of the team. Where they consistently maintain this potential threat under control. This shows similarities to both the spy-engineer and spy-pyro class dynamics from Team Fortress 2.

**Visual & Layout**
- **Ground Layer:** Inconspicuous pile of leaves. The sprite art automatically changes to a color variation that blends with the environment. It is small, can be easily obscured, and players far away cannot detect it regardless of line of sight.
- **Underground Layer:** A makeshift dirt bunker using bushcraft. Lantern, wooden support beams, crates, some military gear and equipment scattered.

**Technical Interaction Behavior**
- **Enter Nest:** `Interact` with the 'Hole' to fade the screen to black >> despawns the player >> spawns the player on the underground layer next to the ladder >> screen fades back out
- **'Sneaky Peak':**  `Interact` with the 'Ladder' to fade the screen to black >> screen fades back out on the <u>Ground</u> Layer >> The 'Hole Cover' sprite subtly changes to an ajar/lifted position to indicate someone is peaking
- **Exit Nest:  While in the Sneaky Peak state, `Interact` again to instantly teleport to the <u>Ground</u> Layer next to the 'Hole'
- **Stop 'Sneaky Peak'**:  While in the Sneaky Peak state, `Cancel` to fade in and out back to the player character

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

**Additional Rules**
- **Hidden:** Player must be within 3 meters of the 'Hole' for 3 seconds before the entrance is highlighted and becomes interactable.
- **Grenade Drop**: When a player `Alt-Interact` the 'Hole Cover' while holding a grenade, they use-up the grenade and spawn a live grenade in the hole.
- **Underground**:  
- **Dibs** & **Anti-Idling:** When a player creates a Nest, they have 'Dibs' on that particular one. Only they can access the Nest while they have 'Dibs'
	- This rule is ignored if they choose to unlock the 'Commune' upgrade.
	- The player loses 'Dibs' and 'Commune' upgrade is automatically unlocked if:
		- X minutes passes by. Timer has 2x speed while Nest is not in use after Y seconds (as buffer).
		- The player is flagged as 'Idling' inside their Nest after Z seconds and a visual warning.
### Foxhole
**Design Intent**


## Trench

## Supply Camp

