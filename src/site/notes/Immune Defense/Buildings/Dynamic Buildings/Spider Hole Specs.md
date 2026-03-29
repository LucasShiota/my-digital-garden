---
dg-publish: true
permalink: /immune-defense/buildings/dynamic-buildings/spider-hole-specs/
icon: file-text
showTimestamps: true
showReadingTime: true
---

_ _ _ _ __

## Design Intent

Infiltrators classes like Saboteurs and Scouts needs to have a reliable permanent tool that allows them to stay hidden and help them operate in enemy territory. Without a tool like a spider hole, operating in the backline would be too difficult and stressful. It is cheap and quick to build so any one player can access and depend on it. If upgraded, it can become a secret base that greatly improves long term operation behind the frontlines.

| Use Cases                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <font color="#f79646">**Short **</font>: A tunnel that leads to a tight underground room that can fit a single player. A covert safe space for taking respite or staging an ambush.                                                                                                                                           |
| <font color="#f79646">**Medium**</font>: The room is bigger, more akin to a nest. Multiple players can now simultaneously access it and store supplies inside. The nest becomes a more permanent base to sustain the infiltrators.                                                                                            |
| <font color="#f79646">**Long**</font>: The nest can now connect to other nearby nests and buildings to form a spider colony. This interconnected system allows mass covert mobilization and resource transportation right near and into enemy territory. The value that can generate can very much change the tide of battle. |

| Balance                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **<font color="#f79646">Strength</font>**: Over time, the value of constant pressure in enemy backlines can compound to the point that it's influence enables an alternate & unconventional win approach.                                                                                                     |
| **<font color="#f79646">Weakness</font>**: A spider nests only defense is it's secrecy. If the enemy is aware of it's location, they have an overwhelming advantage against players that are currently inside it. They can invade and take over the nest, or destroy the nest and anyone inside it with ease. |

> [!note]- Design Note
> Spider nests allows role design space to delegate certain classes (or allow players with certain playstyle to "volunteer") to serve as the "bug catchers" of the team. Where they consistently maintain this threat under control. This shows similarities to the "pybro" emergent playstyle from Team Fortress 2.
>
> *In TF2, Pyro is a class that uses a flamethrower, a weapon that "hit-scans" a large amount of area. Often the best class to check for invisible enemy Spies, with experienced players turning this into an unwritten sub-responsibility within their team. "Pybros" (as in Pyro bro) goes a step further and sticks by their team Engineer and their buildings, a primary target for Spies. Dedicating their play time checking and eliminating Spies as well as saving buildings by removing their 'sappers' with a dedicated melee weapon they can equip.*

## Visual & Layout

- **Ground Layer:** Inconspicuous pile of leaves. The sprite automatically changes to a color variation that blends with the environment. It is small, can be easily obscured, and is invisible to players far away.
- **Underground Layer:** A makeshift dirt bunker using bushcraft. Lantern, wooden support beams, crates, some military gear and equipment scattered.

## Technical Interaction Behavior

- **Collision**: The 'Hole' has no collision, a player can walk right through it and not realize it
- **Enter Nest:** `Interact` with the entrance to fade the screen to black >> despawns the player >> spawns the player on the underground layer next to the exit >> screen fades back out
- **'Sneaky Peak':** `Interact` with the exit to fade the screen to black >> screen fades back out on the **Ground** Layer >> The 'Hole Cover' sprite subtly changes to an ajar/lifted position to indicate someone is peaking
- **Exit Nest:** While in the Sneaky Peak state, `Interact` again to instantly teleport to the **Ground** Layer next to the entrance
- **Stop 'Sneaky Peak'**: While in the Sneaky Peak state, `Cancel` to fade in and out back to the player character

## Deployment & Levels

- Build Access: Sabotage Corps (default),  Scout Corps (default)

| Building Requirements Table | < | < | < | < | < | < |
| --- | --- | --- | --- | --- | --- | --- |
| **Level** | **Set Up Cost** | **Cost/second** | **Build Time** | Max Subrooms | Main Room Size | Hallway Width |
| 0.5 (Set Up) | none | none | none | n/a | n/a | n/a |
| 1 | n/a | | | 0 | 1x2 | n/a |
| 2 | n/a | | | 1 | 2x3 | 1 |
| 3 | n/a | | | 2 | 3x4 | 2 |
| 4 | n/a | | | 4 | 3x4 | 2 |

