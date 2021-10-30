import { DiceType, random, roll } from '../DiceRoll';
import { barovianFamilyNames, generateFemaleBorovianName, generateMaleBorovianName } from '../names/NameUtils';
import { generateEncounter, generateFixedEncounter, IEncounterMonster } from './EncounterUtils';
import { IMonsterData, MonsterType } from './Monsters';
import { randomBlinkyToy, randomCocoonContent, randomTrinket, randomUnseenServant } from './WeirdEncounters';

export enum XPDificulty {
  EASY = 0,
  MEDIUM = 1,
  HARD = 2,
  DEADLY = 3
}

export const nightTimeEncounterTable = (n: number): IEncounterMonster[] => {
  switch (n) {
    case 2: return generateFixedEncounter(MonsterType.Ghost, 1)
    case 3: return [{ type: "Hunting Trap", hp: -1 }]
    case 4: return [{ type: "Grave", hp: -1 }]
    case 5: return [{ type: randomTrinket(), hp: -1 }]
    case 6: return [{ type: "Corpse", hp: -1 }]
    case 7: return [{ type: "Hidden Bundle", hp: -1 }]
    case 8: return [{ type: "Skeletal rider", hp: -1 }]
    case 9: return generateEncounter(MonsterType.SwarmofBats, 1, DiceType.d8)
    case 10: return generateEncounter(MonsterType.DireWolf, 1, DiceType.d6)
    case 11: return generateEncounter(MonsterType.Wolf, 3, DiceType.d6)
    case 12: return generateEncounter(MonsterType.Berserker, 1, DiceType.d6)
    case 13: {
      const foo = generateFixedEncounter(MonsterType.Druid, 1);
      foo.push(...generateEncounter(MonsterType.TwigBlight, 2, DiceType.d6));
      return foo;
    }
    case 14: return generateEncounter(MonsterType.NeeddleBlight, 2, DiceType.d4)
    case 15: return generateEncounter(MonsterType.Werewolf, 1, DiceType.d6, 0, "Werewolves in wolf form")
    case 16: return generateEncounter(MonsterType.Zombie, 3, DiceType.d6)
    case 17: return generateEncounter(MonsterType.Scarecrow, 1, DiceType.d6)
    case 18: return generateEncounter(MonsterType.Strahd, 1, DiceType.d8);
    case 19: return generateFixedEncounter(MonsterType.WillOWisp, 1);
    case 20: return generateFixedEncounter(MonsterType.Revenant, 1)
    default: return []
  }
}

export const daytimeEncounterTable = (n: number): IEncounterMonster[] => {
  switch (n) {
    case 2: return generateEncounter(MonsterType.Commoner, 3, DiceType.d6, 0, "Barovian Commoners")
    case 3: return generateEncounter(MonsterType.Scout, 1, DiceType.d6, 0, "Barovian Scouts")
    case 4: return [{ type: "Hunting Trap", hp: -1 }]
    case 5: return [{ type: "Grave", hp: -1 }]
    case 6: return [{ type: "False Trail", hp: -1 }]
    case 7: return generateEncounter(MonsterType.Bandit, 1, DiceType.d4, 1, "Vistani Bandits")
    case 8: return [{ type: "Skeletal Rider", hp: -1 }]
    case 9: return [{ type: "Trinket", name: randomTrinket(), hp: -1 }]
    case 10: return [{ type: "Hidden Bundle", hp: -1 }]
    case 11: return roll(1, DiceType.d10) % 2 === 0 ? generateEncounter(MonsterType.SwarmofRavens, 7, DiceType.d8) : generateFixedEncounter(MonsterType.Wereraven)
    case 13: return generateEncounter(MonsterType.Wolf, 3, DiceType.d6)
    case 12: return generateEncounter(MonsterType.DireWolf, 1, DiceType.d6)
    case 14: return generateEncounter(MonsterType.Berserker, 1, DiceType.d4)
    case 15: return [{ type: "Corpse", hp: -1 }]
    case 16: return generateEncounter(MonsterType.Werewolf, 1, DiceType.d6, 0, "Werewolves in human form")
    case 17: {
      const foo = generateFixedEncounter(MonsterType.Druid, 1);
      foo.push(...generateEncounter(MonsterType.TwigBlight, 2, DiceType.d6));
      return foo;
    }
    case 18: return generateEncounter(MonsterType.NeeddleBlight, 2, DiceType.d4)
    case 19: return generateEncounter(MonsterType.Scarecrow, 1, DiceType.d6)
    case 20: return generateFixedEncounter(MonsterType.Revenant, 1)
    default: return []
  }
}

