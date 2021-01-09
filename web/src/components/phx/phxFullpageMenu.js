import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/CancelOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    link: {
      transition: "all .4s",
      padding: "0px 10px",
      textDecoration: "none"
    }
  };
});

const thisStyles = {
  menuContainer: {
    transition: "all .4s",
    position: "absolute",
    top: 0,
    left: "-100vw",
    backgroundColor: "rgba(0,0,0, 0.9)",
    width: "100vw",
    minHeight: "100vh",
    backdropFilter: "blur(3px)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default function PhxFullpageMenu(props) {
  const { navMenuItems } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false
  });

  const toggleMenu = open => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, open: !state.open });
  };

  return (
    <React.Fragment key={"anchor"}>
      <IconButton onClick={toggleMenu()} style={{ color: "white" }}>
        <MenuIcon />
      </IconButton>


        <div style={thisStyles.menuContainer}  style={Object.assign({}, {...thisStyles.menuContainer}, state.open && { left: 0 } )  }>
          <div style={thisStyles.closeButton}>
            <IconButton onClick={toggleMenu()} style={{ color: "white" }}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="text-5xl md:text-6xl pb-8" style={thisStyles.itemsContainer}>
            {navMenuItems.length > 0 ?
              navMenuItems.map(item => {
                return (
                  <a className={classes.link} href={item.route ? item.route : item.link}>
                    {item.title}
                  </a>
                );
              }) : <div className="text-base text-center px-8">Seem like there are no items in your menu... Either you just have to add some items to your menu in the dashboard or this is broken for some reason.</div>}
          </div>
        </div>

    </React.Fragment>
  );
}
