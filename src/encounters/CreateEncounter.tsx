import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { Alert, Autocomplete, Box, Button, Grid, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { StyledTableCell, StyledTableRow } from "../components/Table";
import { calculateAdjustedXP, getXPDifficultyForLevel, XPDificulty } from "./EncountersGenerator";
import { getMonsterDataFor, IMonsterData, monsterData } from "./Monsters";
//https://blackcitadelrpg.com/challenge-rating-5e/
const CreateEncounter = () => {


  const [monsterAutocompleteValue, setMonsterAutocompleteValue] = useState<IMonsterData>();
  const [monsters, setMonsters] = useState<IMonsterData[]>([]);
  const [finalXP, setFinalXP] = useState(0);
  const [recommendedCombatXP, setRecommendedCombatXP] = useState<any>({});
  const [partyLevels, setPartyLevels] = useState("3,3,3");
  const [difficulty, setDifficulty] = useState("");


  useEffect(() => calculateXP(), [monsters])
  useEffect(() => calculateDifficulty(), [finalXP, recommendedCombatXP])
  useEffect(() => {
    let difficulties = { 0: 0, 1: 0, 2: 0, 3: 0 };
    try {

      partyLevels.split(",").forEach(l => {
        const xps = getXPDifficultyForLevel(parseInt(l));
        difficulties[XPDificulty.EASY] += xps[XPDificulty.EASY]
        difficulties[XPDificulty.MEDIUM] += xps[XPDificulty.MEDIUM]
        difficulties[XPDificulty.HARD] += xps[XPDificulty.HARD]
        difficulties[XPDificulty.DEADLY] += xps[XPDificulty.DEADLY]
      });
      setRecommendedCombatXP(difficulties);
      calculateDifficulty();
    }
    catch (ex) {
      difficulties[XPDificulty.EASY] = 0;
      difficulties[XPDificulty.MEDIUM] = 0;
      difficulties[XPDificulty.HARD] = 0;
      difficulties[XPDificulty.DEADLY] = 0;
      setRecommendedCombatXP(difficulties);
      calculateDifficulty();
    }
  }, [partyLevels]);

  const onAutoCompleteChange = (event: SyntheticEvent, value: any) => setMonsterAutocompleteValue(value as IMonsterData)
  const onPartyLevelsChange = (e: React.ChangeEvent<HTMLInputElement>) => setPartyLevels(e.target.value);


  const SearchMonsterBox = () => {
    return (
      <Autocomplete
        onChange={onAutoCompleteChange}
        options={monsterData}
        fullWidth
        getOptionLabel={option => `${option.type} (${option.xp} XP)`}
        renderInput={(params) => <TextField {...params} label="Add Monster" />}
        value={monsterAutocompleteValue}
      />
    );
  }

  const calculateXP = () => setFinalXP(calculateAdjustedXP(monsters))
  const calculateDifficulty = () => {
    let diff = "";
    if (finalXP >= recommendedCombatXP[XPDificulty.DEADLY])
      diff = "Deadly";
    else if (finalXP >= recommendedCombatXP[XPDificulty.HARD])
      diff = "Hard";
    else if (finalXP >= recommendedCombatXP[XPDificulty.MEDIUM])
      diff = "Medium";
    else
      diff = "Easy";

    setDifficulty(diff);
  }


  const onRemoveMonsterClick = (i: number) => {
    return () => {
      const newMonsters = [...monsters];
      newMonsters.splice(i, 1);
      setMonsters(newMonsters);
    }
  }

  const onMonsterAddClick = () => {
    if (monsterAutocompleteValue) {
      const m = getMonsterDataFor(monsterAutocompleteValue!);
      console.log(m)
      console.log(monsters)
      console.log([m, ...monsters])
      setMonsters([m, ...monsters])
    }
  }

  const onEncounterClearClick = () => setMonsters([])

  return <div>
    <Grid container spacing={2}>
      <Grid item md={8} sm={12} xs={12} order={{ md: 1, sm: 2, xs: 2 }}>
        <div style={{ display: "flex", }}>
          <SearchMonsterBox />
          <Button onClick={onMonsterAddClick} variant="contained"><AddIcon /></Button>
          <Button onClick={onEncounterClearClick} variant="contained" color="error"><RotateLeftIcon /></Button>
        </div>

        <Box mt={2} mb={2}>
          <Alert severity="info">Combat Dificulty: {difficulty} ({finalXP}XP)</Alert>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell>XP</StyledTableCell>
                <StyledTableCell>HP</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                monsters.map((m, i) => {
                  return <StyledTableRow key={i}>
                    <StyledTableCell>{i + 1}</StyledTableCell>
                    <StyledTableCell><a href={m.reference} target="_blank" rel="noreferrer">{m.type}</a></StyledTableCell>
                    <StyledTableCell>{m.xp}</StyledTableCell>
                    <StyledTableCell><TextField fullWidth label="HP" size="small" defaultValue={m.hp} /></StyledTableCell>
                    <StyledTableCell width={50}>
                      <IconButton onClick={onRemoveMonsterClick(i)}><ClearIcon /></IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={4} sm={12} xs={12} order={{ md: 2, sm: 1, xs: 1 }}>
        <div>Comma seperated char levels</div>
        <TextField value={partyLevels} fullWidth onChange={onPartyLevelsChange} />

        <h2>Recommended Combat XP</h2>
        <TableContainer component={Paper}>
          <Table aria-label="customized table" >
            <TableHead>
              <TableRow>
                <StyledTableCell>Difficulty</StyledTableCell>
                <StyledTableCell>XP</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow >
                <StyledTableCell scope="row">Easy</StyledTableCell>
                <StyledTableCell scope="row">{recommendedCombatXP[XPDificulty.EASY]}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow >
                <StyledTableCell scope="row">Medium</StyledTableCell>
                <StyledTableCell scope="row">{recommendedCombatXP[XPDificulty.MEDIUM]}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow >
                <StyledTableCell scope="row">Hard</StyledTableCell>
                <StyledTableCell scope="row">{recommendedCombatXP[XPDificulty.HARD]}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow >
                <StyledTableCell scope="row">Deadly</StyledTableCell>
                <StyledTableCell scope="row">{recommendedCombatXP[XPDificulty.DEADLY]}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>


  </div >
}

export default CreateEncounter;