import React from 'react'
import {Card, CardMedia, CardContent, CardActions,
        Typography, IconButton} from '@material-ui/core'
  import Tooltip from '@material-ui/core/Tooltip';
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

        const Product = ({product, onAddToCart}) => {
            const classes =useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia  className={classes.media} image={product.media.source}
                 title={product.name}/>
                 <CardContent>
                     <div className={classes.cardContent}>
                        <Typography variant="h5" getterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                     </div>
                     <Typography  dangerouslySetInnerHTML={{__html: product.description}}  variant="body2" color="textSecondary" />
                 </CardContent>
                 <CardActions disableSpacing className={classes.cardActions}>
                 <Tooltip title="Add to Cart" aria-label="add">
                     <IconButton aria-label="Add to Cart" className={classes.red} 
                        onClick={() => onAddToCart(product.id,1)}>
                         <AddShoppingCart />
                     </IconButton>
                    </Tooltip>
                 </CardActions>
        </Card>
    )
}

export default Product
