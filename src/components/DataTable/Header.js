import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Manager Users
        </Typography>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
