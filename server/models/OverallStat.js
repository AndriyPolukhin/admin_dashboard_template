import mongoose from 'mongoose'

const OverallStatSchema = new mongoose.Schema(
	{
		totalCustomers: Number,
		yearlySalesTotal: Number,
		yearlyTotalSoldUnits: Number,
		year: Number,
		monthlyData: [
			{
				month: String,
				totalSales: Number,
				totalUnits: Number,
			},
		],
		dailyData: [
			{
				date: String,
				totalSales: Number,
				totalUnits: Number,
			},
		],
		salesByCategory: {
			types: Map,
			of: Number,
		},
	},
	{ timestamps: true }
)

const OverallStat = mongoose.model('OveralStat', OverallStatSchema)
export default OverallStat
