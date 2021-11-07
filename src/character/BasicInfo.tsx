import { Box, Grid } from "@mui/material";
import { useStyles } from "./styles";

export interface BasicInfoProps {
  classAndLevel: string;
  race: string;
  background: string;
  alignment: string;
  playerName: string;
  xp: string;
  charName: string
  setClassAndLevel: (str: string) => void;
  setPlayerName: (str: string) => void;
  setAlignment: (str: string) => void;
  setBackground: (str: string) => void;
  setRace: (str: string) => void;
  setXp: (str: string) => void;
  setCharName: (str: string) => void;

}

const BasicInfo = (props: BasicInfoProps) => {

  const classes = useStyles();
  const { classAndLevel, race, background, alignment, playerName, xp, charName,
    setClassAndLevel, setPlayerName, setAlignment, setBackground, setRace, setXp, setCharName } = props;

  const onXpChange = (e: React.ChangeEvent<HTMLInputElement>) => setXp(e.target.value)
  const onPlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)
  const onAlignmentChange = (e: React.ChangeEvent<HTMLInputElement>) => setAlignment(e.target.value)
  const onBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => setBackground(e.target.value)
  const onRaceChange = (e: React.ChangeEvent<HTMLInputElement>) => setRace(e.target.value)
  const onClassAndLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => setClassAndLevel(e.target.value)
  const onCharNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharName(e.target.value)

  return <Box className={classes.container}>
    <Grid container>
      <Grid item md={5}>
        <Box className={classes.charNameContainer}>
          <input type="text" className={classes.charNameInput} onChange={onCharNameChange} value={charName} />
          Character's Name
        </Box>
      </Grid>
      <Grid item md={7} >
        <Grid container className={`${classes.border}`}>
          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onClassAndLevelChange} value={classAndLevel} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Class & Level
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onBackgroundChange} value={background} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Background
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onPlayerNameChange} value={playerName} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Player Name
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onRaceChange} value={race} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Race
          </Grid>


          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onAlignmentChange} value={alignment} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Alignment
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" onChange={onXpChange} value={xp} className={`${classes.skillInput} ${classes.fullWidth}`} />
            Experience Points
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  </Box>


}

export default BasicInfo;