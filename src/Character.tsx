import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import CircularCheckBox from "./components/CircularCheckBox";
import InputLabelGroup from "./components/InputLabelGroup";



const hiddenInput: any = {
  textAlign: "center",
  border: "none",
}

const useStyles = makeStyles(() => ({
  gridItem: {
    padding: "10px"
  },
  border: {
    borderRadius: "10px",
    border: "3px solid #000",
    backgroundColor: "#FFF",
  },
  bgContainer: {
    backgroundColor: "#DDD",
    borderRadius: "10px",
  },
  abilityContainer: {
    padding: "10px",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "10px",
    textTransform: "uppercase"
  },
  abilityBox: {
    height: "100px",
    marginBottom: "30px",
  },
  abilityScoreBox: {
    width: "50px",
    fontSize: "18px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "8px",
    textAlign: "center",
    borderRadius: "100% / 90%"
  },
  abilityModifierInput: {
    ...hiddenInput,
    height: "60px",
    width: "100%",
    fontSize: "30px",
  },
  // inspirationContainer: {
  //   display: "flex",
  //   marginBottom: "10px",
  // },
  // inspirationInput: {
  //   ...hiddenInput,
  //   border: "3px solid #000",
  //   width: "60px",
  //   height: "60px",
  //   fontSize: "30px",
  // },
  // inspirationLabel: {
  //   border: "3px solid #000",
  //   borderLeft: "none",
  //   width: "100%",
  //   height: "40px",
  //   margin: "auto",
  //   textAlign: "center",
  //   paddingTop: "5px",
  //   textTransform: "uppercase",
  //   fontSize: "13px",
  // },

  container: {
    textAlign: "center",
    marginBottom: "10px",
    padding: "10px"
  },
  skill: {
    display: "flex",
    fontSize: "14px"
  },
  skillInput: {
    border: "none",
    borderBottom: "1px solid #000",
    width: "30px",
    backgroundColor: "transparent",
    height: "20px",
    textAlign: "center",
    marginLeft: "5px",
    marginRight: "5px",
  },
  centerContainer: {
    padding: "20px",
    marginBottom: "20px"
  },
  centerContainerFirstRow: {
    display: "flex",
    textAlign: "center"
  },
  centerfirstRowItem: {
    margin: "10px"
  },
  textArea: {
    width: "100%",
    height: "70px",
    border: "none",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    padding: "10px"
  },
  attackField: {
    padding: "5px",
    marginBottom: "5px"
  },
  fullWidth: {
    width: "100% !important",
  },
  charNameContainer: {
    padding: "30px"
  },
  charNameInput: {
    border: "none",
    borderBottom: "1px solid #000",
    width: "100%",
    backgroundColor: "transparent",
    height: "50px",
    marginLeft: "5px",
    marginRight: "5px",
    textAlign: "center",
    fontSize: "50px"
  }




}));

