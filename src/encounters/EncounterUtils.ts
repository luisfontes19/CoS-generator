import { DiceType, roll } from "../DiceRoll";
import { Gender } from "../names/NameUtils";
import { getMonsterDataFor, MonsterType } from "./Monsters";

export interface IEncounterMonster {
  name?: string;
  gender?: Gender;
  type: string
  hp: number;
  reference?: string
}

export const generateFixedEncounter = (monsterType: MonsterType, n = 1, encounterName?: string, gender?: Gender): IEncounterMonster[] => {
  const res: IEncounterMonster[] = [];
  for (let i = 0; i < n; i++) {
    const m = getMonsterDataFor(monsterType)
    res.push({
      name: encounterName,
      hp: m.hp!,
      reference: m.reference,
      type: m.type,
      gender
    })
  }

  res.push();

  return res;
}

export const generateEncounter = (monsterType: MonsterType, amount: number, diceType: DiceType, modifier: number = 0, encounterName?: string): IEncounterMonster[] => {
  const n = roll(diceType, amount) + modifier;

  return generateFixedEncounter(monsterType, n, encounterName);
}
