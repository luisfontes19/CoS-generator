import { Box } from "@mui/system";
import { useStyles } from "./styles";
import { CharacterProps } from "./Types";
import { calculateAbilityModifier, parseNumber } from "./utils";

export const abilitiesDefault = {
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
}

const Abilities = (props: CharacterProps) => {

  const classes = useStyles();
  const { character, setCharacter, editable } = props;

  const onAbilityChange = (abilityName: string) => {
    const value = (character.abilities as any)[abilityName];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseNumber(e.target.value);
      if (n !== undefined)
        setCharacter({
          ...character,
          abilities: { ...character.abilities, [abilityName]: n }
        });
    };
  }

  return (
    <Box className={`${classes.abilityContainer} ${classes.bgContainer}`}>
      {
        Object.keys(character.abilities).map((abilityName, index) => {
          const ability: number = (character.abilities as any)[abilityName];
          return <Box key={index} className={`${classes.border} ${classes.abilityBox}`}>
            {abilityName}
            <input type="text" disabled={!editable} className={classes.abilityModifierInput} value={calculateAbilityModifier(ability)} />
            <input type="text" onChange={onAbilityChange(abilityName)} className={classes.abilityScoreBox} value={ability} />
          </Box>
        })
      }
    </Box>
  )
}

export default Abilities;