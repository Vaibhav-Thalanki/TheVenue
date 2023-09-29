import React from "react";
import { Drawer, List, ListItem } from "@mui/material";
import {scroller} from 'react-scroll'

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "To Top" },
    { where: "venuenfo", value: "Venue NFO" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];
  function scrollToElement(element){
scroller.scrollTo(element,{
  duration:1000,
  delay:100,
  smooth:true,
offset: -150,
})
  }
  function renderItem(item) {
    return (
      <ListItem
        button
        onClick={() => {
          scrollToElement(item.where);
          props.toggleDrawer(false)
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
