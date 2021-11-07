import { Box } from "@mui/system";
import React from "react";
import CircularCheckBox from "../components/CircularCheckBox";
import { useStyles } from "./styles";
import { CharacterProps, ISavingThrow, ISavingThrows } from "./Types";
import { formatModifier, parseNumber } from "./utils";

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
  const { character, setCharacter, editable } = props;

  const onProficiencyChange = (name: string) => {
    const savingThrow: ISavingThrow = (character.savingThrows as any)[name];
    const ability = (character.abilities as any)[name];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSavingThrows = {
        ...character.savingThrows,
        [name]: {
          ...savingThrow,
          proficiency: e.target.checked,
        },

      }
      setCharacter({ ...character, savingThrows: newSavingThrows });
    }
  };

  const onValueChange = (name: string) => {
    const savingThrow: ISavingThrow = (character.savingThrows as any)[name];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseNumber(e.target.value);
      if (n !== undefined) {
        const newSavingThrows = {
          ...character.savingThrows,
          [name]: { ...savingThrow, value: n }
        }
        setCharacter({ ...character, savingThrows: newSavingThrows });
      }
    };
  };

  return (
    <Box className={`${classes.border} ${classes.container}`}>
      {
        Object.keys(character.savingThrows).map((name, index) => {
          const savingThrow = (character.savingThrows as any)[name];
          return <Box key={index} className={classes.skill}>
            <CircularCheckBox checked={savingThrow.proficiency} onChange={onProficiencyChange(name)} />
            <input disabled={!editable} type="text" value={formatModifier(savingThrow.value)} onChange={onValueChange(name)} className={classes.skillInput} />
            {name}
          </Box>
        })
      }
      <br />
      Saving Throws
    </Box>
  )
}

export default SavingThrows;
