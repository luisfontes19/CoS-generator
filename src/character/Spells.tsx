
import { Box, Grid, TextField } from '@mui/material';
import React from 'react';
import CircularCheckBox from '../components/CircularCheckBox';
import SpellsHeader from './SpellsHeader';
import { useStyles } from './styles';
import { CharacterProps, SpellLevel } from './Types';

const Spells = (props: CharacterProps) => {
  const { character, setCharacter, empty } = props;
  const classes = useStyles();

  const cantripBox = () => {
    return <Box className={classes.border} style={{ marginBottom: "10px" }}>
      <Box style={{ display: "flex", padding: "10px" }}>
        <div style={{ border: "1px solid #000", borderRadius: "5px", width: "100px", textAlign: "center", fontSize: "35px" }}>0</div>
        <div style={{ textAlign: "center", fontSize: "35px", width: "100%" }}>Cantrips</div>
      </Box>
      {
        character.spells.cantrips.map((cantrip, index) =>
          <div style={{ padding: "4.3px" }}><input key={index} type="text" className={classes.skillInput} style={{ width: "100%" }} /></div>)
      }
    </Box>
  }

  const spellBox = (level: number) => {
    const spellsLevel: SpellLevel = character.spells[`level${level}`];

    return <Box key={level} className={classes.border} style={{ marginBottom: level < 6 ? "10px" : "20px" }}>
      <Box style={{ display: "flex", padding: "10px" }}>
        <div style={{ border: "1px solid #000", borderRadius: "5px", width: "100px", textAlign: "center", fontSize: "35px" }}>{level}</div>
        <div style={{ padding: "7px" }}><TextField value={empty ? " " : spellsLevel.slots} label="Slots" size="small" /></div>
        <div style={{ padding: "7px" }}><TextField value={empty ? " " : spellsLevel.used} label="Used" size="small" /></div>
      </Box>
      {
        spellsLevel.spells.map((spell, index) =>
          <div key={index} style={{ display: "flex", padding: "5px" }}><CircularCheckBox /> <input type="text" className={classes.skillInput} style={{ width: "100%" }} /> </div>)
      }
    </Box>
  }

  return <Box sx={{ width: '100%', paddingTop: "40px" }}>
    <SpellsHeader {...props} />
    <Grid container >
      <Grid className={classes.gridItem} item md={4}>
        {cantripBox()}
        {spellBox(1)}
        {spellBox(2)}
      </Grid>
      <Grid className={classes.gridItem} item md={4}>
        {spellBox(3)}
        {spellBox(4)}
        {spellBox(5)}
      </Grid>
      <Grid className={classes.gridItem} item md={4}>
        {spellBox(6)}
        {spellBox(7)}
        {spellBox(8)}
        {spellBox(9)}
      </Grid>
    </Grid>
  </Box>
};

export default Spells;