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
}


export interface CharacterProps {
  character: ICharacter;
  setCharacter: (character: ICharacter) => void;
  editable?: boolean; //TODO: THIS IS IN THE WRONG PLACE
}

export interface ICharacter {
  id?: string;
  abilities: AbilityArray;
  savingThrows: ISavingThrows;
  skills: ISkills;
  charName: string;
  classAndLevel: string;
  race: string;
  background: string;
  alignment: string;
  playerName: string;
  xp: string;
  inspiration: string;
  proficiencyBonus: number;
  ac: number;
  initiative: number;
  speed: number;
  hitPointMaximum: string;
  currentHitPoints: string;
  temporaryHitPoints: string;
  personalTraits: string;
  ideals: string;
  flaws: string;
  bonds: string;
  proficienciesAndLanguages: string;
  featuresAndTraits: string;
  passivePerception: number;
  hitDiceTotal: string;
  hitDice: string;
  deathSaves: { success: { 1: boolean, 2: boolean, 3: boolean }, failure: { 1: boolean, 2: boolean, 3: boolean } };
  attacks: IAttack[];
  attackInfo: string;
  equipment: string;
  cp: number;
  sp: number;
  ep: number;
  gp: number;
  pp: number;
}



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