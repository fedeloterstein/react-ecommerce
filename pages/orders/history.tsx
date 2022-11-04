import { Chip, Grid, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import Link from 'next/link'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 100},
  {field: 'fullname', headerName: 'Nombre Completo', width: 300},
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra informacion si esta pagada o no',
    width: 200,
    renderCell: (params: any) => {
      return (
        params.row.paid
        ? <Chip color='success' label='Pagada' variant='outlined'/>
        : <Chip color='error' label='No pagada' variant='outlined'/>
      )
    }
  },
  {
    field: 'order',
    headerName: 'Ver orden',
    width: 200,
    renderCell: (params: any) => {
return (
  <Link href={`/orders/${params.row.id}`}>Ver orden</Link>
)
    },
    sortable: false
  }
]

const rows = [
  {id: 1, paid: false, fullname: 'Fede L'},
  {id: 2, paid: true, fullname: 'Jorge T'},
  {id: 3, paid: false, fullname: 'Alan H'},
  {id: 4, paid: true, fullname: 'Pepe K'},
  {id: 5, paid: false, fullname: 'Julio N'},

]
const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
        <Typography variant='h1' component={'h1'}>Historial de Ordenes</Typography>
        <Grid container>
          <Grid item xs={12} sx={{height: 650, width: '100%'}}>
            <DataGrid 
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            />
          </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage