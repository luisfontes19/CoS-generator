import { Box } from "@mui/system";
import { useStyles } from "./styles";
import { formatModifier, parseNumber } from "./utils";


export interface IAbility {
  value: number;
  modifier: number;
}

export interface AbilityArray {
  strength: IAbility,
  dexterity: IAbility,
  constitution: IAbility,
  intelligence: IAbility,
  wisdom: IAbility,
  charisma: IAbility
}

export interface AbilityProps {
  abilities: AbilityArray;
  setAbilities: (abilities: AbilityArray) => void;
}

export const abilitiesDefault = {
  strength: { value: 1, modifier: 0 },
  dexterity: { value: 2, modifier: 0 },
  constitution: { value: 0, modifier: 3 },
  intelligence: { value: 0, modifier: 0 },
  wisdom: { value: 0, modifier: 0 },
  charisma: { value: 0, modifier: 0 }
}

const Abilities = (props: AbilityProps) => {

  const classes = useStyles();
  const { abilities, setAbilities } = props;


  const onAbilityChange = (abilityName: string, modifier = false) => {
    const k = modifier ? "modifier" : "value";
    const ability: IAbility = (abilities as any)[abilityName];

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseNumber(e.target.value);
      if (n !== undefined)
        setAbilities({
          ...abilities,
          [abilityName]: { ...ability, [k]: n }
        });
    };
  }

  return (
    <Box className={`${classes.abilityContainer} ${classes.bgContainer}`}>
      {
        Object.keys(abilities).map((abilityName, index) => {
          const ability = (abilities as any)[abilityName];
          return <Box key={index} className={`${classes.border} ${classes.abilityBox}`}>
            {abilityName}
            <input type="text" onChange={onAbilityChange(abilityName, true)} className={classes.abilityModifierInput} value={formatModifier(ability.modifier)} />
            <input type="text" onChange={onAbilityChange(abilityName)} className={classes.abilityScoreBox} value={ability.value} />
          </Box>
        })
      }

    </Box>
  )
}

export default Abilities;