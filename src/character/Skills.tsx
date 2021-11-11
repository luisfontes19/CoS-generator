import { Box } from "@mui/system";
import CircularCheckBox from "../components/CircularCheckBox";
import { useStyles } from "./styles";
import { CharacterProps, ISkills, Skill } from "./Types";
import { formatModifier, parseNumber, recalculateValues } from "./utils";


export const skillsDefault: ISkills = {
  Acrobatics: { value: 0, proficiency: false, ability: "Dex", expert: false },
  "Animal Handling": { value: 0, proficiency: false, ability: "Wis", expert: false },
  Arcana: { value: 0, proficiency: false, ability: "Int", expert: false },
  Athletics: { value: 0, proficiency: false, ability: "Str", expert: false },
  Deception: { value: 0, proficiency: false, ability: "Cha", expert: false },
  History: { value: 0, proficiency: false, ability: "Wis", expert: false },
  Insight: { value: 0, proficiency: false, ability: "Wis", expert: false },
  Intimidation: { value: 0, proficiency: false, ability: "Cha", expert: false },
  Investigation: { value: 0, proficiency: false, ability: "Int", expert: false },
  Medicine: { value: 0, proficiency: false, ability: "Wis", expert: false },
  Nature: { value: 0, proficiency: false, ability: "Int", expert: false },
  Perception: { value: 0, proficiency: false, ability: "Wis", expert: false },
  Performance: { value: 0, proficiency: false, ability: "Cha", expert: false },
  Persuasion: { value: 0, proficiency: false, ability: "Cha", expert: false },
  Religion: { value: 0, proficiency: false, ability: "Wis", expert: false },
  SleightOfHand: { value: 0, proficiency: false, ability: "Dex", expert: false },
  Stealth: { value: 0, proficiency: false, ability: "Dex", expert: false },
  Survival: { value: 0, proficiency: false, ability: "Wis", expert: false },
}

const Skills = (props: CharacterProps) => {

  const classes = useStyles();

  const { character, setCharacter, editable, empty } = props;

  const onProficiencyChange = (skillName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newCharacter = { ...character }
      newCharacter.skills[skillName].proficiency = e.target.checked
      if (!empty) recalculateValues(newCharacter, setCharacter);
    }
  };

  const onExpertChange = (skillName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newCharacter = { ...character }
      newCharacter.skills[skillName].expert = e.target.checked

      if (e.target.checked) newCharacter.skills[skillName].proficiency = true

      if (!empty) recalculateValues(newCharacter, setCharacter);
    }
  }

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

  return (<Box className={`${classes.border} ${classes.container}`} style={{ height: "433px" }}>
    {
      Object.keys(character.skills).map((skillName, i) => {
        const skill: Skill = character.skills[skillName];

        return <Box key={i} className={classes.skill}>
          <div>
            <CircularCheckBox checked={skill.proficiency} onChange={onProficiencyChange(skillName)} style={{ backgroundColor: "#FFF", zIndex: 2 }} />
            <CircularCheckBox checked={skill.expert} onChange={onExpertChange(skillName)} style={{ zIndex: 1, marginLeft: "-12px", marginTop: "-5px", backgroundColor: "#FFF" }} />
          </div>
          <input disabled={!editable} type="text" value={empty ? "" : formatModifier(skill.value)} onChange={onValueChange(skillName)} className={classes.skillInput} />
          {skillName} ({formatAbility(skill.ability)})
        </Box>
      })
    }
    Skills
  </Box >
  )
}

export default Skills;
