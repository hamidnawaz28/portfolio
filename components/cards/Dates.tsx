import { makeStyles } from "@mui/styles";
import { ArrowForwardIos } from "@mui/icons-material";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      borderRadius: 5,
      width: "90%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        padding: "0px 20px",
      },
      textAlign: "center",
      color: theme.palette.text.primary,
    },

    details: {
      display: "grid",
      gridTemplateColumns: "40% 20% 40%",
      padding: 5,
      marginTop: 5,
    },
  };
});

interface SnapShotInterface {
  from?: string;
  to?: string;
}

const SnapShot = ({ from, to }: SnapShotInterface) => {
  const { root, details } = useStyles();
  return (
    <div className={root}>
      <div className={details}>
        <div>
          <div>{from}</div>
        </div>
        <div style={{ margin: "auto" }}>
          <ArrowForwardIos color="secondary" />
        </div>
        <div>
          <div>{to}</div>
        </div>
      </div>
    </div>
  );
};
export default SnapShot;
