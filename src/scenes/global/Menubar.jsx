import React from "react";
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const drawerWidth = 240;

const Menubar = () => {
  const itemList = [
    {
      text: "Updates",
      icon: <NotificationsOutlinedIcon />,
    },
    {
      text: "General",
      icon: <SettingsOutlinedIcon />,
    },
    {
      text: "Explore",
      icon: <ExploreOutlinedIcon />,
    },
  ];

  const itemList2 = [
    {
      text: "Storefront",
      icon: <StorefrontOutlinedIcon />,
    },
    {
      text: "Teams",
      icon: <PeopleAltOutlinedIcon />,
    },
    {
      text: "Marketing",
      icon: <CampaignOutlinedIcon />,
    },
    {
      text: "SupplyDock",
      icon: <DirectionsBoatOutlinedIcon />,
    },
    {
      text: "Docs",
      icon: <DescriptionOutlinedIcon />,
    },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        height: "100vh",
        flexDirection: "column",
        flexShrink: 1,
        justifyContent: "space-between",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
    >
      <Box
        display="flex"
        flexDirection ="column"
        justifyContent="space-between"
        flexGrow = "1"
        flexShrink = "1"
        flexBasis = "0%"
      >
        <div>
          <Toolbar />
          <Divider />
          <List>
            {itemList.map((item) => {
              const { text, icon } = item;
              return (
                <ListItem key={text}>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Typography
            variant="h5"
            color="#29ab87"
            textAlign="left"
            sx={{ paddingTop: 2, paddingBottom: 2, paddingLeft: 3 }}
          >
            Workstation
          </Typography>
          <List>
            {itemList2.map((item) => {
              const { text, icon } = item;
              return (
                <ListItem key={text}>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
        
        <div>
          <Divider />
          <Toolbar />
        </div>
      </Box>
    </Drawer>
  );
};

export default Menubar;
