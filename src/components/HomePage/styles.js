import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: "160px",
  },
  h1: {
    color: "red",
  },
  p: {
    color: "red",
  },

  red: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    "&:hover": {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginRight: "10px",
    position: "absolute",
    top: "72%",
    left: "30.5%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "30px",
  },
  [theme.breakpoints.up("lg")]: {
    red: {
      left: "8.5%",
      top: "52%",
    },
  },
}));
export default useStyles;
