import { Box } from "@mui/system";
import CircularCheckBox from "../components/CircularCheckBox";
import { useStyles } from "./styles";
import { CharacterProps, ISkills, Skill } from "./Types";
import { formatModifier, parseNumber } from "./utils";


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

  const { character, setCharacter } = props;


  const onProficiencyChange = (skillName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const skill: Skill = (character.skills as any)[skillName];
      const newSkills = {
        ...character.skills,
        [skillName]: { ...skill, proficiency: e.target.checked }
      }
      setCharacter({ ...character, skills: newSkills });
    }
  };

  const onValueChange = (skillName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const skill: Skill = (character.skills as any)[skillName];
      const n = parseNumber(e.target.value);

      if (n !== undefined) {
        const newSkills = {
          ...character.skills,
          [skillName]: { ...skill, value: n }
        }
        setCharacter({ ...character, skills: newSkills });
      }
    }
  };

  return (<Box className={`${classes.border} ${classes.container}`}>
    {
      Object.keys(character.skills).map((skillName, i) => {
        const skill: Skill = (character.skills as any)[skillName];
        return <Box key={i} className={classes.skill}>
          <CircularCheckBox checked={skill.proficiency} onChange={onProficiencyChange(skillName)} />
          <input type="text" value={formatModifier(skill.value)} onChange={onValueChange(skillName)} className={classes.skillInput} />
          {skillName} {skill.ability ? `(${skill.ability})` : ``}
        </Box>
      })
    }
    <br />
    Skills
  </Box>
  )
}

export default Skills;
