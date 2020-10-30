import DefaultLayout from '../../components/DefaultLayout'
import { withStyles, Container, Grid, Typography, TextField, Card, IconButton, CardMedia, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import SubscriptionTable from '../../components/subscription/table'
import { useState, useContext } from 'react';
import GlobalContext from '../../state/global-context';
import Head from 'next/head'

const useStyles = theme => ({
  root: { marginBottom: theme.spacing(3) },
  h1: {
    margin: theme.spacing(5, 0)
  },
  textField: {
    marginBottom: '40px'
  },
  productListContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  productItem: {
    padding: theme.spacing(2),
    position: 'relative',
    display: "flex",
    marginBottom: "15px"
  },
  productItemImg: {
    width: "100px",
    height: "auto",
    maxHeight: "90px",
    marginRight: theme.spacing(2),
  },
  deleteIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    right: 0,
    bottom: 0,
  }
});

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/users.php`, {
//     method: "GET",
//     credentials: 'include'
//   });
//
// const users = await res.json()
//
// return {
//   props: {
//     users,
//   },
// }
// }

const Subscription = props => {
  const { classes } = props
  const [user, setUser] = useState({
    name: "",
    age: 0
  });
  const [userList, setUserList] = useState([]);
  const [errorForm, setErrorForm] = useState("");
  const context = useContext(GlobalContext);
  const cart = context.cart

  const handleRemoveProduct = id => {
    context.removeProductToCart(id)
  }

  const handleInputChange = (event) => {
    event.persist();
    setUser(users => ({
      ...users,
      [event.target.name]: event.target.value
    }));
  }

  const handleFormSubmit = async (event) => {
    console.log(user)
    event.preventDefault();
    const result = await fetch(`${process.env.API_URL}/post_user.php`, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(user)
    })

    const data = await result.json()

    if (result.status !== 201) {
      setErrorForm(data.message)
      return
    }
    setErrorForm("")
    setUserList(data);
  }

  return (
    <DefaultLayout>
      <Head>
        <title>Commande de {cart.length} produits - Super Shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth="lg" className={classes.root}>
        {errorForm.length > 0 &&
          <h2>{errorForm}</h2>
        }

        <Grid container justify={'center'}>
          <Grid item>
            <Typography variant="h3" component="h1" className={classes.h1}>Commandes</Typography>
          </Grid>
        </Grid>

        <Grid container justify={'center'}>

          <Grid item xs={8}>
            <Grid xs={9}>
              <form className={classes.root} onSubmit={handleFormSubmit} noValidate autoComplete="off">
                <TextField fullWidth id="outlined-basic" label="Nom d'utilisateur" className={classes.textField} name="name" onChange={handleInputChange} value={user.name} />
                <TextField fullWidth id="outlined-basic" label="Age" type="number" className={classes.textField} name="age" onChange={handleInputChange} value={user.age} />
                <Button type="submit" variant="contained" color="primary">
                  Enregistrer
                    </Button>
              </form>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            {cart.map((product, index) => (
              <Grid item xs={12} key={index}>
                <Card className={classes.productItem}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    image={product.image}
                    title="Contemplative Reptile"
                    className={classes.productItemImg}
                  />
                  <div className={classes.productItemContent}>
                    <Typography>{product.title}</Typography>
                    <Typography>{product.price}euros</Typography>
                    <IconButton onClick={() => handleRemoveProduct(product.id)} className={classes.deleteIcon}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>


        <Grid container justify={'center'}>
          <Grid item>
            <Typography variant="h3" component="h2" className={classes.h1}>Tous les utilisateurs</Typography>
          </Grid>
        </Grid>

        <SubscriptionTable users={userList} />

      </Container>
    </DefaultLayout>
  )
}

export default withStyles(useStyles)(Subscription)
