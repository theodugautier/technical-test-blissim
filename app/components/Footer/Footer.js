import { withStyles, Typography } from '@material-ui/core'

const useStyles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

const Footer = props => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}SuperSite{new Date().getFullYear()}{'.'}
      </Typography>
    </footer>
  )
};

export default withStyles(useStyles)(Footer)
