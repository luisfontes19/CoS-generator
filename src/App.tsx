import { Box, createTheme, CssBaseline, Tab, Tabs, ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React, { useEffect } from 'react';
import "./App.css";
import Character from './character/Character';
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

  const theme = createTheme({
    palette: {
      //mode: 'dark',
      primary: {
        main: "#3f51b5"
      }

    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <AppBar position="static" className="appBar">
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile indicatorColor="secondary" textColor="inherit">
              <Tab label="Encounter Generator" />
              <Tab label="Name Generator" />
              <Tab label="Fortunes Of Ravenloft" />
              <Tab label="Create Encounter" />
              <Tab label="Character sheet" />
            </Tabs>
          </AppBar>
        </Box>
        <TabPanel value={value} index={0}><Encounters /></TabPanel>
        <TabPanel value={value} index={1}><Names /></TabPanel>
        <TabPanel value={value} index={2}><FortunesOfRavenloft /></TabPanel>
        <TabPanel value={value} index={3}><CreateEncounter /></TabPanel>
        <TabPanel value={value} index={4}><Character /></TabPanel>
      </div>
    </ThemeProvider>
  );
}

export default App;
