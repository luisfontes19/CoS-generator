import { Box, Grid } from "@mui/material";
import { useStyles } from "./styles";
import { CharacterProps } from "./Types";

const SpellsHeader = (props: CharacterProps) => {

  const classes = useStyles();
  const { character, setCharacter } = props;

  const onXpChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, xp: e.target.value })
  const onPlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, playerName: e.target.value })
  const onAlignmentChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, alignment: e.target.value })
  const onBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, background: e.target.value })
  const onRaceChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, race: e.target.value })
  const onClassAndLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, classAndLevel: e.target.value })
  const onCharNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacter({ ...character, charName: e.target.value })

  return <Box className={classes.container} style={{ marginBottom: '0px' }}>
    <Grid container>
      <Grid item md={5}>
        <Box className={classes.charNameContainer}>
          <input type="text" className={classes.charNameInput} />
          Spellcasting Class
        </Box>
      </Grid>
      <Grid item md={7} >
        <Grid container className={`${classes.border}`}>
          <Grid item md={4} className={classes.gridItem}>
            <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} />
            SpellCasting Ability
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} />
            Spell Save DC
          </Grid>

          <Grid item md={4} className={classes.gridItem}>
            <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} />
            Spell Attack Bonus
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  </Box>


}

export default SpellsHeader;