import { Box, Grid } from "@mui/material";
import { useStyles } from "./styles";
import { CharacterProps } from "./Types";

const BasicInfo = (props: CharacterProps) => {

  const classes = useStyles();
  const { character, setCharacter } = props;

  const onXpChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, xp: e.target.value })
  const onPlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, playerName: e.target.value })
  const onAlignmentChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, alignment: e.target.value })
  const onBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, background: e.target.value })
  const onRaceChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, race: e.target.value })
  const onClassAndLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, classAndLevel: e.target.value })
  const onCharNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, charName: e.target.value })

  return <Box className={classes.container}>
    <Grid container>
      <Grid item md={5}>
        <Box className={classes.charNameContainer}>
          <input type="text" className={classes.charNameInput} onChange={onCharNameChange} value={character.charName} />
          Character's Name
        </Box>
      </Grid>
      <Grid item md={7} >
        <Grid container className={`${classes.border}`}>
          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onClassAndLevelChange} value={character.classAndLevel} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Class & Level
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onBackgroundChange} value={character.background} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Background
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onPlayerNameChange} value={character.playerName} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Player Name
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onRaceChange} value={character.race} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Race
          </Grid>


          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onAlignmentChange} value={character.alignment} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Alignment
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onXpChange} value={character.xp} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Experience Points
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  </Box>


}

export default BasicInfo;