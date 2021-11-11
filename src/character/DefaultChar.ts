export type SpellSlot = { used: false, name: "" };

const emptySpellSlots: SpellSlot[] = [];
for (let i = 0; i < 12; i++)
  emptySpellSlots.push({ used: false, name: "" })

const emptySpellSlotsShort: SpellSlot[] = [];
for (let i = 0; i < 8; i++)
  emptySpellSlotsShort.push({ used: false, name: "" })


export const DefaultChar = {
  "id": "",
  "abilities": {
    "strength": 0,
    "dexterity": 0,
    "constitution": 0,
    "intelligence": 0,
    "wisdom": 0,
    "charisma": 0,
  },
  "savingThrows": {
    "strength": {
      "value": 0,
      "proficiency": false
    },
    "dexterity": {
      "value": 0,
      "proficiency": false
    },
    "constitution": {
      "value": 0,
      "proficiency": false
    },
    "intelligence": {
      "value": 0,
      "proficiency": false
    },
    "wisdom": {
      "value": 0,
      "proficiency": false
    },
    "charisma": {
      "value": 0,
      "proficiency": false
    }
  },
  "savingThrowInfo": "",
  "skills": {
    "Acrobatics": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "dexterity"
    },
    "Animal Handling": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "wisdom"
    },
    "Arcana": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "intelligence"
    },
    "Athletics": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "strength"
    },
    "Deception": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "charisma"
    },
    "History": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "wisdom"
    },
    "Insight": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "wisdom"
    },
    "Intimidation": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "charisma"
    },
    "Investigation": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "intelligence"
    },
    "Medicine": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "wisdom"
    },
    "Nature": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "intelligence"
    },
    "Perception": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "wisdom"
    },
    "Performance": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "charisma"
    },
    "Persuasion": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "charisma"
    },
    "Religion": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "wisdom"
    },
    "SleightOfHand": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "dexterity"
    },
    "Stealth": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "dexterity"
    },
    "Survival": {
      "value": 0,
      "proficiency": false,
      "expert": false,
      "ability": "wisdom"
    }
  },
  "charName": "",
  "classAndLevel": "",
  "race": "",
  "background": "",
  "alignment": "",
  "playerName": "",
  "xp": "",
  "inspiration": "",
  "proficiencyBonus": 2,
  "ac": 0,
  "initiative": 0,
  "initiativeModifier": 0,
  "speed": 0,
  "hitPointMaximum": "",
  "currentHitPoints": "",
  "temporaryHitPoints": "",
  "personalTraits": "",
  "ideals": "",
  "bonds": "",
  "flaws": "",
  "proficienciesAndLanguages": "",
  "featuresAndTraits": "",
  "passivePerception": 0,
  "hitDiceTotal": "",
  "hitDice": "",
  "deathSaves": {
    "success": {
      "1": false,
      "2": false,
      "3": false
    },
    "failure": {
      "1": false,
      "2": false,
      "3": false
    }
  },
  "attacks": [
    {
      "name": "",
      "damage": "",
      "bonus": ""
    },
    {
      "name": "",
      "damage": "",
      "bonus": ""
    },
    {
      "name": "",
      "damage": "",
      "bonus": ""
    }
  ],
  "attackInfo": "",
  "equipment": "",
  "cp": 0,
  "sp": 0,
  "ep": 0,
  "gp": 0,
  "pp": 0,
  "spells": {
    "cantrips": ["", "", "", "", "", "", "", "", "", "", ""],
    "level1": { slots: 0, used: 0, spells: emptySpellSlots },
    "level2": { slots: 0, used: 0, spells: emptySpellSlots },
    "level3": { slots: 0, used: 0, spells: emptySpellSlots },
    "level4": { slots: 0, used: 0, spells: emptySpellSlots },
    "level5": { slots: 0, used: 0, spells: emptySpellSlots },
    "level6": { slots: 0, used: 0, spells: emptySpellSlotsShort },
    "level7": { slots: 0, used: 0, spells: emptySpellSlotsShort },
    "level8": { slots: 0, used: 0, spells: emptySpellSlotsShort },
    "level9": { slots: 0, used: 0, spells: emptySpellSlotsShort },
  },
}