const castleRavenloftTable = (n: number): IEncounterMonster[] => {
  switch (n) {
    case 2: return generateFixedEncounter(MonsterType.EsmereldadAvenir, 1)
    case 3: return generateFixedEncounter(MonsterType.Rahadin, 1);
    case 4: return generateFixedEncounter(MonsterType.Cat, 1, "Black Cat");
    case 5: return generateFixedEncounter(MonsterType.BroomofAnimatedAttack, 1);
    case 6: return generateEncounter(MonsterType.FlyingSword, 1, DiceType.d4, 1);
    case 7: return [{ type: "Blinky Toy", name: randomBlinkyToy(), hp: -1 }];
    case 8: return [{ type: "Unseen Servant", name: randomUnseenServant(), hp: -1 }];
    case 9: return generateEncounter(MonsterType.Commoner, 1, DiceType.d4, 0, "Barovian Commoners")
    case 10: return generateEncounter(MonsterType.CrawlingClaw, 1, DiceType.d4)
    case 11: return generateEncounter(MonsterType.Shadow, 1, DiceType.d6)
    case 12: return generateEncounter(MonsterType.SwarmofBats, 1, DiceType.d6)
    case 13: return generateFixedEncounter(MonsterType.StrahdZombie, 1, "Crawling Strahd's Zombie");
    case 14: return generateEncounter(MonsterType.Thug, 1, DiceType.d4, 1, "Vistani Thugs")
    case 15: return generateEncounter(MonsterType.Thug, 1, DiceType.d4, 1)
    case 16: return [{ type: "Trinket", name: randomTrinket(), hp: -1 }]
    case 17: return [{ type: "Giant Spider Cocoon", name: randomCocoonContent(), hp: -1 }]
    case 18: return generateFixedEncounter(MonsterType.BarovianWitch, 1);
    case 19: return generateEncounter(MonsterType.VampireSpawn, 1, DiceType.d4, 1)
    case 20: return generateFixedEncounter(MonsterType.Strahd, 1);
    default: return [];
  }
}

export const generateHouseOccupants = (): IEncounterMonster[] => {
  const ret: any = []

  const adults = roll(1, DiceType.d4);
  const man = random(1, adults);
  const woman = adults - man;
  const children = roll(1, DiceType.d8) - 1;
  const maleChildren = random(1, children);
  const femaleChildren = children - maleChildren;

  const family = generateBarovianFamily(man + maleChildren, woman + femaleChildren);

  let countMan = 0, countWoman = 0;

  return family.map(m => {
    m.gender === "male" ? countMan++ : countWoman++;
    if (countMan > man || countWoman > woman)
      m.name = m.name + " (Child)"

    return m;
  });
}

export const generateVillageOfBaroviaHouseEncounter = (n?: number) => {
  if (!n) roll(1, DiceType.d20);
  switch (n) {
    case 1: case 2: case 3:
      return [{ type: "None", name: "Empty", hp: -1 }];
    case 4: case 5: case 6: case 7: case 8:
      return generateEncounter(MonsterType.SwarmofRats, 2, DiceType.d4);
    case 17: case 18: case 19: case 20:
      return generateEncounter(MonsterType.StrahdZombie, 2, DiceType.d4);
    default:
      return generateHouseOccupants();
  }
}

export const generateVallakiCultists = () => {
  const adults = roll(2, DiceType.d4);
  const man = random(1, adults);
  const woman = adults - man;

  const cultists = [];

  for (let i = 0; i < man; i++) {
    const name = generateMaleBorovianName();
    const c = generateFixedEncounter(MonsterType.Cultist, 1, name, "male")
    cultists.push(c[0])
  }

  for (let i = 0; i < woman; i++) {
    const name = generateFemaleBorovianName();
    const c = generateFixedEncounter(MonsterType.Cultist, 1, name, "female")
    cultists.push(c[0])
  }

  cultists.push(...generateFixedEncounter(MonsterType.CultFanatic, 1, generateMaleBorovianName(), "male"))

  return cultists;
}

