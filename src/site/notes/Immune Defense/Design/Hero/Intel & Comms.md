---
dg-publish: true
icon: book-open
showTimestamps: true
showReadingTime: true
---

---

Intel (Intelligence) and Comms (Communication) are resources and mechanics that don't take the conventional form of programmed numerical values in player stats like health or ammo. Rather, it takes in the more abstract and unquantifiable form of information that enables for better 'game sense' based decision making.
## Intel

Intel is the actual mechanical abstraction of information as resource in game. Like health and ammo, it can be gained and shared. However in the current iteration, intel can not be lost once acquired. This also means when sharing intel with a fellow teammate, the teammate only gains a duplicated copy instead of a unique one.

Since intel behaves like information, it is acquired like one: by learning it. Once a player acquires a particular intel, the unique information it represents is reflected through their UI, mainly their Map interface. 

The UI will also indicate that they currently possess intel that can be shared to the team.

### Sitch

Sitch (Situation) is a short term passive intel type. It pertains to the status of a player and their immediate surroundings.
It is most valuable to other players in their vicinity, especially group of players coordinating together. As long as two or more players on the same team are close together or connected through radio, their 'sitch' are automatically and instantly shared to each other, this is currently called 'In the Loop'.

Learning the sitch of another player updates their UI to display:
- A small profile on the side with condensed information. Including player name, class, and resource levels.
- An arrow with their name above pointing towards their direction, with value in meters that represents distance to them
- Their location is identified on the Mini-Map HUD
- Their FOV, if they are within your camera view.

If one of two players that were in the loop moves further away or their radio connection is stopped, their sitch also stops sharing. However some information lingers on the UI for a little while. If a
- The profile now indicates the player being represented is defeated
- The arrow

### Fog of War

The map is not fully revealed to both teams at the start of a match. Enemy territory is mostly hidden in 'fog of war', a concealment of an area of a map and anything that is happening inside it. Fog of war has several layers of obscuration.

**Black Fog**
This is the area that a team has no information whatsoever about it, essentially a mysterious void. A player must surveil the area in order to turn black fog to grey fog.

**Grey Fog**
Once a player observes an area covered in black fog on the map, they update the area as grey fog. Areas with grey fog show the environmental map layout such as walls, bushes, and other innate map elements.

**Building Sightings**
When an unreported building is spotted, the map updates to reflect its location, type, and the time since it was spotted in seconds. The indicator also has a timer, where the map no longer displays the building information after a while.

**Unit Sightings**
When an unreported unit is spotted, the map updates to reflect its location, type, and the time since it was spotted in seconds. Unit sightings also have a timer, and a much shorter one. 

However, multiple sightings of the same unit or unit groups over multiple locations can update the map to reflect their long term movement or area of presence.
### Recon

Report is intel based on fog of war. The information a player acquired through revealing fog of war can be shared to other teammates.

### Briefcase

Briefcases are intel that are very hard to acquire but provides exposing information about the enemy team which can give a team a decisive upper hand in the match. They, often ones that support class players use to help them decide their next move. These include the total of all types of resources across the entire team, the pool of resources a camp has, location of buildings and units, and assets. 

Briefcases are the only intel type that are also items. Therefore, they can't be acquired through observation but only through theft. Since data's are very exposing, they're often closely guarded deep within a teams territory.

Holding a briefcase doesn't allow the holder to benefit from its informational content or share it. In order for this to be possible, the briefcase must be delivered to a Camp of HQ for analysis
### The Big Picture 

The big picture (or the Global Truth) is the latest official version of a teams map through their collective intel gathering and sharing. Think of it as the main branch or timeline most teammate knows. units with unreported intel live in a separate smaller branch that has yet to merge with the main one. There can also be branches that 

> [!note]- Design Note - What can Constitute as 'Intel'
>The scope of what information the game displays that is manifested into a intel resource should be strategically limited as their is only a finite amount of information that can be observed, conveyed, and be informative while not overwhelming the layers cognitive load.

## Comms

Comms is primarily the mechanic that facilitates the sharing of intel from player to player, but it can also mean in the general sense as the concept of communicating information with allies. Report is the specific gameplay action a player needs to take to actually share intel, conversely update is the action to receive them.

There are two different places a player can report to and update from: 

1. **Player** - Performing the report action makes the ally gain a copy of all your intel. Performing the update action makes you gain a copy of all your ally's intel.

2. **Bases** - Camps and HQ are special buildings that can also hold intel themselves. Players can report to it and store all intel into it. A player can update from the building and gain all intel that was stored.

Additionally, there are two distinct ways a player can report and update:

1. **In Person** - If a player is within the hearing range of another player, they are able to report and update to each other

2. **Radio** - Certain items, deployable, and buildings emit 'radio waves' within a specified radius from themselves. They essential significantly boost the radius of a players hearing range when used. If there are two players interacting with a radio and are within the signal range of each other, both players are able to report and update to each other.

## Radio



