import { Box } from "@mui/system";
import React from "react";
import CircularCheckBox from "../components/CircularCheckBox";
import { useStyles } from "./styles";
import { CharacterProps, ISavingThrow, ISavingThrows } from "./Types";
import { formatModifier, parseNumber, recalculateValues } from "./utils";

export const defaultSavingThrows: ISavingThrows = {
  strength: { value: 0, proficiency: false },
  dexterity: { value: 0, proficiency: false },
  constitution: { value: 0, proficiency: false },
  intelligence: { value: 0, proficiency: false },
  wisdom: { value: 0, proficiency: false },
  charisma: { value: 0, proficiency: false },
}

const SavingThrows = (props: CharacterProps) => {

  const classes = useStyles();
  const { character, setCharacter, editable, empty } = props;

  const onProficiencyChange = (name: string) => {
    const savingThrow: ISavingThrow = character.savingThrows[name];
    const ability = character.abilities[name];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newCharacter = { ...character }
      newCharacter.savingThrows[name].proficiency = e.target.checked
      recalculateValues(newCharacter, setCharacter)
    }
  };

  const onSavingThrowInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCharacter = { ...character }
    newCharacter.savingThrowInfo = e.target.value
    setCharacter(newCharacter)
  }

  const onValueChange = (name: string) => {
    const savingThrow = character.savingThrows[name];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseNumber(e.target.value);
      if (n !== undefined) {
        const newCharacter = { ...character }
        newCharacter.savingThrows[name].value = n
        if (!empty) recalculateValues(newCharacter, setCharacter)
      }
    };
  };

  return (
    <Box className={`${classes.border} ${classes.container}`}>
      {
        Object.keys(character.savingThrows).map((name, index) => {
          const savingThrow = character.savingThrows[name];
          return <Box key={index} className={classes.skill}>
            <CircularCheckBox checked={savingThrow.proficiency} onChange={onProficiencyChange(name)} />
            <input disabled={!editable} type="text" value={empty ? "" : formatModifier(savingThrow.value)} onChange={onValueChange(name)} className={classes.skillInput} />
            {name}
          </Box>
        })
      }
      <textarea onChange={onSavingThrowInfoChange} className={classes.textArea} style={{ fontSize: "13px", padding: "0px", height: "75px" }} value={character.savingThrowInfo} />
      Saving Throws
    </Box>
  )
}

export default SavingThrows;