const Character = () => {

  const classes = useStyles();


  const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
  const skills: Record<string, string> = { "Acrobatics": "Dex", "Animal Handling": "Wis", "Arcana": "Int", "Athletics": "Str", "Deception": "Cha", "History": "Int", "Insight": "Wis", "Intimidation": "Cha", "Investigation": "Int", "Medicine": "Wis", "Nature": "Int", "Perception": "Wis", "Performance": "Cha", "Persuasion": "Cha", "Religion": "Int", "Sleight of Hand": "Dex", "Stealth": "Dex", "Survival": "Wis" };

  const abilityBox = (ability: string, index: number) => {
    return (
      <Box key={index} className={`${classes.border} ${classes.abilityBox}`}>
        {ability}
        <input type="text" className={classes.abilityModifierInput} />
        <input type="text" className={classes.abilityScoreBox} value="12" />
      </Box>
    )
  }

  const skill = (ability: string, index: number) => {
    return (
      <Box key={index} className={classes.skill}>
        <CircularCheckBox />
        <input type="text" className={classes.skillInput} />
        {ability} {skill}
      </Box>
    )
  }


  return (
    <Container fixed style={{ backgroundColor: "#FFF" }} className="sheetContainer">
      <Box sx={{ width: '100%' }}>
        <Box className={classes.container}>
          <Grid container>
            <Grid item md={5}>
              <Box className={classes.charNameContainer}>
                <input type="text" className={classes.charNameInput} />
                Character's Name
              </Box>
            </Grid>
            <Grid item md={7} >
              <Grid container className={`${classes.border}`}>
                <Grid item md={4} className={classes.gridItem}>
                  <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} />Class & Level
                </Grid>

                <Grid item md={4} className={classes.gridItem}>
                  <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} />Race
                </Grid>

                <Grid item md={4} className={classes.gridItem}>
                  <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} /> Background
                </Grid>

                <Grid item md={4} className={classes.gridItem}>
                  <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} />Alignment
                </Grid>

                <Grid item md={4} className={classes.gridItem}>
                  <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} />Player Name
                </Grid>

                <Grid item md={4} className={classes.gridItem}>
                  <input type="text" className={`${classes.skillInput} ${classes.fullWidth}`} />Experience Points
                </Grid>
              </Grid>
            </Grid>
          </Grid >
        </Box>

        <Grid container spacing={2}>
          <Grid className={classes.gridItem} item md={4} >
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Box className={`${classes.abilityContainer} ${classes.bgContainer}`}>
                  {abilities.map((ability, index) => abilityBox(ability, index))}
                </Box>
              </Grid>
              <Grid item md={8}>
                <InputLabelGroup label="Inspiration" onChange={() => { }} value="" />

                <InputLabelGroup label="Proficiency Bonus" onChange={() => { }} value="" />

                <Box className={`${classes.border} ${classes.container}`}>
                  {abilities.map((ability, index) => skill(ability, index))}
                  <br />
                  Saving Throws
                </Box>

                <Box className={`${classes.border} ${classes.container}`}>
                  {Object.keys(skills).map((s, index) => skill(`${s} (${skills[s]})`, index))}
                  <br />
                  Skills
                </Box>

              </Grid>
            </Grid>

            <InputLabelGroup label="Passive Perception" onChange={() => { }} value="" />

            <Box className={classes.border} textAlign="center" mb={2}>
              <textarea className={classes.textArea} style={{ height: "450px" }}>asd</textarea>
              Other Proficiencies & Languages
            </Box>

          </Grid>
          <Grid className={classes.gridItem} item md={4}>
            <Box className={`${classes.bgContainer} ${classes.centerContainer}`}>
              <Box className={classes.centerContainerFirstRow}>
                <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
                  <input type="text" className={classes.abilityModifierInput} />
                  AC
                </div>

                <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
                  <input type="text" className={classes.abilityModifierInput} />
                  Initiative
                </div>

                <div className={`${classes.border} ${classes.centerfirstRowItem}`}>
                  <input type="text" className={classes.abilityModifierInput} />
                  Speed
                </div>
              </Box>

              <Box className={classes.border} textAlign="center" mb={2}>
                Hit Point Maximum <input type="text" className={classes.skillInput} style={{ width: "auto" }} />
                <textarea className={classes.textArea}>asd</textarea>
                Current Hit Points
              </Box>

              <Box className={classes.border} textAlign="center" mb={2}>
                <textarea className={classes.textArea}>asd</textarea>
                Temporary Hit Points
              </Box>

              <Grid container spacing={2}>
                <Grid item md={6}>
                  <Box className={classes.border} textAlign="center" mb={2}>
                    {/* TODO: fix size of input and text area*/}
                    Total <input type="text" className={classes.skillInput} style={{ width: "90px" }} />
                    <textarea className={classes.textArea} style={{ height: "33px" }}>asd</textarea>
                    Hit Dice
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className={classes.border} textAlign="right" mb={2} p={1} pt={1}>
                    <b>Success</b> <CircularCheckBox /><CircularCheckBox /><CircularCheckBox />
                    <b>Failure</b> <CircularCheckBox /><CircularCheckBox /><CircularCheckBox />
                    <Box textAlign="center">
                      Death Saves
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={`${classes.border} ${classes.container}`} fontSize="12px">
              <Box textAlign="left">
                <Grid container spacing={2}>
                  <Grid item md={5}>
                    Name
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                  </Grid>
                  <Grid item md={2}>
                    Bonus
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                  </Grid>
                  <Grid item md={5}>
                    Damage/Type
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                    <Box className={`${classes.bgContainer} ${classes.attackField}`}> a</Box>
                  </Grid>
                </Grid>
                <textarea className={classes.textArea} style={{ height: "148px" }} >asd</textarea>
              </Box>
              Attack and Spellcasting Ability
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item md={4} >

            <Box className={`${classes.bgContainer} ${classes.container}`}>
              <Box className={classes.border} textAlign="center" mb={2}>
                <textarea className={classes.textArea}>asd</textarea>
                Personal Traits
              </Box>

              <Box className={classes.border} textAlign="center" mb={2}>
                <textarea className={classes.textArea}>asd</textarea>
                Ideals
              </Box>

              <Box className={classes.border} textAlign="center" mb={2}>
                <textarea className={classes.textArea}>asd</textarea>
                Bonds
              </Box>

              <Box className={classes.border} textAlign="center" mb={2}>
                <textarea className={classes.textArea}>asd</textarea>
                Flaws
              </Box>
            </Box>

            <Box className={`${classes.border} ${classes.container}`} fontSize="12px">
              <Box textAlign="left">
                <textarea className={classes.textArea} style={{ height: "800px" }} >asd</textarea>
              </Box>
              Features & Traits
            </Box>

          </Grid>
        </Grid>
      </Box>
    </Container >
  );
}

export default Character;
