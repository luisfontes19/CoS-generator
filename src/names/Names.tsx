import { Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Slider, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { StyledTableCell, StyledTableRow } from '../components/Table';
import { generateBarovianFamily, generateFemaleBarovian, generateMaleBarovian } from '../encounters/EncountersGenerator';
import { IEncounterMonster } from '../encounters/EncounterUtils';

const Names = () => {

  const styles = {
    papper: {
      padding: "40px"
    }
  }

  const [maleNameCount, setMaleNameCount] = useState(0);
  const [femaleNameCount, setFemaleNameCount] = useState(0);
  const [sameFamily, setSameFamily] = useState(false);
  const [names, setNames] = useState<IEncounterMonster[]>([]);
  const [nameType, setNameType] = useState("barovian");

  const maleCountChange = (event: Event, newValue: number | number[]) => setMaleNameCount(newValue as number);
  const femaleCountChange = (event: Event, newValue: number | number[]) => setFemaleNameCount(newValue as number);
  const onSameFamilyToggle = (event: React.ChangeEvent<HTMLInputElement>) => setSameFamily(event.target.checked);
  const onNameTypeChange = (event: SelectChangeEvent) => setNameType(event.target.value as string);

  const updateNames = () => {
    let newNames = [];
    if (sameFamily)
      newNames = generateBarovianFamily(maleNameCount, femaleNameCount)
    else {
      for (let i = 0; i < maleNameCount; i++) newNames.push(generateMaleBarovian()[0]);
      for (let i = 0; i < femaleNameCount; i++) newNames.push(generateFemaleBarovian()[0]);
    }

    setNames([...newNames, ...names]);
  }

  return (
    <div >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Gender</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {names.map((entry: any, index: number) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{entry.name}</StyledTableCell>
                    <StyledTableCell>{entry.gender}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper style={styles.papper}>
            <FormControl fullWidth style={{ marginBottom: "20px" }}>
              <InputLabel id="name-type-label">Name Type</InputLabel>
              <Select labelId="name-type-label" value={nameType} label="Name Type" onChange={onNameTypeChange} >
                <MenuItem value={nameType}>Barovian Commoner</MenuItem>
              </Select>
            </FormControl>

            Man <Slider defaultValue={maleNameCount} onChange={maleCountChange} step={1} valueLabelDisplay="auto" max={30} />
            Woman <Slider defaultValue={femaleNameCount} onChange={femaleCountChange} step={1} valueLabelDisplay="auto" max={30} />

            Same Family <Checkbox checked={sameFamily} onChange={onSameFamilyToggle} />

            <Button variant="contained" onClick={updateNames}>Generate</Button>
          </Paper>

        </Grid>
      </Grid >
    </div >
  );
}

export default Names;
