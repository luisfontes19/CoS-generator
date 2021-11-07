import { Box } from "@mui/system";
import React from "react";
import CircularCheckBox from "../components/CircularCheckBox";
import { useStyles } from "./styles";
import { formatModifier, parseNumber } from "./utils";

export interface ISavingThrow {
  value: number;
  proficiency: boolean;
}

interface SavingThrowProps {
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

export const defaultSavingThrows: ISavingThrows = {
  strength: { value: 0, proficiency: false },
  dexterity: { value: 0, proficiency: false },
  constitution: { value: 0, proficiency: false },
  intelligence: { value: 0, proficiency: false },
  wisdom: { value: 0, proficiency: false },
  charisma: { value: 0, proficiency: false },
}

const SavingThrows = (props: SavingThrowProps) => {

  const classes = useStyles();
  const { savingThrows, setSavingThrows } = props;

  const onProficiencyChange = (name: string) => {
    const savingThrow: ISavingThrow = (savingThrows as any)[name];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setSavingThrows({
        ...savingThrows,
        [name]: { ...savingThrow, proficiency: e.target.checked }
      });
    }
  };

  const onValueChange = (name: string) => {
    const savingThrow: ISavingThrow = (savingThrows as any)[name];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseNumber(e.target.value);
      if (n !== undefined)
        setSavingThrows({
          ...savingThrows,
          [name]: { ...savingThrow, value: n }
        });
    };
  };

  return (
    <Box className={`${classes.border} ${classes.container}`}>
      {
        Object.keys(savingThrows).map((name, index) => {
          const savingThrow = (savingThrows as any)[name];
          return <Box key={index} className={classes.skill}>
            <CircularCheckBox checked={savingThrow.proficiency} onChange={onProficiencyChange(name)} />
            <input type="text" value={formatModifier(savingThrow.value)} onChange={onValueChange(name)} className={classes.skillInput} />
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
