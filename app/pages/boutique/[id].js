import { useRouter } from "next/router";
import DefaultLayout from '../../components/DefaultLayout'
import { withStyles, Container, CardMedia, Grid, Typography } from '@material-ui/core'

const useStyles = theme => ({
  root: {marginBottom: theme.spacing(3)},
  h1: {
      margin: theme.spacing(5, 0)
  },
  filterTitle: {
      backgroundColor: theme.palette.primary,
      color: theme.palette.light
  },
  filterListItem: {
      paddingLeft: 0,
  },
  image: {
    width: '100%',
    height: 'auto',
    margin: 'auto',
  },
});

const BoutiqueShow = (props) => {
  const { classes, product } = props

  const router = useRouter();

  return (
    <DefaultLayout>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justify={'center'}>
            <Grid item xs={8} >
                <Typography variant="h4" component="h1" className={classes.h1}>{product.title}</Typography>
                <Typography variant="p" component="body1">{product.description}</Typography>
            </Grid>
            <Grid item xs={4} >
              <CardMedia
                component="img"
                alt={product.title}
                image={product.image}
                className={classes.image}
                title="Contemplative Reptile"
              />
            </Grid>
        </Grid>
      </Container>

    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()

  console.log(product)

  return {
    props: {
      product,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export default withStyles(useStyles)(BoutiqueShow)