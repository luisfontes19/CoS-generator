import { Box, Tab, Tabs } from '@mui/material';
import React, { useEffect } from 'react';
import { TabPanel } from './components/TabPanel';
import CreateEncounter from './encounters/CreateEncounter';
import Encounters from './encounters/Encounters';
import FortunesOfRavenloft from './FortunesOfRavenloft';
import Names from './names/Names';

const App = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  useEffect(() => {
    window.addEventListener("beforeunload", (evt) => {
      evt.preventDefault();
      return evt.returnValue = 'Are you sure you want to close?';
    });
  }, [])

  return (
    <div className="App">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Encounter Generator" />
          <Tab label="Name Generator" />
          <Tab label="Fortunes Of Ravenloft" />
          <Tab label="Create Encounter" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Encounters />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Names />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FortunesOfRavenloft />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CreateEncounter />
      </TabPanel>
    </div>
  );
}

export default App;
