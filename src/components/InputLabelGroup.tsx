import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { ChangeEventHandler } from "react";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    marginBottom: "5px",
  },
  input: {
    textAlign: "center",
    border: "3px solid #000",
    width: "50px",
    height: "50px",
    fontSize: "25px",
    borderRadius: "50px",
    zIndex: 2
  },
  label: {
    border: "3px solid #000",
    width: "100%",
    height: "40px",
    margin: "auto",
    textAlign: "center",
    paddingTop: "8px",
    textTransform: "uppercase",
    fontSize: "13px",
    zIndex: 1,
    marginLeft: "-10px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
}))


interface InputLabelGroup {
  label: string,
  value: any,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputLabelGroup = (props: InputLabelGroup) => {
  const classes = useStyles();
  const { label, value, onChange } = props;

  return <Box className={classes.container}>
    <input type="text" className={classes.input} value={value} onChange={onChange} />
    <div className={classes.label}>{label}</div>
  </Box>
}

export default InputLabelGroup;