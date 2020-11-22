import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import SettingsPower from "@material-ui/icons/SettingsPower";
import { blue } from "@material-ui/core/colors";

const blue600 = blue["900"];
const drawerWidth = 250;

const styles = {
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(227, 231, 232, 0.63)",
    overflow: "auto",
  },
  avatarDiv: {
    padding: "5px" as TODO,
    backgroundColor: "silver",
  },
  avatarIcon: {
    float: "left" as TODO,
    display: "block" as TODO,
    marginRight: 15,
    boxShadow: "0px 0px 0px 8px rgba(0,0,0,0.2)" as TODO,
  },
  avatarSpan: {
    paddingTop: 0,
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    color: "purple",
    fontWeight: 400,
    fontSize: 19,
    textShadow: "1px 1px #444",
  },
  user: {
    fontSize: 22,
    color: "black",
  },
  menuItem: {
    color: blue600,
    fontWeight: 500,
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    fontSize: 16,
  },
};

interface AppUserMenuProps {
  username: string;
  onSignoutClick: () => void;
  onChangePassClick: () => void;
}

export default function AppUserMenu<AppUserMenuProps>({
  username,
  onSignoutClick,
  onChangePassClick,
}) {
  
  const signoutClick = (event: React.ChangeEvent<unknown>) => {
    event.preventDefault();
    onSignoutClick();
  };

  return (
    <div style={styles.avatarDiv}>
      {/* <Avatar
        src={require("../assets/img/avatar0.png")}
        style={styles.avatarIcon}
      /> */}
      <div style={styles.avatarSpan}>
        <Typography style={styles.user} variant="inherit">
          {username}
        </Typography>

        <IconButton onClick={signoutClick}>
          <SettingsPower />
        </IconButton>
      </div>
    </div>
  );
}