export const generateVallakiHouseEncounter = (n?: number): IEncounterMonster[] => {
  if (!n) roll(1, DiceType.d20);
  switch (n) {
    case 1: case 2: case 3:
      return [{ type: "None", name: "Empty", hp: -1 }];
    case 4: case 5:
      return generateEncounter(MonsterType.SwarmofRats, 2, DiceType.d4);
    case 19: case 20:
      return generateVallakiCultists();
    default:
      return generateHouseOccupants();
  }
}

export const generateCastleRavenloftEncounter = (n?: number) => {
  if (!n) n = roll(1, DiceType.d12) + roll(1, DiceType.d8);
  return castleRavenloftTable(n);
}

export const generateDaytimeEncounter = () => {
  const n = roll(1, DiceType.d12) + roll(1, DiceType.d8);
  return daytimeEncounterTable(n);
}

export const generateNightTimeEncounter = () => {
  const n = roll(1, DiceType.d12) + roll(1, DiceType.d8);
  return nightTimeEncounterTable(n);
}

export const generateMaleBarovian = (familyName?: string) => generateFixedEncounter(MonsterType.Commoner, 1, generateMaleBorovianName(familyName), "Male");
export const generateFemaleBarovian = (familyName?: string) => generateFixedEncounter(MonsterType.Commoner, 1, generateFemaleBorovianName(familyName), "Female");
export const generateBarovianFamily = (maleCount: number, femaleCount: number) => {
  const family = [];
  const familyName = barovianFamilyNames[random(1, barovianFamilyNames.length - 1)];

  for (let i = 0; i < maleCount; i++)
    family.push(...generateMaleBarovian(familyName));

  for (let i = 0; i < femaleCount; i++)
    family.push(...generateFemaleBarovian(familyName));

  return family;
}

export const calculateAdjustedXP = (monsters: IMonsterData[]) => {
  let xp = 0
  let modifier;
  if (monsters.length >= 15) modifier = 4;
  else if (monsters.length >= 11) modifier = 3;
  else if (monsters.length >= 7) modifier = 2.5;
  else if (monsters.length >= 3) modifier = 2;
  else if (monsters.length === 2) modifier = 1.5;
  else modifier = 1;

  console.log(modifier)

  monsters.forEach(m => xp += m.xp!)
  xp *= modifier;

  return xp;
}

//TODO: PUT IN AN ENUM 0 easy, 1 medium, 2 hard, deadly
export const getXPDifficultyForLevel = (level: number) => {
  const table: any = {
    1: { 0: 25, 1: 50, 2: 75, 3: 100 },
    2: { 0: 50, 1: 100, 2: 150, 3: 200 },
    3: { 0: 75, 1: 150, 2: 225, 3: 400 },
    4: { 0: 125, 1: 250, 2: 375, 3: 500 },
    5: { 0: 250, 1: 500, 2: 750, 3: 1100 },
    6: { 0: 300, 1: 600, 2: 900, 3: 1400 },
    7: { 0: 350, 1: 750, 2: 1100, 3: 1700 },
    8: { 0: 450, 1: 900, 2: 1400, 3: 2100 },
    9: { 0: 550, 1: 1100, 2: 1600, 3: 2400 },
    10: { 0: 600, 1: 1200, 2: 1900, 3: 2800 },
    11: { 0: 800, 1: 1600, 2: 2400, 3: 3600 },
    12: { 0: 1000, 1: 2000, 2: 3000, 3: 4500 },
    13: { 0: 1100, 1: 2200, 2: 30400, 3: 5100 },
    14: { 0: 1250, 1: 2500, 2: 3800, 3: 5700 },
    15: { 0: 1400, 1: 2800, 2: 4300, 3: 6400 },
    16: { 0: 1600, 1: 3200, 2: 4800, 3: 7200 },
    17: { 0: 2000, 1: 3900, 2: 5900, 3: 8800 },
    18: { 0: 2100, 1: 4200, 2: 6300, 3: 9500 },
    19: { 0: 2400, 1: 4900, 2: 7300, 3: 10900 },
    20: { 0: 2800, 1: 5700, 2: 8500, 3: 12700 },
  }

  return table[level];
}



