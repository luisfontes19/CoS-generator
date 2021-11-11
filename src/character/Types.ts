import { DefaultChar, SpellSlot } from "./DefaultChar";

export interface AbilityArray {
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number
}



export interface IAttack {
  name: string;
  damage: string;
  bonus: string;
}

export interface AttackProps {
  attacks: IAttack[];
  setAttacks: (attacks: IAttack[]) => void;
  attackInfo: string;
  setAttackInfo: (attackInfo: string) => void;
}

export interface BorderedTextAreaProps extends CharacterSheetProps {
  field: string;
  label: string;
  height?: string;
  boxProps?: any;

}

export interface CharacterSheetProps {
  character: ICharacter;
  setCharacter: (character: ICharacter) => void;
  empty?: boolean
}


export interface CharacterProps {
  character: ICharacter;
  setCharacter: (character: ICharacter) => void;
  editable?: boolean; //TODO: THIS IS IN THE WRONG PLACE
  empty?: boolean;
}

export type ICharacter = typeof DefaultChar;

export interface ISavingThrow {
  value: number;
  proficiency: boolean;
}

export interface SavingThrowProps {
  savingThrows: ISavingThrows;
  setSavingThrows: (savings: ISavingThrows) => void;
}

export interface ISavingThrows {
  strength: ISavingThrow,
  dexterity: ISavingThrow,
  constitution: ISavingThrow,
  intelligence: ISavingThrow,
  wisdom: ISavingThrow,
  charisma: ISavingThrow,
}


export interface Skill {
  value: number;
  proficiency: boolean;
  expert?: boolean,
  ability: string;
}

export interface ISkills {
  Acrobatics: Skill;
  "Animal Handling": Skill;
  Arcana: Skill;
  Athletics: Skill;
  Deception: Skill;
  History: Skill;
  Insight: Skill;
  Intimidation: Skill;
  Investigation: Skill;
  Medicine: Skill;
  Nature: Skill;
  Perception: Skill;
  Performance: Skill;
  Persuasion: Skill;
  Religion: Skill;
  SleightOfHand: Skill;
  Stealth: Skill;
  Survival: Skill;
}

export interface SkillProps {
  skills: ISkills;
  setSkills: (skills: ISkills) => void;
}

export interface SpellLevel {
  slots: number,
  used: number,
  spells: SpellSlot[]
}