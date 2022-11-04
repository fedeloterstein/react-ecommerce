import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const OrderSumary = () => {
  return (
    <ShopLayout
      title="Resumen de orden ABCS"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component={'h1'}>
        Orden: ABCD
      </Typography>
      <Chip
        sx={{ my: 2 }}
        label="Pendiente de Pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display={'flex'} justifyContent="space-between">
                <Typography variant="subtitle1">Direccio de entrega</Typography>
                <Link href={'/checkout/address'}>Editar</Link>
              </Box>
              <Typography>Texto a completar</Typography>
              <Typography>Texto a completar</Typography>
              <Typography>Texto a completar</Typography>
              <Typography>Texto a completar</Typography>
              <Typography>Texto a completar</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display={'flex'} justifyContent="end">
                <Link href={'/cart'}>Editar</Link>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 2 }}
                  label="Orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderSumary
