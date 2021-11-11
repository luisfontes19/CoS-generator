import { Box } from "@mui/system";
import { useStyles } from "./styles";
import { CharacterProps } from "./Types";
import { calculateAbilityModifier, calculateModifier, parseNumber, recalculateValues } from "./utils";

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
  const { character, setCharacter, editable, empty } = props;

  const onAbilityChange = (abilityName: string) => {
    const value = character.abilities[abilityName];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseNumber(e.target.value);
      if (n !== undefined) {
        const newCharacter = { ...character }
        newCharacter.abilities[abilityName] = n;
        //we can set it as proficient, and send the initiativemodifier as the bonus, which by default is always 0.
        newCharacter.initiative = calculateModifier(newCharacter.abilities.dexterity, true, newCharacter.initiativeModifier);
        if (!empty) recalculateValues(newCharacter, setCharacter);

      }

    };
  }

  return (
    <Box className={`${classes.abilityContainer} ${classes.bgContainer}`}>
      {
        Object.keys(character.abilities).map((abilityName, index) => {
          const ability = character.abilities[abilityName];
          return <Box key={index} className={`${classes.border} ${classes.abilityBox}`}>
            {abilityName}
            <input type="text" disabled={!editable} className={classes.abilityModifierInput} value={empty ? "" : calculateAbilityModifier(ability)} />
            <input type="text" onChange={onAbilityChange(abilityName)} className={classes.abilityScoreBox} value={empty ? "" : ability} />
          </Box>
        })
      }
    </Box>
  )
}

export default Abilities;