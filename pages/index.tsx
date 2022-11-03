import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts/ShopLayout';

export default function Home() {
  return (
<ShopLayout title={'React Ecommerce - Home'} pageDescription={'Encuentra los mejores productos de React Ecommerce'}>
  <Typography variant='h1' component={'h1'}>Tienda</Typography>
  <Typography variant='h2' sx={{mb: 1}}>Todos los productos</Typography>
</ShopLayout>
  )
}
