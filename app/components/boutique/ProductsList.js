import ProductCard from './ProductCard'
import { Grid, withStyles } from "@material-ui/core";
import ProductsList from "../../pages/boutique";

const useStyles = theme => ({

});

const ProductList = (props) => {
  const { classes, products } = props
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={6} md={4} key={index}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default withStyles(useStyles)(ProductList)
