import { makeStyles } from "@mui/styles";

export const hiddenInput: any = {
  textAlign: "center",
  border: "none",
  backgroundColor: "transparent",
}

export const useStyles = makeStyles(() => ({
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
    fontSize: "13px",
  },
  skillInput: {
    ...hiddenInput,
    borderBottom: "1px solid #000",
    width: "30px",
    height: "20px",
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
    border: "none",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    padding: "10px",
    resize: "none"
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
    ...hiddenInput,
    borderBottom: "1px solid #000",
    width: "100%",
    height: "50px",
    marginLeft: "5px",
    marginRight: "5px",
    fontSize: "50px"
  },
  attackInput: {
    ...hiddenInput,
    backgroundColor: "#DDD",
    borderRadius: "5px",
    height: "30px",
    width: "100%",
    marginBottom: "3px",
    textAlign: "left",
    marginRight: "3px"
  }




}));