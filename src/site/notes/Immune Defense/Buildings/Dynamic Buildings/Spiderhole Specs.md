---
dg-publish: true
permalink: /immune-defense/buildings/dynamic-buildings/spider-hole-specs/
icon: file-text
showTimestamps: true
showReadingTime: true
---

<!-- markdownlint-disable-file MD033 MD041 -->

---

## Design Intent

Infiltrators need to have a reliable tool that allows them to stay hidden and help them operate in enemy territory, otherwise operating in the backline would be too difficult and stressful.  It is cheap and quick to build so any one player can depend on it. If upgraded, it can become a communal secret base that greatly improves long term operation deep in enemy territory.
<div class="ve-container">
  <h2 class="ve-container-title">Use Case Evolution</h2>
  <div class="ve-stack">
    <div class="ve-card">
      <h3 class="ve-card-title">Short</h3>
      <p>A tunnel that leads to a tight underground room that can fit a single player. A covert safe space for taking respite or staging an ambush.</p>
    </div>
    <div class="ve-connector">
      <svg class="ve-arrow-down" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v12H2l10 10 10-10h-6V2z"/></svg>
    </div>
    <div class="ve-card">
      <h3 class="ve-card-title">Medium</h3>
      <p>A spacious nest multiple players can access and store supplies inside, becoming a more permanent base to sustain the infiltrators</p>
    </div>
    <div class="ve-connector">
      <svg class="ve-arrow-down" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v12H2l10 10 10-10h-6V2z"/></svg>
    </div>
    <div class="ve-card">
      <h3 class="ve-card-title">Long</h3>
      <p>An interconnected system of nests allowing mass covert mobilization and resource transportation. The value that can be generated can very much change the tide of battle fast.</p>
    </div>
  </div>
</div>

| Balance                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **<font color="#f79646">Strength</font>**: Over time, the value of constant pressure in enemy backlines can compound to the point that it's influence enables an alternate & unconventional win approach.                                                                                                     |
| **<font color="#f79646">Weakness</font>**: A spider nests only defense is it's secrecy. If the enemy is aware of it's location, they have an overwhelming advantage against players that are currently inside it. They can invade and take over the nest, or destroy the nest and anyone inside it with ease. |
|                                                                                                                                                                                                                                                                                                               |

> [!note]- Design Note - The Pybro
> Spider nests can create a demand for dedicated "bug-catchers" where they consistently maintain this threat under control. This shows similarities to the "pybro" class archetype from Team Fortress 2. This sub-role can be used as additional role design space or allow emergent playstyle like the pybro.
>
> *In TF2, the Pyro is often the best class to check for invisible enemy Spies, with experienced players turning it into an unwritten sub-responsibility. "Pybros" (as in Pyro bro) goes a step further and sticks by their team Engineer and their buildings in the backlines, a primary target for Spies. Dedicating their play time checking and eliminating them as well as saving buildings by removing their 'sappers' with a dedicated melee weapon they can equip.*

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

**Hidden Entrance**
Player must be within 3 meters of the entrance for 3 seconds before the entrance is highlighted and becomes interactable.

**Hidden Location**
If a `Spiderhole` is built in enemy territory, it does not have the 'auto-report location' property. Meaning unlike other buildings, the location of the spiderhole is not known to the team HQ automatically after a fixed time and must be reported to HQ manually. 

This can be done by performing the `Report` action through a radio equipment given that the radio is connected to the HQ radio (see Mechanic: Radio Communication). Alternatively, performing the `Refit` action near a `Camp` building also reports to HQ automatically. 

**Underground**
Explosions that occur on the ground tiles above the `Spiderhole` also inflict building damage to it at a reduced amount. Each room or section (e.g. main room, sub-room, tunnels) has its own building HP. 

If the HP of a room becomes zero or less, the structural integrity fails and the room caves in. Any player or asset in the said room are automatically defeated or destroyed. The area is no longer walkable or diggable again. 

Additionally, the tiles equivalent on the ground layer sinks and becomes 'unstable terrain'. Unstable terrain acts as

**Grenade Drop**
When a player interacts with the entrance with `Alt-Interact` while holding a grenade, they use the grenade to spawn a live grenade in the hole.

**Dibs & Anti-Idling**
When a player creates the building, they have 'Dibs' on that particular one. Only they can access the building while they have 'Dibs' at level 1.

  The player loses 'Dibs' automatically if:
- X minutes passes by. Timer has 2x speed while building is not in use after Y seconds (as buffer).
- The player is flagged as 'Idling' inside the building.
