import DefaultLayout from '../../components/DefaultLayout'
import { withStyles, Container, Grid, Typography, TextField, Button } from '@material-ui/core'
import SubscriptionTable from '../../components/subscription/table'
import { useState } from 'react';

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
    }
});

const Subscription = props => {
  const {classes} = props
  const [user, setUser] = useState({
    name: "",
    age: 0
  });
  const [userList, setUserList] = useState([]);
  const [errorForm, setErrorForm] = useState("");

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
    const result = await fetch("http://localhost:4000/index.php", {
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
      <Container maxWidth="lg" className={classes.root}>
          {errorForm.length > 0 &&
            <h2>{errorForm}</h2>
          }

          <Grid container justify={'center'}>
              <Grid item>
                  <Typography variant="h3" component="h1" className={classes.h1}></Typography>
              </Grid>
          </Grid>

          <Grid container justify={'center'}>
              <Grid item>
                <form className={classes.root} onSubmit={handleFormSubmit} noValidate autoComplete="off">
                  <TextField fullWidth id="outlined-basic" label="Nom d'utilisateur" name="name" onChange={handleInputChange} value={user.name} />
                  <TextField fullWidth id="outlined-basic" label="Age" type="number" name="age" onChange={handleInputChange} value={user.age} />
                  <Button type="submit" variant="contained" color="primary">
                    Enregistrer
                  </Button>
                </form>
              </Grid>
          </Grid>

          <SubscriptionTable users={userList}/>

      </Container>
  </DefaultLayout>
  )
}

export default withStyles(useStyles)(Subscription)