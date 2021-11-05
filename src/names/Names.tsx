import { Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Slider, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { StyledTableCell, StyledTableRow } from '../components/Table';
import { generateBarovianFamilyEncounter, generateBarovianFemale, generateBarovianMale } from '../encounters/EncountersGenerator';
import { IEncounterMonster } from '../encounters/EncounterUtils';
import { NameType } from './NameUtils';

const Names = () => {

  const styles = {
    papper: {
      padding: "40px"
    }
  }

  const [maleNameCount, setMaleNameCount] = useState(1);
  const [femaleNameCount, setFemaleNameCount] = useState(0);
  const [sameFamily, setSameFamily] = useState(false);
  const [names, setNames] = useState<IEncounterMonster[]>([]);
  const [nameType, setNameType] = useState<NameType>(NameType.Barovian);

  const maleCountChange = (event: Event, newValue: number | number[]) => setMaleNameCount(newValue as number);
  const femaleCountChange = (event: Event, newValue: number | number[]) => setFemaleNameCount(newValue as number);
  const onSameFamilyToggle = (event: React.ChangeEvent<HTMLInputElement>) => setSameFamily(event.target.checked);
  const onNameTypeChange = (event: SelectChangeEvent) => setNameType(event.target.value as NameType);

  const updateNames = () => {
    let newNames = [];
    if (sameFamily)
      newNames = generateBarovianFamilyEncounter(nameType, maleNameCount, femaleNameCount)
    else {
      for (let i = 0; i < maleNameCount; i++) newNames.push(generateBarovianMale(nameType)[0]);
      for (let i = 0; i < femaleNameCount; i++) newNames.push(generateBarovianFemale(nameType)[0]);
    }

    setNames([...newNames, ...names]);
  }

  return (
    <div >
      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12} order={{ md: 1, sm: 2, xs: 2 }}>
          <TableContainer component={Paper}>
            <Table style={{ width: '100%' }}>
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
        <Grid item md={4} sm={12} xs={12} order={{ md: 2, sm: 1, xs: 1 }}>
          <Paper style={styles.papper}>
            <FormControl fullWidth style={{ marginBottom: "20px" }}>
              <InputLabel id="name-type-label">Name Type</InputLabel>
              <Select labelId="name-type-label" value={nameType} label="Name Type" onChange={onNameTypeChange} >
                <MenuItem value={NameType.Barovian}>{NameType.Barovian}</MenuItem>
                <MenuItem value={NameType.Vistani}>{NameType.Vistani}</MenuItem>
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
