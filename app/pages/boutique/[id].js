import { useRouter } from "next/router";
import DefaultLayout from '../../components/DefaultLayout'
import GlobalContext from "../../state/global-context";
import { withStyles, Button, Container, CardMedia, Grid, Typography } from '@material-ui/core'
import { useContext } from "react";
import Head from 'next/head'

const useStyles = theme => ({
  h1: {
    margin: theme.spacing(5, 0)
  },
  filterListItem: {
    paddingLeft: 0,
  },
  image: {
    width: '70%',
    marginTop: "40px",
    height: 'auto',
    margin: 'auto'
  },
  price: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: "10px 30px",
    marginTop: "20px",
    display: 'inline-block'
  }
});

const BoutiqueShow = (props) => {
  const { classes, product } = props
  const context = useContext(GlobalContext);

  const handleAddToCart = (e, product) => {
    context.addProductToCart(product, context.pushObject('open_interstitial', true))
  }

  const router = useRouter();

  return (
    <DefaultLayout>
      <Head>
        <title>{product.title} - Super Shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${product.title} est en vente sur supershop comme bien d'autres produits`} />
      </Head>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justify={'center'}>
          <Grid item xs={4} >
            <CardMedia
              component="img"
              alt={product.title}
              image={product.image}
              className={classes.image}
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" className={classes.h1}>{product.title}</Typography>
            <Typography variant="body1" component="p" className="red">{product.description}</Typography>
            <Typography variant="h3" component="span" className={classes.price}>{product.price} $</Typography>
            <Button variant="contained" color="secondary" onClick={e => handleAddToCart(e, product)} component="a">
              Acheter
            </Button>
          </Grid>
        </Grid>
      </Container>

    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()

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
