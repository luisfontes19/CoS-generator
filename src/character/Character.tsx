import { Button, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CircularCheckBox from "../components/CircularCheckBox";
import InputLabelGroup from "../components/InputLabelGroup";
import Abilities, { abilitiesDefault, AbilityArray } from "./Abilities";
import Attack, { defaultAttack, IAttack } from "./Attack";
import BasicInfo from "./BasicInfo";
import BorderedTextArea from "./BorderedTextArea";
import SavingThrows, { defaultSavingThrows, ISavingThrows } from "./SavingThrows";
import Skills, { ISkills, skillsDefault } from "./Skills";
import { useStyles } from "./styles";
import { formatModifier, parseNumber } from "./utils";


const Character = () => {

  const classes = useStyles();

  const [abilities, setAbilities] = useState<AbilityArray>(abilitiesDefault);
  const [savingThrows, setSavingThrows] = useState<ISavingThrows>(defaultSavingThrows);
  const [skills, setSkills] = useState<ISkills>(skillsDefault);
  const [charName, setCharName] = useState("");
  const [classAndLevel, setClassAndLevel] = useState("");
  const [race, setRace] = useState("");
  const [background, setBackground] = useState("");
  const [alignment, setAlignment] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [xp, setXp] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [proficiencyBonus, setProficiencyBonus] = useState(0);
  const [ac, setAc] = useState(0);
  const [initiative, setInitiative] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [hitPointMaximum, setHitPointMaximum] = useState("");
  const [currentHitPoints, setCurrentHitPoints] = useState("");
  const [temporaryHitPoints, setTemporaryHitPoints] = useState("");
  const [personalTraits, setPersonalTraits] = useState("");
  const [ideals, setIdeals] = useState("");
  const [bonds, setBonds] = useState("");
  const [flaws, setFlaws] = useState("");
  const [proficienciesAndLanguages, setProficienciesAndLanguages] = useState("");
  const [featuresAndTraits, setFeaturesAndTraits] = useState("");
  const [passivePerception, setPassivePerception] = useState(0);
  const [hitDiceTotal, setHitDiceTotal] = useState("");
  const [hitDice, setHitDice] = useState("");
  const [deathSaves, setDeathSaves] = useState({ success: { 1: false, 2: false, 3: false }, failure: { 1: false, 2: false, 3: false } });
  const [attacks, setAttacks] = useState<IAttack[]>([{ ...defaultAttack }, { ...defaultAttack }, { ...defaultAttack }]);
  const [attackInfo, setAttackInfo] = useState("");
  const [equipment, setEquipment] = useState("");
  const [cp, setCp] = useState(0);
  const [sp, setSp] = useState(0);
  const [ep, setEp] = useState(0);
  const [gp, setGp] = useState(0);
  const [pp, setPp] = useState(0);

  const onEquipmentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setEquipment(e.target.value)
  const onHitDiceTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => setHitDiceTotal(e.target.value)
  const onHitDiceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setHitDice(e.target.value)
  const onCurrentHitPointsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrentHitPoints(e.target.value)
  const onHitPointMaximumChange = (e: React.ChangeEvent<HTMLInputElement>) => setHitPointMaximum(e.target.value)
  const onSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => setSpeed(parseNumber(e.target.value) || 0)
  const onAcChange = (e: React.ChangeEvent<HTMLInputElement>) => setAc(parseNumber(e.target.value) || 0)
  const onInspirationChange = (e: React.ChangeEvent<HTMLInputElement>) => setInspiration(e.target.value)


  const onEpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, setEp)
  const onCpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, setCp)
  const onSpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, setSp)
  const onGpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, setGp)
  const onPpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, setPp)
  const onPassivePerceptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, setPassivePerception)
  const onInitiativeChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, setInitiative)
  const onProficiencyBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, setProficiencyBonus)


  const setNumber = (value: string, setter: (value: number) => void) => {
    const n = parseNumber(value);
    if (n !== undefined) setter(n);
  }


  const onDeathSaveChange = (type: string, position: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDeathSaves = { ...deathSaves };
      (newDeathSaves as any)[type][position] = e.target.checked;
      setDeathSaves(newDeathSaves);
    }
  }

  const serializeChar = () => {
    const data = {
      abilities, savingThrows, skills, charName, classAndLevel, race,
      background, alignment, playerName, xp, inspiration, proficiencyBonus,
      ac, initiative, speed, hitPointMaximum, currentHitPoints,
      temporaryHitPoints, personalTraits, ideals, bonds, flaws,
      proficienciesAndLanguages, featuresAndTraits, passivePerception,
      hitDiceTotal, hitDice, deathSaves, attacks, attackInfo, equipment,
      cp, sp, ep, gp, pp
    }

    return JSON.stringify(data, null, 2);
  }

  const unserializeChar = (data: any) => {
    setAbilities(data.abilities)
    setSavingThrows(data.savingThrows)
    setSkills(data.skills)
    setCharName(data.charName)
    setClassAndLevel(data.classAndLevel)
    setRace(data.race)
    setBackground(data.background)
    setAlignment(data.alignment)
    setPlayerName(data.playerName)
    setXp(data.xp)
    setInspiration(data.inspiration)
    setProficiencyBonus(data.proficiencyBonus)
    setAc(data.ac)
    setInitiative(data.initiative)
    setSpeed(data.speed)
    setHitPointMaximum(data.hitPointMaximum)
    setCurrentHitPoints(data.currentHitPoints)
    setTemporaryHitPoints(data.temporaryHitPoints)
    setPersonalTraits(data.personalTraits)
    setIdeals(data.ideals)
    setBonds(data.bonds)
    setFlaws(data.flaws)
    setProficienciesAndLanguages(data.proficienciesAndLanguages)
    setFeaturesAndTraits(data.featuresAndTraits)
    setPassivePerception(data.passivePerception)
    setHitDiceTotal(data.hitDiceTotal)
    setHitDice(data.hitDice)
    setDeathSaves(data.deathSaves)
    setAttacks(data.attacks)
    setAttackInfo(data.attackInfo)
    setEquipment(data.equipment)
    setCp(cp)
    setSp(sp)
    setEp(ep)
    setGp(gp)
    setPp(pp)
  }

  (window as any).unserializeChar = unserializeChar;

  const unserializeCharJson = (json: string) => {
    const data = JSON.parse(json);
    unserializeChar(data);
  }

  const basicInfoProps = { classAndLevel, race, background, alignment, playerName, xp, charName, setClassAndLevel, setPlayerName, setAlignment, setBackground, setRace, setXp, setCharName }

  return (
    <Container fixed style={{ backgroundColor: "#FFF" }} className="sheetContainer">
      <Button onClick={() => console.log(serializeChar())}>Export</Button>
      <Box sx={{ width: '100%' }}>
        <BasicInfo {...basicInfoProps} />
        <Grid container spacing={2}>
          <Grid className={classes.gridItem} item md={4} >
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Abilities abilities={abilities} setAbilities={setAbilities} />
              </Grid>
              <Grid item md={8}>
                <InputLabelGroup label="Inspiration" onChange={onInspirationChange} value={inspiration} />
                <InputLabelGroup label="Proficiency Bonus" onChange={onProficiencyBonusChange} value={formatModifier(proficiencyBonus)} />

                <SavingThrows savingThrows={savingThrows} setSavingThrows={setSavingThrows} />
                <Skills setSkills={setSkills} skills={skills} />
              </Grid>
            </Grid>

            <InputLabelGroup label="Passive Perception" onChange={onPassivePerceptionChange} value={formatModifier(passivePerception)} />
            <BorderedTextArea label="Other Proficiencies & Languages" value={proficienciesAndLanguages} setValue={setProficienciesAndLanguages} height="450px" />

          </Grid>
          <Grid className={classes.gridItem} item md={4}>
            <Box className={`${classes.bgContainer} ${classes.centerContainer}`}>
              <Box className={classes.centerContainerFirstRow}>
                <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
                  <input value={ac} onChange={onAcChange} type="text" className={classes.abilityModifierInput} />
                  AC
                </div>

                <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
                  <input value={formatModifier(initiative || 0)} onChange={onInitiativeChange} type="text" className={classes.abilityModifierInput} />
                  Initiative
                </div>

                <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
                  <input value={speed} onChange={onSpeedChange} type="text" className={classes.abilityModifierInput} />
                  Speed
                </div>
              </Box>

              <Box className={classes.border} textAlign="center" mb={2}>
                Hit Point Maximum
                <input type="text" value={hitPointMaximum} onChange={onHitPointMaximumChange} className={classes.skillInput} style={{ width: "auto" }} />
                <textarea onChange={onCurrentHitPointsChange} className={classes.textArea}>currentHitPoints</textarea>
                Current Hit Points
              </Box>

              <BorderedTextArea label="Temporary Hit Points" value={temporaryHitPoints} setValue={setTemporaryHitPoints} />

              <Grid container spacing={2}>
                <Grid item md={6}>
                  <Box className={classes.border} textAlign="center" mb={2}>
                    {/* TODO: fix size of input and text area*/}
                    Total <input type="text" value={hitDiceTotal} onChange={onHitDiceTotalChange} className={classes.skillInput} style={{ width: "90px" }} />
                    <textarea onChange={onHitDiceChange} className={classes.textArea} style={{ height: "33px" }}>{hitDice}</textarea>
                    Hit Dice
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className={classes.border} textAlign="right" mb={2} p={1} pt={1}>
                    <b>Success</b>{[1, 2, 3].map(index => <CircularCheckBox checked={(deathSaves.success as any)[index]} onChange={onDeathSaveChange("success", index)} />)}
                    <b>Failure</b> {[1, 2, 3].map(index => <CircularCheckBox checked={(deathSaves.failure as any)[index]} onChange={onDeathSaveChange("failure", index)} />)}
                    <Box textAlign="center">
                      Death Saves
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Attack attacks={attacks} setAttacks={setAttacks} attackInfo={attackInfo} setAttackInfo={setAttackInfo} />

            <Box className={`${classes.border} ${classes.container}`} mb={2} p={1} pt={1}>
              <Grid container spacing={2}>
                <Grid item md={3}>
                  <TextField style={{ marginBottom: "10px" }} value={cp} onChange={onCpChange} label="CP" variant="outlined" size="small" />
                  <TextField style={{ marginBottom: "10px" }} value={sp} onChange={onSpChange} label="SP" variant="outlined" size="small" />
                  <TextField style={{ marginBottom: "10px" }} value={ep} onChange={onEpChange} label="EP" variant="outlined" size="small" />
                  <TextField style={{ marginBottom: "10px" }} value={gp} onChange={onGpChange} label="GP" variant="outlined" size="small" />
                  <TextField style={{ marginBottom: "10px" }} value={pp} onChange={onPpChange} label="PP" variant="outlined" size="small" />
                </Grid>
                <Grid item md={9}>
                  <textarea onChange={onEquipmentChange} className={classes.textArea} style={{ height: "400px" }}>{equipment}</textarea>
                </Grid>
              </Grid>
              Equipment
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item md={4} >

            <Box className={`${classes.bgContainer} ${classes.container}`}>
              <BorderedTextArea label="Personal Traits" value={personalTraits} setValue={setPersonalTraits} />
              <BorderedTextArea label="Ideals" value={ideals} setValue={setIdeals} />
              <BorderedTextArea label="Bonds" value={bonds} setValue={setBonds} />
              <BorderedTextArea label="Flaws" value={flaws} setValue={setFlaws} />
            </Box>

            <BorderedTextArea label="Features & Traits" value={featuresAndTraits} setValue={setFeaturesAndTraits} height="800px" />

          </Grid>
        </Grid>
      </Box>
    </Container >
  );
}

export default Character;
