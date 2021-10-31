import { Checkbox, FormControlLabel, FormGroup, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import FeatureButton from '../components/FeatureButton';
import { StyledTableCell, StyledTableRow } from '../components/Table';
import { DiceType, roll } from '../DiceRoll';
import BattleImage from "../images/battle.png";
import CastleImage from "../images/castle.png";
import HouseImage from "../images/house.png";
import { generateCastleRavenloftEncounter, generateDaytimeEncounter, generateNightTimeEncounter, generateVallakiHouseEncounter, generateVillageOfBaroviaHouseEncounter } from './EncountersGenerator';
import { IEncounterMonster } from './EncounterUtils';

interface IEncounterRow {
  date: string;
  roll: number;
  day: boolean;
  place: string;
  details: IEncounterMonster[];
}

const styles = {
  paper: {
    padding: "30px"
  },
  flex: {
    display: "flex",
  },
  flexItem: {
    marginRight: "10px"
  }
}

const Encounters = () => {

  const [rows, setRows] = useState([] as IEncounterRow[]);
  const [roadEncounter, setRoadEncounter] = useState(true); //false means its wild encounter
  const [dayTimeToggle, setDayTimeToggle] = useState(true);
  const [forceEncounter, setForceEncounter] = useState(false);
  const roadDC = 18;
  const wildDC = 15;


  const outsideEncounterClick = () => {
    const n = roll(1, DiceType.d12) + roll(1, DiceType.d8);
    const dc = roadEncounter ? roadDC : wildDC;

    let details: IEncounterMonster[];
    if (forceEncounter || n >= dc)
      details = dayTimeToggle ? generateDaytimeEncounter() : generateNightTimeEncounter();
    else
      details = [{ type: "none", name: `No encounter. Rolled bellow ${dc}`, hp: -1 }];

    const row: IEncounterRow = { date: new Date().toUTCString(), place: roadEncounter ? "Road" : "Wild", roll: forceEncounter ? 20 : n, day: dayTimeToggle, details }
    setRows([row, ...rows])
  }

  const baroviaVillageHouseClick = () => {
    const n = roll(1, DiceType.d20);
    const details = generateVillageOfBaroviaHouseEncounter(n);

    const row: IEncounterRow = { date: new Date().toUTCString(), place: "Village Of Barovia House", roll: forceEncounter ? 20 : n, day: dayTimeToggle, details }
    setRows([row, ...rows])
  }

  const castleRavenloftClick = () => {
    const n = roll(1, DiceType.d12) + roll(1, DiceType.d8);
    const details = generateCastleRavenloftEncounter(n);

    const row: IEncounterRow = { date: new Date().toUTCString(), place: "Caste Ravenloft", roll: forceEncounter ? 20 : n, day: dayTimeToggle, details }
    setRows([row, ...rows])
  }

  const vallakiHouseClick = () => {
    const n = roll(1, DiceType.d20);
    const details = generateVallakiHouseEncounter(n);

    const row: IEncounterRow = { date: new Date().toUTCString(), place: "Vallaki House", roll: forceEncounter ? 20 : n, day: dayTimeToggle, details }
    setRows([row, ...rows])
  }

  const onDayTimeToggle = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) setDayTimeToggle(newValue === "day");
  };

  const onRoadToggle = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) setRoadEncounter(newValue === "road");
  };

  const onForceCombatChange = () => setForceEncounter(!forceEncounter)

  return (
    <div>
      <div style={styles.flex}>
        <div style={styles.flexItem}><FeatureButton icon={BattleImage} text="Outside Encounter" onClick={outsideEncounterClick} /></div>
        <div style={styles.flexItem}><FeatureButton icon={HouseImage} text="Village of Barovia House" onClick={baroviaVillageHouseClick} /></div>
        <div style={styles.flexItem}><FeatureButton icon={CastleImage} text="Castle Ravenloft" onClick={castleRavenloftClick} /></div>
        <div style={styles.flexItem}><FeatureButton icon={HouseImage} text="Town Of Vallaki House" onClick={vallakiHouseClick} /></div>
      </div>

      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12} order={{ md: 1, sm: 2, xs: 2 }}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Roll</StyledTableCell>
                  <StyledTableCell>Day/Night</StyledTableCell>
                  <StyledTableCell>Place</StyledTableCell>
                  <StyledTableCell align="right">Details</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell scope="row">{row.roll}</StyledTableCell>
                    <StyledTableCell>{row.day ? "Day" : "Night"}</StyledTableCell>
                    <StyledTableCell>{row.place}</StyledTableCell>
                    <StyledTableCell align="right">
                      {
                        row.details.map((d, j) => {
                          return (
                            <div key={j} style={{ padding: "5px", lineHeight: "40px" }}>
                              #{j + 1} - {d.name}{d.gender ? ` (${d.gender.substring(0, 1).toUpperCase()}) ` : " "}
                              <a href={d.reference} target="_blank" rel="noreferrer"><b>{d.type}</b></a>
                              {
                                d.hp > 0 ? <TextField style={{ width: "70px", marginLeft: "5px" }} label="HP" size="small" defaultValue={d.hp} /> : ""
                              }
                            </div>
                          )
                        })
                      }
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item md={4} sm={12} xs={12} order={{ md: 2, sm: 1, xs: 1 }}>
          <Paper style={styles.paper}>
            <Grid container spacing={2}>
              <Grid item md={6}>

                <ToggleButtonGroup value={dayTimeToggle ? "day" : "night"} exclusive onChange={onDayTimeToggle}>
                  <ToggleButton value="day">Day</ToggleButton>
                  <ToggleButton value="night" >Night</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item md={6}> <ToggleButtonGroup value={roadEncounter ? "road" : "wild"} exclusive onChange={onRoadToggle}>
                <ToggleButton value="road">Road</ToggleButton>
                <ToggleButton value="wild" >Wild</ToggleButton>
              </ToggleButtonGroup>
              </Grid>
            </Grid>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={forceEncounter} onChange={onForceCombatChange} />} label="Force Encounter" />
            </FormGroup>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Encounters;
