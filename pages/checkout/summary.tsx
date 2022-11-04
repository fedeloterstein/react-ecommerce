import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const SummaryPage = () => {
  return (
    <ShopLayout title="Resumen de orden" pageDescription="Resumen de la orden">
      <Typography variant="h1" component={'h1'}>
        Resumen de la orden
      </Typography>
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
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage
