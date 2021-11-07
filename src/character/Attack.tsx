
import { Box } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';


export interface IAttack {
  name: string;
  damage: string;
  bonus: string;
}

export const defaultAttack: IAttack = {
  name: "", damage: "", bonus: ""
};

export interface AttackProps {
  attacks: IAttack[];
  setAttacks: (attacks: IAttack[]) => void;
  attackInfo: string;
  setAttackInfo: (attackInfo: string) => void;
}

const Attack = (props: AttackProps) => {

  const classes = useStyles();
  const { attacks, setAttacks, attackInfo, setAttackInfo } = props;

  const onAttackInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setAttackInfo(e.target.value)

  const onAttacksChange = (index: number, field: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newAttacks = [...attacks];
      (newAttacks[index] as any)[field] = e.target.value;
      setAttacks(newAttacks);
    }
  }

  return <Box className={`${classes.border} ${classes.container}`} fontSize="12px">
    <Box textAlign="left">
      <Box style={{ display: "flex" }}>
        <span style={{ width: "100%" }}>Name</span>
        <span style={{ width: "100%", flexShrink: 1.4 }}>Bonus</span>
        <span style={{ width: "100%" }}>Damage</span>
      </Box>

      {attacks.map((attack, index) => {
        return <Box style={{ display: "flex" }}>
          <input type="text" value={attack.name} onChange={onAttacksChange(index, "name")} className={classes.attackInput} />
          <input type="text" value={attack.bonus} onChange={onAttacksChange(index, "bonus")} className={classes.attackInput} style={{ flexShrink: 1.4 }} />
          <input type="text" value={attack.damage} onChange={onAttacksChange(index, "damage")} className={classes.attackInput} />
        </Box>
      })}
      <textarea onChange={onAttackInfoChange} className={classes.textArea} style={{ height: "190px" }} >{attackInfo}</textarea>
    </Box>
    Attack and Spellcasting Ability
  </Box>
};

export default Attack;