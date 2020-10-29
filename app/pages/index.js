import DefaultLayout from '../components/DefaultLayout'
import { withStyles, Button, Container, Grid, Typography } from '@material-ui/core'
import Link from 'next/link'

const useStyles = theme => ({
  container: {
    marginTop: theme.spacing(5),
    minHeight: "100vh"
  }
});

const Home = props => {
  const { classes } = props
  return (
    <DefaultLayout>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          SuperShop
							</Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely.
				</Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link href="/boutique" passhref>
                <Button variant="contained" component="a">
                  La Boutique
								</Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </DefaultLayout>
  )
}
export default withStyles(useStyles)(Home)
