---
dg-publish: true
permalink: /immune-defense/buildings/buildings-matrix/
pinned: true
icon: table-properties
showTimestamps: true
showReadingTime: true
---

---


| Building Requirements Table | <               | <               | <              | <            | <              | <             |
| --------------------------- | --------------- | --------------- | -------------- | ------------ | -------------- | ------------- |
| **Level**                   | **Set Up Cost** | **Cost/second** | **Build Time** | Max Subrooms | Main Room Size | Hallway Width |
| 0.5 (Set Up)                | none            | none            | none           | n/a          | n/a            | n/a           |
| 1                           | n/a             |                 |                | 0            | 1x2            | n/a           |
| 2                           | n/a             |                 |                | 1            | 2x3            | 1             |
| 3                           | n/a             |                 |                | 2            | 3x4            | 2             |
| 4                           | n/a             |                 |                | 4            | 3x4            | 2             |
- Build Access: Sabotage Corps (default),  Scout Corps (default)


- **Ground Layer:** Inconspicuous pile of leaves. The sprite automatically changes to a color variation that blends with the environment. It is small, can be easily obscured, and is invisible to players far away.
- **Underground Layer:** A makeshift dirt bunker using bushcraft. Lantern, wooden support beams, crates, some military gear and equipment scattered.



## Technical Interaction Behavior

- **Collision**: The 'Hole' has no collision, a player can walk right through it and not realize it
- **Enter Nest:** `Interact` with the entrance to fade the screen to black >> despawns the player >> spawns the player on the underground layer next to the exit >> screen fades back out
- **'Sneaky Peak':** `Interact` with the exit to fade the screen to black >> screen fades back out on the **Ground** Layer >> The 'Hole Cover' sprite subtly changes to an ajar/lifted position to indicate someone is peaking
- **Exit Nest:** While in the Sneaky Peak state, `Interact` again to instantly teleport to the **Ground** Layer next to the entrance
- **Stop 'Sneaky Peak'**: While in the Sneaky Peak state, `Cancel` to fade in and out back to the player character









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
