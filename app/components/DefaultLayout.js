import Header from './header/Header'
import Footer from './footer/Footer'
import Interstitial from './Interstitial'
import { ThemeProvider} from "@material-ui/styles"
import { withStyles } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core';
import theme from '../theme/theme';

// ===== Basic Layout ===== //
const useStyles = (theme) => ({
    root: {
        minHeight: "100vh",
    },
});

const  DefaultLayout = (props) => {
    const {classes} = props
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>

                {/*Header*/}
                <Header/>

                <main>
                    {props.children}
                </main>

                {/*Footer*/}
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default withStyles(useStyles)(DefaultLayout)