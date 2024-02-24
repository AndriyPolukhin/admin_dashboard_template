import { Box, useTheme } from '@mui/material'
import { useGetCustomersQuery } from '@/state/api'
import Header from '@/components/Header'
import { DataGrid } from '@mui/x-data-grid'
const Customers = () => {
	const theme = useTheme()
	const { data, isLoading } = useGetCustomersQuery()

	if (!isLoading) {
		console.log(data)
	}

	/**
     _id: '63701cc1f03239c72c000180',
      name: 'Marilyn',
      email: 'mdonlon1@hostgator.com',
      city: 'Zhanghekou',
      state: null,
      country: 'CN',
      occupation: 'Food Chemist',
      phoneNumber: '9981906117',
      transactions: [
        '63701d74f03239b7f7000027', '63701d74f03239db69000153', '63701d74f03239569400002d',
        '63701d74f032394c4900014b'
      ],
      role: 'user',
     */

	const columns = [
		{
			field: '_id',
			headerName: 'ID',
			flex: 1,
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 0.5,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},
		{
			field: 'phoneNumber',
			headerName: 'Phone Number',
			flex: 0.5,
			renderCell: (params) => {
				return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3')
			},
		},
		{
			field: 'country',
			headerName: 'Country',
			flex: 0.4,
		},
		{
			field: 'occupation',
			headerName: 'Occupation',
			flex: 1,
		},
		{
			field: 'role',
			headerName: 'Role',
			flex: 0.5,
		},
	]

	return (
		<Box m='1.5rem 2.5rem'>
			<Header title='CUSTOMERS' subtitle='List of Customer' />
			<Box
				mt='40px'
				height='75vh'
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: theme.palette.background.alt,
						color: theme.palette.secondary[100],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: theme.palette.primary[700],
					},
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: theme.palette.background.alt,
						color: theme.palette.secondary[100],
						borderTop: 'none',
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${theme.palette.secondary[200]} !important`,
					},
				}}
			>
				<DataGrid
					loading={isLoading || !data}
					getRowId={(row) => row._id}
					rows={data || []}
					columns={columns}
				/>
			</Box>
		</Box>
	)
}

export default Customers
