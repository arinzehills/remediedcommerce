import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "50px",
    top: "52%",
    left: "8.5%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "30px",
  },
}));
