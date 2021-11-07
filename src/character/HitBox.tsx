
import { Box, Grid } from '@mui/material';
import React from 'react';
import CircularCheckBox from '../components/CircularCheckBox';
import BorderedTextArea from './BorderedTextArea';
import { useStyles } from './styles';
import { CharacterProps } from './Types';
import { formatModifier, parseNumber } from './utils';

const HitBox = (props: CharacterProps) => {
  const classes = useStyles();
  const { character, setCharacter } = props;

  //TODO: these 2 methods are duplicated in the CharacterSheet.tsx
  const setCharField = (field: string, value: any) => () => setCharacter({ ...character, [field]: value })
  const setNumber = (value: string, field: string) => {
    const n = parseNumber(value);
    if (n !== undefined) setCharField(field, n)()
  }

  const onHitDiceTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharField("hitDiceTotal", e.target.value)()
  const onHitDiceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCharField("hitDice", e.target.value)()
  const onCurrentHitPointsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCharField("currentHitPoints", e.target.value)()
  const onHitPointMaximumChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharField("hitPointMaximum", e.target.value)()
  const onSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "speed")
  const onAcChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "ac")
  const onInitiativeChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "initiative")

  const onDeathSaveChange = (type: string, position: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDeathSaves = { ...character.deathSaves };
      (newDeathSaves as any)[type][position] = e.target.checked;
      setCharacter({ ...character, deathSaves: newDeathSaves })
    }
  }

  return <Box className={`${classes.bgContainer} ${classes.centerContainer}`}>
    <Box className={classes.centerContainerFirstRow}>
      <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
        <input value={character.ac} onChange={onAcChange} type="text" className={classes.abilityModifierInput} />
        AC
      </div>

      <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
        <input value={formatModifier(character.initiative || 0)} onChange={onInitiativeChange} type="text" className={classes.abilityModifierInput} />
        Initiative
      </div>

      <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
        <input value={character.speed} onChange={onSpeedChange} type="text" className={classes.abilityModifierInput} />
        Speed
      </div>
    </Box>

    <Box className={classes.border} textAlign="center" mb={2}>
      Hit Point Maximum
      <input type="text" value={character.hitPointMaximum} onChange={onHitPointMaximumChange} className={classes.skillInput} style={{ width: "auto" }} />
      <textarea onChange={onCurrentHitPointsChange} className={classes.textArea}>{character.currentHitPoints}</textarea>
      Current Hit Points
    </Box>

    <BorderedTextArea label="Temporary Hit Points" character={character} setCharacter={setCharacter} field="temporaryHitPoints" />

    <Grid container spacing={2}>
      <Grid item md={6}>
        <Box className={classes.border} textAlign="center" mb={2}>
          {/* TODO: fix size of input and text area*/}
          Total <input type="text" value={character.hitDiceTotal} onChange={onHitDiceTotalChange} className={classes.skillInput} style={{ width: "90px" }} />
          <textarea onChange={onHitDiceChange} className={classes.textArea} style={{ height: "33px" }}>{character.hitDice}</textarea>
          Hit Dice
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className={classes.border} textAlign="right" mb={2} p={1} pt={1}>
          <b>Success</b>{[1, 2, 3].map(index => <CircularCheckBox checked={(character.deathSaves.success as any)[index]} onChange={onDeathSaveChange("success", index)} />)}
          <b>Failure</b> {[1, 2, 3].map(index => <CircularCheckBox checked={(character.deathSaves.failure as any)[index]} onChange={onDeathSaveChange("failure", index)} />)}
          <Box textAlign="center">
            Death Saves
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>;
};

export default HitBox;