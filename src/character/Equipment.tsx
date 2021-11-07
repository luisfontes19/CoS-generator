
import { Box, Grid, TextField } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';
import { CharacterProps } from './Types';
import { parseNumber } from './utils';

const Equipment = (props: CharacterProps) => {

  const classes = useStyles();
  const { character, setCharacter } = props;

  const onEpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "ep")
  const onCpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "cp")
  const onSpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "sp")
  const onGpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "gp")
  const onPpChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value, "pp")
  const onEquipmentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCharField("equipment", e.target.value)()

  //TODO: these 2 methods are duplicated in the CharacterSheet.tsx
  const setCharField = (field: string, value: any) => () => setCharacter({ ...character, [field]: value })
  const setNumber = (value: string, field: string) => {
    const n = parseNumber(value);
    if (n !== undefined) setCharField(field, n)()
  }

  return <Box className={`${classes.border} ${classes.container}`} mb={2} p={1} pt={1}>
    <Grid container spacing={2}>
      <Grid item md={3}>
        <TextField style={{ marginBottom: "10px" }} value={character.cp} onChange={onCpChange} label="CP" variant="outlined" size="small" />
        <TextField style={{ marginBottom: "10px" }} value={character.sp} onChange={onSpChange} label="SP" variant="outlined" size="small" />
        <TextField style={{ marginBottom: "10px" }} value={character.ep} onChange={onEpChange} label="EP" variant="outlined" size="small" />
        <TextField style={{ marginBottom: "10px" }} value={character.gp} onChange={onGpChange} label="GP" variant="outlined" size="small" />
        <TextField style={{ marginBottom: "10px" }} value={character.pp} onChange={onPpChange} label="PP" variant="outlined" size="small" />
      </Grid>
      <Grid item md={9}>
        <textarea onChange={onEquipmentChange} className={classes.textArea} style={{ height: "400px" }}>{character.equipment}</textarea>
      </Grid>
    </Grid>
    Equipment
  </Box>;
};

export default Equipment;