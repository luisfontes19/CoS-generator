
import { Box } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

interface BorderedTextAreaProps {
  value: any;
  setValue: (v: any) => void;
  label: string;
  height?: string;
  boxProps?: any;
}

const BorderedTextArea = (props: BorderedTextAreaProps) => {

  const classes = useStyles();
  const { value, setValue, label, height, boxProps } = props;

  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)

  return <Box className={classes.border} textAlign="center" mb={2} {...boxProps}>
    <textarea onChange={onValueChange} className={classes.textArea} style={{ height: height || "75px" }}>{value}</textarea>
    {label}
  </Box>

};

export default BorderedTextArea;