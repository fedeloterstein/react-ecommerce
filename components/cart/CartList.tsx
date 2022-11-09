import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'
import { ItemCounter } from '../ui'
import { useContext } from 'react';
import { CartContext } from '../../context'
import { ICartProduct } from '../../interfaces';

interface Props {
  editable?: boolean
}
export const CartList: FC<Props> = ({editable = false}) => {

 
  const { cart, updateCartQuantity, removeCartProduct } = useContext(CartContext);

  const onNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
      product.quantity = newQuantityValue;
      updateCartQuantity( product );
  }



  return (
    <>
      {cart.map((product) => (
        <Grid container spacing={2} key={product.slug + product.size} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <Link href={`/product/${product.slug}`}>
              <CardActionArea>
                <CardMedia
                  image={`/products/${product.image}`}
                  component="img"
                  sx={{ borderRadius: '5px' }}
                />
              </CardActionArea>
            </Link>
          </Grid>
          <Grid item xs={7}>
            <Box display={'flex'} flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>M</strong>
              </Typography>
              {
              editable
             ?  <ItemCounter currentValue={product.quantity} maxValue={10} updatedQuantity={ ( value ) => onNewCartQuantityValue(product, value )} />
              : <Typography variant='h5'>3 items</Typography>
              }
            </Box>
          </Grid>
          <Grid item xs={2} display='flex' alignItems={'center'} flexDirection='column'>
            <Typography variant='subtitle1'>${product.price}</Typography>
            {
              editable && (
                <Button variant='text' color='secondary'  onClick={ () => removeCartProduct( product ) }>Remover</Button>
              )
            }
          </Grid>
        </Grid>
      ))}
    </>
  )
}