| Upgrades Table | <           | <                                                                                                                                                                                                 | <                                                               |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Name**       | Type        | Description                                                                                                                                                                                       | Restrictions                                                    |
| Reinforced     | Room        | +Minus X% Cave In Chance                                                                                                                                                                          |                                                                 |
| Secret Exit    | Subroom     | - New interactable exit object. - X00% longer interaction time, Sneaky Peak is still enabled. - Interacting teleports player to a random location in the Ground Layer X meters away from the Nest |                                                                 |
| Commune        | Main Room   | - Allow up to 3 other allies to occupy the Nest. - Allow Hive Tunnels to be connected to the Nest                                                                                                 |                                                                 |
| Storage        | Subroom     | - Creates HP and Ammo globs storing interactable                                                                                                                                                  |                                                                 |
| Storage 2      | Storage     |                                                                                                                                                                                                   |                                                                 |
| Hive Tunnel    | Subroom     | - Creates a narrow tunnel that connects to another Nest if it's within X meters away. - Tunnel has property: 'tight space'                                                                        | - Pioneer Subclass. - 'Commune' Upgrade. - Nest within X meters |
| Hive Tunnel 2  | Hive Tunnel |                                                                                                                                                                                                   | Level 4                                                         |
| Empty Room     |             |                                                                                                                                                                                                   |                                                                 |

## Additional Rules

- **Hidden:** Player must be within 3 meters of the 'Hole' for 3 seconds before the entrance is highlighted and becomes interactable.
- **Grenade Drop**: When a player `Alt-Interact` the 'Hole Cover' while holding a grenade, they use-up the grenade and spawn a live grenade in the hole.
- **Underground**:
- **Dibs** & **Anti-Idling:** When a player creates a Nest, they have 'Dibs' on that particular one. Only they can access the Nest while they have 'Dibs'
  - This rule is ignored if they choose to unlock the 'Commune' upgrade.
  - The player loses 'Dibs' and 'Commune' upgrade is automatically unlocked if:
    - X minutes passes by. Timer has 2x speed while Nest is not in use after Y seconds (as buffer).
    - The player is flagged as 'Idling' inside their Nest after Z seconds and a visual warning.

```mermaid
---
config:
  theme: dark
  layout: elk
  flowchart:
    defaultRenderer: elk
    nodeSpacing: 50
    rankSpacing: 50
  elk:
    nodePlacementStrategy: LINEAR_SEGMENTS
---
flowchart LR
    subgraph chart [Spidernest Behavior & Interaction Flowchart]
        direction LR
        subgraph under [Underground Layer]
            direction LR
            subgraph stateinside [Player state: Inside]
                direction LR
                inside([Player is inside the Spiderhole]) ==> exit{Exit?}
                exit -. yes .-> under-to-peak(Go To Subgraph: <br/> Peaking)
                exit -. no .-> inside
            end

            subgraph statepeaking [Player state: Peaking]
                direction LR
                peaking([Player is peaking outside]) ==> input{Input?}
                input -- none --> peaking
                input -- *Exit* --> peaking-to-vis(Go To Subgraph: <br/> Visible)
                input -- *Back* --> peaking-to-inside(Go To Subgraph: <br/> Inside)
            end
        end

        subgraph stateground [Ground Layer]
            direction LR
            subgraph stateinvis [Spiderhole state: Invisible]
                direction LR
                invis([Spiderhole is invisible]) ==> hardCheck{In Range <br/> for Ys?}
                hardCheck -. yes .-> invis-to-vis(Go To Subgraph: <br/> Visible)
                hardCheck -. no .-> invis
            end
            
            subgraph statevis [Spiderhole state: Visible]
                direction LR
                vis([Spiderhole is visible]) ==> enter{Enter?}
                enter -. yes .-> vis-to-inside(Go To Subgraph: <br/> Inside)
                enter -. no .-> softCheck{In Range?}
                softCheck -. yes .-> enter
                softCheck -. no .-> vis-to-invis(Go To Subgraph: <br/> Invisible)
            end
        end
    end

linkStyle 1,4,8,11,13 stroke:#492,stroke-width:2px;
linkStyle 2,5,9,12,14 stroke:#e32,stroke-width:2px;
```
