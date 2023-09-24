import React from "react";
import { Drawer, List, ListItem } from "@mui/material";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "To Top" },
    { where: "venuenfo", value: "Venue NFO" },
    { where: "Highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];
  function renderItem(item) {
    return (
      <ListItem
        button
        onClick={() => {
          alert(item.where);
        }}
        key={item.where}
      >
        {item.value}
      </ListItem>
    );
  }
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.toggleDrawer(false)}
    >
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;
