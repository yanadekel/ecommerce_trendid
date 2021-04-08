import Logo from './Logo';
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import {
  Container, AppBar, Toolbar, IconButton, Badge, Typography,Button
} from "@material-ui/core";



export default function Header({ basketItems, totalCost }) {
  const location = useLocation();
  return (<>
    <AppBar position="fixed" className="custom-navbar">
      <Container className="app-header" style={{ maxWidth: "none" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="leftSideHeader">
            <Typography component={Link} to="/" variant="h6" className="custom-title" color="primary">
              <Logo />
            </Typography>
          </div>
          <div className="centerHeader">
            <Button component={Link} to="/trends" size="large" className="custom-button">
              Explore Trends
            </Button>
          </div>
          <div className="rightSideHeader">
            {location.pathname === "/basket" ?
              (<div className="basket-wrapper">
                <h2>
                  Total cost: <strong style={{color:"black"}}>{totalCost}</strong>
                </h2>
              </div>
              ) : (
                <div className="basket-wrapper">
                  <IconButton component={Link} to="/basket" aria-label="Show basket contents" color="inherit">
                    <Badge badgeContent={basketItems} color="secondary">
                      <ShoppingCart className="custom-basket" />
                    </Badge>
                  </IconButton>
                </div>)}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  </>
  )
}
