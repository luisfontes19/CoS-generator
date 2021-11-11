
import { Box } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';
import { CharacterProps, IAttack } from './Types';

export const defaultAttack: IAttack = {
  name: "", damage: "", bonus: ""
};

const Attack = (props: CharacterProps) => {

  const classes = useStyles();
  const { character, setCharacter } = props;

  const onAttackInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCharacter({ ...character, attackInfo: e.target.value })

  const onAttacksChange = (index: number, field: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newAttacks = [...character.attacks];
      newAttacks[index][field] = e.target.value;
      setCharacter({ ...character, attacks: newAttacks });
    }
  }

  return <Box className={`${classes.border} ${classes.container}`} fontSize="12px">
    <Box textAlign="left">
      <Box style={{ display: "flex" }}>
        <span style={{ width: "100%" }}>Name</span>
        <span style={{ width: "100%", flexShrink: 1.4 }}>Bonus</span>
        <span style={{ width: "100%" }}>Damage</span>
      </Box>

      {character.attacks.map((attack, index) => {
        return <Box style={{ display: "flex" }}>
          <input type="text" value={attack.name} onChange={onAttacksChange(index, "name")} className={classes.attackInput} />
          <input type="text" value={attack.bonus} onChange={onAttacksChange(index, "bonus")} className={classes.attackInput} style={{ flexShrink: 1.4 }} />
          <input type="text" value={attack.damage} onChange={onAttacksChange(index, "damage")} className={classes.attackInput} />
        </Box>
      })}
      <textarea onChange={onAttackInfoChange} className={classes.textArea} style={{ height: "185px" }} value={character.attackInfo} />
    </Box>
    Attack and Spellcasting Ability
  </Box>
};

export default Attack;