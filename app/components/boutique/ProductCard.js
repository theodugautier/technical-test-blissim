import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  withStyles,
  IconButton,
  Grid
} from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useContext } from "react";
import GlobalContext from "../../state/global-context";
import { useRouter } from 'next/router'
import styled from 'styled-components'

const useStyles = theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  content: {
    width: "100%",
  },
  thumbnailContainer: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  thumbnail: {
    maxHeight: '170px',
    width: "auto",
    margin: "auto",
  },
  name: {
    fontSize: '1rem',
  },
  cardActions: {
    width: "100%",
    display: "flex",
    justifyContent: 'flex-end'
  },
});

const ProductCard = (props) => {
  const { classes, product } = props
  const router = useRouter()
  const context = useContext(GlobalContext);

  const handleAddToCart = (e, product) => {
    context.addProductToCart(product, context.pushObject('open_interstitial', true))
  }

  return (
    <CustomCard className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.thumbnailContainer}>
          <CardMedia
            component="img"
            alt={product.title}
            image={product.image}
            className={classes.thumbnail}
            title="Contemplative Reptile"
          />
        </div>
        {/* <Link href={`/boutique/${product.id}`} passhref> */}
        <Typography gutterBottom component="h2" className={classes.name}>
          {product.title}
        </Typography>
        {/* </Link> */}
        <Typography variant="body2" color="textSecondary" component="p">
          {product.desc}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton onClick={e => handleAddToCart(e, product)}>
          <ShoppingBasketIcon color="secondary" />
        </IconButton>
        <IconButton onClick={() => router.push(`/boutique/${product.id}`)}>
          <VisibilityIcon color="secondary" />
        </IconButton>
      </CardActions>
    </CustomCard>
  )
}

export default withStyles(useStyles)(ProductCard)

const CustomCard = styled(Card)`
  transform: translateY(0px);
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.5s;
  }
`;
