import { Box } from "@mui/system";
import CircularCheckBox from "../components/CircularCheckBox";
import { useStyles } from "./styles";
import { CharacterProps, ISkills, Skill } from "./Types";
import { formatModifier, parseNumber, recalculateValues } from "./utils";


export const skillsDefault: ISkills = {
  Acrobatics: { value: 0, proficiency: false, ability: "Dex" },
  "Animal Handling": { value: 0, proficiency: false, ability: "Wis" },
  Arcana: { value: 0, proficiency: false, ability: "Int" },
  Athletics: { value: 0, proficiency: false, ability: "Str" },
  Deception: { value: 0, proficiency: false, ability: "Cha" },
  History: { value: 0, proficiency: false, ability: "Wis" },
  Insight: { value: 0, proficiency: false, ability: "Wis" },
  Intimidation: { value: 0, proficiency: false, ability: "Cha" },
  Investigation: { value: 0, proficiency: false, ability: "Int" },
  Medicine: { value: 0, proficiency: false, ability: "Wis" },
  Nature: { value: 0, proficiency: false, ability: "Int" },
  Perception: { value: 0, proficiency: false, ability: "Wis" },
  Performance: { value: 0, proficiency: false, ability: "Cha" },
  Persuasion: { value: 0, proficiency: false, ability: "Cha" },
  Religion: { value: 0, proficiency: false, ability: "Wis" },
  SleightOfHand: { value: 0, proficiency: false, ability: "Dex" },
  Stealth: { value: 0, proficiency: false, ability: "Dex" },
  Survival: { value: 0, proficiency: false, ability: "Wis" },
}

const Skills = (props: CharacterProps) => {

  const classes = useStyles();

  const { character, setCharacter, editable } = props;

  const onProficiencyChange = (skillName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newCharacter = { ...character }
      newCharacter.skills[skillName].proficiency = e.target.checked
      recalculateValues(newCharacter, setCharacter);
    }
  };

  const onValueChange = (skillName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseNumber(e.target.value);

      if (n !== undefined) {
        const newCharacter = { ...character }
        newCharacter.skills[skillName].value = n
        recalculateValues(newCharacter, setCharacter);
      }
    }
  };

  const formatAbility = (ability: string) => ability.substring(0, 1).toUpperCase() + ability.substring(1, 3);

  return (<Box className={`${classes.border} ${classes.container}`}>
    {
      Object.keys(character.skills).map((skillName, i) => {
        const skill: Skill = character.skills[skillName];

        return <Box key={i} className={classes.skill}>
          <CircularCheckBox checked={skill.proficiency} onChange={onProficiencyChange(skillName)} />
          <input disabled={!editable} type="text" value={formatModifier(skill.value)} onChange={onValueChange(skillName)} className={classes.skillInput} />
          {skillName} ({formatAbility(skill.ability)})
        </Box>
      })
    }
    <br />
    Skills
  </Box>
  )
}

export default Skills;
