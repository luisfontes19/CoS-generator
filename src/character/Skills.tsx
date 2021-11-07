import { Box } from "@mui/system";
import CircularCheckBox from "../components/CircularCheckBox";
import { useStyles } from "./styles";
import { formatModifier, parseNumber } from "./utils";

export interface Skill {
  value: number;
  proficiency: boolean;
  ability: string;
}

export interface ISkills {
  Acrobatics: Skill;
  "Animal Handling": Skill;
  Arcana: Skill;
  Athletics: Skill;
  Deception: Skill;
  History: Skill;
  Insight: Skill;
  Intimidation: Skill;
  Investigation: Skill;
  Medicine: Skill;
  Nature: Skill;
  Perception: Skill;
  Performance: Skill;
  Persuasion: Skill;
  Religion: Skill;
  SleightOfHand: Skill;
  Stealth: Skill;
  Survival: Skill;
}

export interface SkillProps {
  skills: ISkills;
  setSkills: (skills: ISkills) => void;
}

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

const Skills = (props: SkillProps) => {

  const classes = useStyles();

  const { skills, setSkills } = props;


  const onProficiencyChange = (skillName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const skill: Skill = (skills as any)[skillName];
      setSkills({
        ...skills,
        [skillName]: { ...skill, proficiency: e.target.checked }
      });
    }
  };

  const onValueChange = (skillName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const skill: Skill = (skills as any)[skillName];
      const n = parseNumber(e.target.value);

      if (n !== undefined)
        setSkills({
          ...skills,
          [skillName]: { ...skill, value: n }
        });
    }
  };

  return (<Box className={`${classes.border} ${classes.container}`}>

    {
      Object.keys(skills).map((skillName, i) => {
        const skill: Skill = (skills as any)[skillName];
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
