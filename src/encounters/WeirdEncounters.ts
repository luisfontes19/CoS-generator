import { random } from "../DiceRoll";

const blinkToys = ["A plush werewolf stuffed with sawdust and tiny wood­ carved babies. It has dull knife blades for claws and retractable teeth.",
  "A smiling jester marionette with tangled strings and tiny copper bells sewn into its cap.",
  "A wooden puzzle box, 6 inches on a side, carved with silhouettes of leering clown faces. The box rattles when shaken. A character who spends a short rest fiddling with the box can figure out how to open it with a successful DC 20 Intelligence check. The box is empty, with nothing inside to explain the rattling.",
  "A faceless doll in a wedding dress that has yellowed and frayed with age.",
  "A vaguely coffin-shaped jack-in-the-box containing a pop-up Strahd puppet.",
  "A spring-loaded set of wooden teeth with fangs, all painted white. The teeth gnash and chatter for 1 minute when the spring is wound tight (requiring an action) and released.",];

const cocoonContent = ["A wooden mannequin wearing a gown.",
  "A Barovian witch (see appendix D). She screams like a wild animal and begins casting spells.",
  "A Strahd zombie (see appendix D). It fights until killed.",
  "A Barovian lunatic (CN male commoner). If freed, he cackles until silenced or until a calm emotions spell is cast on him. A lesser restoration spell cures his madness, at which point he tries to flee the castle.",
  "A dead Barovian that serves as host to a swarm of insects (spiders). The baby giant spiders (each one the size of a tarantula) crawl out of the Barovian's gaping mouth or burst forth from its distended belly.",
  "A Vistana bandit (CN male or female). The Vistana knows the castle's layout and helps the characters until Strahd or more Vistani appear, at which point the treacherous Vistana turns on the characters."]

export const trinkets = ["A picture you drew as a child of your imaginary friend",
  "A lock that opens when blood is deripped in its keyhole",
  "Clothes stolen from a scarecrow",
  "A spinning top carved with four faces: happy, sad, wrathful and dead",
  "The necklace of a sibling who died on the day you were born",
  "A ig from someone executed by beheading",
  "The unopened letter to you from your dying father",
  "A pocket watch that runs backward fro an hour every midnight",
  "A winter coat stolen from a dying soldier",
  "A bottle of invisible ink that can only be read at sunset",
  "A wineskin that refills when interred with a dead person for a night",
  "A set of silverware used by a king for his last meal",
  "A spyglass that always shows the world suffering a terrible storm",
  "A cameo with the profile's face scratched away",
  "A lantern with a black candle that never runs out and that burns with green flame",
  "A teacup from a child's tea set, stained with blood",
  "A little black book that records your dreams, and yours alone, when you sleep",
  "A necklace formed of the interlinked holy symbols of a dozen deities",
  "A hangman's noose that feels heavier than it should",
  "A birdcage into which small birds fly but once inside never eat or leave",
  "A lepidopterist's box filled dead moths with skull-like patterns on their wings.",
  "A jar of pickled ghouls's tongues",
  "The wooden hand of a notorious pirate",
  "An urn with the ashes of a dead relative",
  "A hand mirror backed with a bronze depiction of a medusa",
  "Pallid leather gloves crafted with ivory fingernails",
  "Dice made from the knuckles of a notorious charlatan",
  "A ring of keys for forgotten locks",
  "Nails from the coffin of a murderer",
  "A key to the family crypt",
  "A bouquet of funerary flowers that always looks and smells fresh",
  "A switch used to discipline you as a child",
  "A music box that plays by itself whenever someone holding it dances",
  "A walking cane with an iron ferule that strikes sparks on stone",
  "A flag from a ship lost at sea",
  "Porcelain doll's head that always seems to be looking at you",
  "A wolf's head wrought in silver that is also a whistle",
  "A small mirror that shows a much older version of the viewer",
  "Small, worn book of children's nursery rhymes",
  "A mummified raven's claw",
  "A broken pendent of a silver dragon that's always cold to the touch",
  "A small locked box that quietly hums a lovely melody at night but you always forget it in the morning",
  "An inkwell that makes one a little nauseous when staring at it",
  "An old little doll made from a dark, dense wood and missing a hand and a foot",
  "A black executioner's hood",
  "A pouch made of flesh, with a sinew drawstring",
  "A tiny spool of black thread that never runs out",
  "A tiny clockwork figuring of a dancer that's missing a gear and doesn't work",
  "A black wooden pipe that creates puffs of smoke that look like skulls",
  "A vial of perfume, the scene of which only certain creatures can detect."];

export const rahadinLocations = ["Chapel (area Kl 5)",
  "Audience hall (area K25)",
  "Study (area K37)",
  "Tower roof (area K57)",
  "Wine cellar (area _K63)",
  "Torture chamber _(area K76)",]

export const unseenServent = ["A tarnished silver platter with a lid (worth 25 gp). If a character comes within S feet of the servant, it lifts the lid, revealing a bunch of moldy scones. The first character to eat a scone gains inspiration. On later occurrences of this encounter, the platter holds a crawling claw that attacks the nearest character.",
  "A silver goblet (worth SO gp) filled to the brim with wine. A character who drinks the wine must make a DC 15 Constitution saving throw, taking 44 (8dl0) poison damage on a failed save, or half as much damage on a successful one. On future occurrences of this encounter, the wine acts as a potion ofhealing.",
  "A gold candelabrum (worth 150 gp) with three branches, each one holding an unlit candle.",
  "A purple silk handkerchief with white ruffled edges (worth l gp). On future occurrences of this encounter, the handkerchief is smeared with fresh blood.",
  "A crystal dinner bell (worth 25 gp). The unseen servant rings the bell if the characters come within 10 feet of it. The sound attracts ld4 hungry vampire spawn (see below), which arrive in ld4 + l rounds.",
  "A wizard's spellbook with a black velvet dust jacket over its stitched leather cover. The book contains all the spells Strahd has prepared (see appendix D). On subsequent occurrences of this encounter, the tome is a nonmagical leather-bound storybook worth 25 gp.",]

export const randomUnseenServant = () => {
  const n = random(0, unseenServent.length - 1);
  return unseenServent[n];
}

export const randomRahadinLocation = () => {
  const n = random(0, rahadinLocations.length - 1);
  return rahadinLocations[n];
}

export const randomTrinket = () => {
  const n = random(0, trinkets.length - 1);
  return trinkets[n];
}

export const randomCocoonContent = () => {
  const n = random(0, cocoonContent.length - 1);
  return cocoonContent[n];
}

export const randomBlinkyToy = () => {
  return blinkToys[random(0, blinkToys.length - 1)];
}
