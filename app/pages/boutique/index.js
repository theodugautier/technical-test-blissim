import { useState } from 'react';
import DefaultLayout from '../../components/DefaultLayout'
import { withStyles, Container, Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import ProductsList from '../../components/boutique/ProductsList'
import styled from 'styled-components'

const useStyles = theme => ({
  root: { marginBottom: theme.spacing(3) },
  h1: {
    margin: theme.spacing(5, 0)
  },
  filterTitle: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.light
  },
  filterListItem: {
    paddingLeft: 0,
    cursor: 'pointer'
  }
});

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const productsList = await res.json()
  return {
    props: {
      productsList,
    },
  }
}

const Boutique = ({ classes, productsList }) => {

  const [products, setProducts] = useState(productsList)

  const handleFilter = (category) => {
    const filterProduct = productsList.filter((product) => {
      return product.category.toLowerCase() == (category.toLowerCase())
    });
    setProducts(filterProduct)
  }

  const reinitializeFilter = () => {
    setProducts(productsList)
  }

  return (
    <DefaultLayout>
      <Container maxWidth="lg" className={classes.root}>

        <Grid container justify={'center'}>
          <Grid item>
            <Typography variant="h3" component="h1" className={classes.h1}>Shop</Typography>
          </Grid>
        </Grid>

        <Grid container>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" className={classes.filterTitle}>Filtres</Typography>
            <div className={classes.filterListContainer}>
              <List>
                <CustomListItem className={classes.filterListItem}>
                  <ListItemText
                    onClick={reinitializeFilter}
                    primary="Réinitialiser les filtres"
                  />
                </CustomListItem>
                <CustomListItem className={classes.filterListItem}>
                  <ListItemText
                    onClick={() => handleFilter('men clothing')}
                    primary="Men clothing"
                  />
                </CustomListItem>
                <CustomListItem className={classes.filterListItem}>
                  <ListItemText
                    onClick={() => handleFilter('jewelery')}
                    primary="Jewelery"
                  />
                </CustomListItem>
                <CustomListItem className={classes.filterListItem}>
                  <ListItemText
                    onClick={() => handleFilter('electronics')}
                    primary="Electronics"
                  />
                </CustomListItem>
                <CustomListItem className={classes.filterListItem}>
                  <ListItemText
                    onClick={() => handleFilter('women clothing')}
                    primary="Women clothing"
                  />
                </CustomListItem>
              </List>
            </div>
          </Grid>

          <Grid item xs={12} md={9} className={classes.productsListContainer}>
            <ProductsList products={products} />
          </Grid>

        </Grid>
      </Container>
    </DefaultLayout>
  )
}

export default withStyles(useStyles)(Boutique)

const CustomListItem = styled(ListItem)`
  color: inherit;
  transition: color 1s;

  &:hover {
    color: #2081C3;
    transition: color 0.5s;
  }
`;
