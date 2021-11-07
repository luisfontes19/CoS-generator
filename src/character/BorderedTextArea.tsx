
import { Box } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';
import { BorderedTextAreaProps } from './Types';

const BorderedTextArea = (props: BorderedTextAreaProps) => {

  const classes = useStyles();
  const { character, field, setCharacter, label, boxProps, height } = props;

  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCharacter({ ...character, [field]: e.target.value })

  return <Box className={classes.border} textAlign="center" mb={2} {...boxProps}>
    <textarea onChange={onValueChange} className={classes.textArea} style={{ height: height || "75px" }}>{(character as any)[field]}</textarea>
    {label}
  </Box>
};

export default BorderedTextArea;