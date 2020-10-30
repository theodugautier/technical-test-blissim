import { withStyles, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";

const useStyles = theme => ({

});

const SubscriptionTable = (props) => {
    const {classes, users} = props
    return (
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom de l'utilisateur</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default withStyles(useStyles)(SubscriptionTable)
