import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

export default function ButtonAppBar() {
  const { root } = useStyles();

  return <div className={root}></div>;
}
