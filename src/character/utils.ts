import { ICharacter } from "./Types";

export const formatModifier = (modifier: number): string => {
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}

export const parseNumber = (value: string): number | undefined => {
  try {
    if (value === "") value = "+0";
    else if (value === "+") value = "+0";
    // else if (value === "-") value = "-0"; //doesn't work 

    return parseInt(value)
  }
  catch (e) {
    return undefined;
  }
}

export const download = (data: string, fileName: string) => {
  const a = document.createElement('a');
  const blob = new Blob([data], { 'type': "text/plain" });
  a.href = window.URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}

export const _abilityModifier = (n: number) => Math.floor((n - 10) / 2)
export const calculateAbilityModifier = (n: number) => formatModifier(_abilityModifier(n));


export const calculateModifier = (score: number, proficient: boolean, proficiencyBonus: number, expert = false) => {
  let m = _abilityModifier(score);
  if (expert)
    m = m + (proficiencyBonus * 2)
  else if (proficient)
    m = m + proficiencyBonus

  return m;
}

export const recalculateValues = (character: ICharacter, setCharacter: (char: ICharacter) => void) => {
  //recalculate data when needed
  const newCharacter = { ...character }

  Object.keys(newCharacter.skills).forEach((k) => {
    const skill = newCharacter.skills[k];
    const ability = character.abilities[skill.ability];

    newCharacter.skills[k].value = calculateModifier(ability, skill.proficiency, character.proficiencyBonus, skill.expert);
  })

  Object.keys(newCharacter.savingThrows).forEach((k) => {
    const saving = newCharacter.savingThrows[k];
    const ability = character.abilities[k];

    newCharacter.savingThrows[k].value = calculateModifier(ability, saving.proficiency, character.proficiencyBonus);
  })

  newCharacter.passivePerception = newCharacter.skills.Perception.value + 10;

  setCharacter(newCharacter)
}