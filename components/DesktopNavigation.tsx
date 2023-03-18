import {
  Drawer,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NextLinkComposed } from "utils/Link";
import { useRouter } from "next/router";

import GridViewIcon from "@mui/icons-material/GridView";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

function DesktopNavigation() {
  const router = useRouter();
  const pathname = router.pathname;

  const navLinks = [
    { name: "Dashboard", url: "/", icon: <GridViewIcon /> },
    { name: "Property", url: "/property", icon: <ApartmentIcon /> },
    { name: "Agent", url: "/agent", icon: <PeopleAltOutlinedIcon /> },
    {
      name: "Review",
      url: "/review",
      icon: <StarBorderPurple500RoundedIcon />,
    },
    { name: "My Profile", url: "/profile", icon: <PermIdentityRoundedIcon /> },
  ];
  return (
    <Drawer
      sx={{
        width: "250px",
        flexShrink: 0,
        display: {
          xs: "none",
          lg: "block",
        },
        "& .MuiDrawer-paper": {
          width: "250px",
          boxSizing: "border-box",
          zIndex: 1000,
          backgroundColor: "cardBg",
          border: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Makes sure fixed Appbar is not on top of another element */}
      <Box sx={{ py: "0.5rem" }}>
        <Toolbar />
      </Box>

      <List
        sx={{
          px: "1rem",
          py: "1.5rem",
          "& .MuiListItem-root": {
            borderRadius: "0.75rem",
            overflow: "hidden",
            marginBottom: "0.25rem",
          },
          "& .MuiListItemButton-root": { py: "0.75rem", px: "1.5rem" },
          "& .MuiListItemIcon-root": {
            minWidth: "auto",
            marginRight: "0.625rem",
          },
        }}
      >
        {navLinks.map((link, index) => (
          <ListItem
            key={`navLink-${index}`}
            sx={{
              backgroundColor:
                pathname === link.url ? "primary.main" : "transparent",
              "& .MuiListItemText-primary, & .MuiListItemIcon-root": {
                color: pathname === link.url ? "#FCFCFC" : "textSecondary.main",
              },
              "& .MuiListItemText-primary": {
                fontSize: "0.875rem !important",
                fontWeight: "700",
              },
            }}
            disablePadding
          >
            <ListItemButton component={NextLinkComposed} to={link.url}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default DesktopNavigation;
