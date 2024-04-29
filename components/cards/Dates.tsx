import { ArrowForwardIos } from "@mui/icons-material";
import { Theme } from "@mui/system";
import { Box } from "@mui/material";

const rootStyle = (theme: Theme) => {
  return {
    borderRadius: 5,
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0px 20px",
    },
    textAlign: "center",
    color: theme.palette.text.primary,
  }

}
const detailsStyle = () => {
  return {
    display: "grid",
    gridTemplateColumns: "40% 20% 40%",
    padding: 5,
    marginTop: 5,
  }
}


interface SnapShotInterface {
  from?: string;
  to?: string;
}

const SnapShot = ({ from, to }: SnapShotInterface): any => {

  return (
    <Box sx={rootStyle}>
      <Box sx={detailsStyle}>
        <Box>
          <Box>{from}</Box>
        </Box>
        <Box style={{ margin: "auto" }}>
          <ArrowForwardIos color="secondary" />
        </Box>
        <Box>
          <Box>{to}</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SnapShot;
