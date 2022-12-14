import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Chip,
} from '@mui/material'
import NextLink from 'next/link'
import React, { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces/products'

interface Props {
  product: IProduct
}

export const ProductCart: FC<Props> = ({ product }) => {
  const [isHovered, setisHovered] = useState(false)
  const [isImageLoaded, setisImageLoaded] = useState(false)
  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`
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
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <CardActionArea>
            {product.inStock === 0 && (
              <Chip
                size="small"
                color="primary"
                label="No disponible"
                sx={{
                  position: 'absolute',
                  zIndex: 99,
                  top: '10px',
                  left: '10px',
                }}
              />
            )}

            <CardMedia
              className="fadeIn"
              component={'img'}
              image={productImage}
              alt={product.title}
              onLoad={() => setisImageLoaded(true)}
            />
          </CardActionArea>
        </NextLink>
      </Card>
      <Box
        sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}
        className="fadeIn"
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  )
}
