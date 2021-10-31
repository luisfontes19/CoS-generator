import { Button, styled } from '@mui/material';

interface IFeatureButtonProps {
  text: string,
  icon: string,
  onClick: () => void
}

const FeatureButton = (props: IFeatureButtonProps) => {

  const { text, icon, onClick } = props;

  const CustomButton = styled(Button)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: "50px"
    },
    [theme.breakpoints.down('md')]: {
      height: "150px"
    }
  }));

  return (
    <CustomButton onClick={onClick} variant="contained" >
      <img src={icon} />
      {text}
    </CustomButton>
  );
}

export default FeatureButton;
