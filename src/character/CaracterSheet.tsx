import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import InputLabelGroup from "../components/InputLabelGroup";
import Abilities from "./Abilities";
import Attack from "./Attack";
import BasicInfo from "./BasicInfo";
import BorderedTextArea from "./BorderedTextArea";
import Equipment from "./Equipment";
import HitBox from "./HitBox";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import { useStyles } from "./styles";
import { CharacterSheetProps } from "./Types";
import { calculateModifier, formatModifier, parseNumber } from "./utils";

const CharacterSheet = (props: CharacterSheetProps) => {

  const classes = useStyles();
  const { character, setCharacter } = props;
  const charProps = { character, setCharacter };
  const [editableSkills, setEditableSkills] = useState(true); //editable skills/savings and abilities

  const onInspirationChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharField("inspiration", e.target.value)()
  const onPassivePerceptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "passivePerception")
  const onProficiencyBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "proficiencyBonus")

  const setCharField = (field: string, value: any) => () => setCharacter({ ...character, [field]: value })
  const setNumber = (value: string, field: string) => {
    const n = parseNumber(value);
    if (n !== undefined) setCharField(field, n)()
  }

  useEffect(() => {
    const newCharacter = { ...character }

    if (editableSkills) {
      //recalculate data when needed
      Object.keys(newCharacter.skills).forEach((k) => {
        const skill = (newCharacter.skills as any)[k];
        const ability = (character.abilities as any)[skill.ability];

        (newCharacter.skills as any)[k].value = calculateModifier(ability, skill.proficiency, character.proficiencyBonus);
      })

      Object.keys(newCharacter.savingThrows).forEach((k) => {
        const saving = (newCharacter.savingThrows as any)[k];
        const ability = (character.abilities as any)[k];

        (newCharacter.savingThrows as any)[k].value = calculateModifier(ability, saving.proficiency, character.proficiencyBonus);
      })

      setCharacter(newCharacter)
    }
  }, [character.abilities, character.skills, character.proficiencyBonus, character.savingThrows, editableSkills])

  // const serializeChar = () => JSON.stringify(character, null, 2);
  // const unserializeChar = (data: ICharacter) => setCharacter(data);
  // (window as any).unserializeChar = unserializeChar;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "1124px", backgroundColor: "#FFF" }} className="sheetContainer">
        <Box sx={{ width: '100%' }}>
          <BasicInfo {...charProps} />
          <Grid container spacing={2}>
            <Grid className={classes.gridItem} item md={4} >
              <Grid container spacing={2}>
                <Grid item md={4}>
                  <Abilities {...charProps} editable={editableSkills} />
                </Grid>
                <Grid item md={8}>
                  <InputLabelGroup label="Inspiration" onChange={onInspirationChange} value={character.inspiration} />
                  <InputLabelGroup label="Proficiency Bonus" onChange={onProficiencyBonusChange} value={formatModifier(character.proficiencyBonus)} />
                  <SavingThrows {...charProps} editable={editableSkills} />
                  <Skills  {...charProps} editable={editableSkills} />
                </Grid>
              </Grid>

              <InputLabelGroup label="Passive Perception" onChange={onPassivePerceptionChange} value={character.passivePerception} />
              <BorderedTextArea {...charProps} label="Other Proficiencies & Languages" field="proficienciesAndLanguages" height="450px" />

            </Grid>
            <Grid className={classes.gridItem} item md={4}>
              <HitBox {...charProps} />
              <Attack character={character} setCharacter={setCharacter} />
              <Equipment {...charProps} />
            </Grid>
            <Grid className={classes.gridItem} item md={4} >
              <Box className={`${classes.bgContainer} ${classes.container}`}>
                <BorderedTextArea label="Personal Traits" field="personalTraits" {...charProps} />
                <BorderedTextArea label="Ideals" field="ideals" {...charProps} />
                <BorderedTextArea label="Bonds" field="bonds" {...charProps} />
                <BorderedTextArea label="Flaws" field="flaws" {...charProps} />
              </Box>
              <BorderedTextArea label="Features & Traits" field="featuresAndTraits" {...charProps} height="800px" />
            </Grid>
          </Grid>
        </Box>
      </div>
      <div></div>
    </div>
  );
}

export default CharacterSheet;
