import { withStyles, AppBar, Toolbar, Typography, IconButton, Container } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Link from 'next/link'
import Interstitial from '../Interstitial'
import { useContext, useState } from "react";
import GlobalContext from "../../state/global-context";

const useStyles = theme => ({
  root: {
    position: "fixed",
    width: "100%",
    top: '0px',
    zIndex: "9"
  },
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  cartIcon: {
    color: theme.palette.light,
  }
});

const Header = props => {
  const { classes } = props
  const context = useContext(GlobalContext);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    context.pushObject('open_interstitial', true);
  };

  return (
    <>
      <header className={classes.root}>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Link href="/" passHref>
                <a>
                  <Typography variant="h4" className={classes.title}>
                    SuperShop
                                </Typography>
                </a>
              </Link>
              <IconButton onClick={toggleDrawer(!context.open_interstitial)}>
                <ShoppingBasketIcon className={classes.cartIcon} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Interstitial />
    </>
  )
}

export default withStyles(useStyles)(Header)
