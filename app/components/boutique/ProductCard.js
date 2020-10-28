import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
    withStyles,
    IconButton
} from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useContext } from "react";
import GlobalContext from "../../state/global-context";
import Link from 'next/link'

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
});

const ProductCard = (props) => {
    const {classes, product} = props
    const context = useContext(GlobalContext);

    const handleAddToCart = (e, product) => {
        context.addProductToCart(product, context.pushObject('open_interstitial', true))
    }

    return (
        <Card className={classes.root}>
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
                <Link href={`/boutique/${product.id}`} passhref>
                    <Typography gutterBottom component="h2" className={classes.name}>
                        {product.title}
                    </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.desc}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={e => handleAddToCart(e, product)}>
                    <ShoppingBasketIcon color="secondary"/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default withStyles(useStyles)(ProductCard)