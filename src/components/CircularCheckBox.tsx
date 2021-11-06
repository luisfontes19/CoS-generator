import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Checkbox, CheckboxProps } from '@mui/material';
import React from "react";

const CircularCheckBox = (props: CheckboxProps) => {
  return <Checkbox  {...props} icon={<CircleOutlinedIcon />} checkedIcon={<CircleIcon />} size="small" style={{ padding: "0px" }} />
}

export default CircularCheckBox;