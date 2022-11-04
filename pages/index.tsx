import { Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { ProductList } from '../components/products'
import { useProducts } from '../hooks'


export default function Home() {

const {products, isLoading} = useProducts('/products')
  return (
    <ShopLayout
      title={'React Ecommerce - Home'}
      pageDescription={'Encuentra los mejores productos de React Ecommerce'}
    >
      <Typography variant="h1" component={'h1'}>
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {
        isLoading
        ? <h1>Cargando...</h1>
        : <ProductList products={products}/>
      }
  
    </ShopLayout>
  )
}
