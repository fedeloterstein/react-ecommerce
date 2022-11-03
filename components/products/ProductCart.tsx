import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from '@mui/material'
import React, { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces/products'

interface Props {
  product: IProduct
}

export const ProductCart: FC<Props> = ({ product }) => {
  const [isHovered, setisHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <Card>
        <CardActionArea>
          <CardMedia className="fadeIn" component={'img'} image={productImage} alt={product.title} />
        </CardActionArea>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  )
}
