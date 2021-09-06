import React from 'react';

import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import logo from '../../assets/launch_background.png';

const Products=({products, onAddToCart})=>{
    const classes = useStyles();

    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="left" spacing="0" >
                {products.map((product, index)=>
                index <8 && (
                    <Grid item key={product.id} xs={12}
                        sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
        </Grid>
    </main>
    )
    
}

export default Products;