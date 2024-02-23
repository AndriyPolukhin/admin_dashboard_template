import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

/** Data Imports */

/** Data Inserted:
import User from '../models/User.js'
import { dataUser } from '../data/index.js'
import Product from '../models/Product.js'
import ProductStat from '../models/ProductStat.js'
import { dataProduct, dataProductStat } from '../data/index.js'
*/

const connectDB = async () => {
	try {
		const clientOptions = {
			serverApi: { version: '1', strict: true, deprecationErrors: true },
		}
		const conn = await mongoose.connect(process.env.MONGO_URI, clientOptions)

		await mongoose.connection.db.admin().command({ ping: 1 })
		console.log(
			`Pinged your deployment. You successfully connected to MongoDB!\nURI: ${conn.connection.host}\nDB: ${conn.connection.name}`
		)
		/** Add data one time only or as needed */
		// await mongoose.connection.db.dropDatabase()
		// await MODEL.insertMany(mockData)
		// await User.insertMany(dataUser)
		// await Product.insertMany(dataProduct)
		// await ProductStat.insertMany(dataProductStat)
	} catch (error) {
		console.log(`Error: ${error.message}`)
		process.exit(1)
	}
}

export default connectDB
