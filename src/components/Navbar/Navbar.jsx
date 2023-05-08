import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <AppBar
        expand="lg"
        className="my-nav"
        sticky="top"
        sx={{ backgroundColor: "#f44336" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <a
              href="https://www.purina.com/"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="https://www.purina.com/sites/default/files/new-logo1.png"
                alt="Logo de Purina"
                height="50"
              />
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 600, marginRight: 1 }}
            >
              Offer
            </Button>
            <div style={{ height: 24, borderLeft: "1px solid white" }} />
            <Button
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 600, marginLeft: 1, marginRight: 1 }}
            >
              News
            </Button>
            <div style={{ height: 24, borderLeft: "1px solid white" }} />
            <Button
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 600, marginLeft: 1, marginRight: 1 }}
            >
              Careers
            </Button>
            <div style={{ height: 24, borderLeft: "1px solid white" }} />
            <Button
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 600, marginLeft: 1 }}
            >
              Contact Us
            </Button>
          </div>
        </Toolbar>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <Button
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 600, marginRight: 5 }}
            >
              Dog Products
            </Button>

            <Button
                variant="text"
                color="inherit"
                sx={{ textTransform: "none", fontWeight: 600, marginRight: 5 }}
            >
                Cat Products
            </Button>

            <Button
                variant="text"
                color="inherit"
                sx={{ textTransform: "none", fontWeight: 600, marginRight: 5 }}
                >
                Where To Buy
            </Button>

            <Button
                variant="text"
                color="inherit"
                sx={{ textTransform: "none", fontWeight: 600, marginRight: 5 }}
                >
                Choosing A Pet
            </Button>

            <Button
                variant="text"
                color="inherit"
                sx={{ textTransform: "none", fontWeight: 600, marginRight: 5 }}
                >
                Why Purina
            </Button>

            <Button
                variant="text"
                color="inherit"
                sx={{ textTransform: "none", fontWeight: 600, marginRight: 5 }}
                >
                Pet Care
            </Button>
            <Button
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 600, marginLeft: 16, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              Search...⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            </Button>
          </div>
      </AppBar>
    </div>
  );
};

export default Navbar;