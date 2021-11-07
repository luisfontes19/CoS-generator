import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SaveIcon from '@mui/icons-material/Save';
import { AppBar, Box, Card, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CharacterSheet from "./CaracterSheet";
import { DefaultChar } from "./DefaultChar";
import { useStyles } from "./styles";
import { ICharacter } from "./Types";
import { download } from './utils';

const Character = () => {

  const classes = useStyles();

  const [char, setChar] = useState<ICharacter>(DefaultChar);
  const [chars, setChars] = useState<Record<string, ICharacter>>({})

  useEffect(() => setCharsFromLocalStorage(), [])

  const setCharsFromLocalStorage = () => setChars(getCharsFromLocalStorage())

  const getCharsFromLocalStorage = () => {
    let chars;
    try {
      chars = JSON.parse(localStorage.getItem('characters') || '{}');
    }
    catch {
      chars = {}
    }

    return chars;
  }

  const onNewCharClick = () => setChar(DefaultChar)

  const saveOnLocalStorageClick = () => {
    const chars = getCharsFromLocalStorage();

    let serializingChar = char
    if (!char.id) {
      serializingChar = char;
      serializingChar.id = Math.random().toString(36).substring(2, 15);
    }

    chars[serializingChar.id!] = serializingChar;
    setChar(serializingChar);
    localStorage.setItem('characters', JSON.stringify(chars));

    setCharsFromLocalStorage();
  }

  const backupChar = () => download(JSON.stringify(char), 'character.json');
  const backupAll = () => download(JSON.stringify(getCharsFromLocalStorage()), 'characters.json');

  const charOptions = <div>
    <IconButton onClick={window.print}><PictureAsPdfIcon /></IconButton>
    <Tooltip title="Download"><IconButton onClick={backupChar} ><DownloadIcon /></IconButton></Tooltip>
    <Tooltip title="Delete"><IconButton ><DeleteForeverIcon /></IconButton></Tooltip>
  </div>

  const showChart = (char: ICharacter) => () => setChar(char)

  return (
    <div style={{ display: "flex" }}>

      <div style={{ width: "1124px", backgroundColor: "#FFF" }} className="sheetContainer">
        <CharacterSheet character={char} setCharacter={setChar} />
      </div>

      <div id="charMenu" style={{ flexGrow: 1, padding: "20px", paddingTop: "0px" }}>
        <Card variant="outlined">
          <AppBar position="static" >
            <Toolbar >
              <Tooltip title="New Char"><IconButton color="inherit" onClick={onNewCharClick}><AddCircleOutlineIcon /></IconButton></Tooltip>
              <IconButton color="inherit" onClick={window.print}><PictureAsPdfIcon /> </IconButton>
              <Tooltip title="Save on localstorage"><IconButton color="inherit" onClick={saveOnLocalStorageClick}><SaveIcon /></IconButton></Tooltip>
              <Tooltip title="Download all chars"><IconButton color="inherit" onClick={backupAll}><DownloadIcon /> </IconButton></Tooltip>
            </Toolbar>
          </AppBar>
          <Box className={classes.container}>
            <Typography variant="h3">Saved Chars</Typography>
            {
              <List sx={{ width: '100%', }}>
                {Object.keys(chars).map((k, index) => {
                  const c = chars[k];
                  return <ListItemButton onClick={showChart(chars[k])} ><ListItem key={index} disableGutters secondaryAction={charOptions}>
                    <ListItemText primary={c.charName} secondary={`${c.race} - ${c.classAndLevel}`} />
                  </ListItem>
                  </ListItemButton>
                })}
              </List>
            }
          </Box>
        </Card>
      </div >

    </div >
  );
}

export default Character;
