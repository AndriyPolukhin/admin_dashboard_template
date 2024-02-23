import Product from '../models/Product.js'
import ProductStat from '../models/ProductStat.js'

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find()
		const productsWithStats = await Promise.all(
			products.map(async (product) => {
				let stat = await ProductStat.find({
					productId: product._id,
				})
				stat = stat[0]
				return {
					...product._doc,
					stat,
				}
			})
		)
		res.status(200).json(productsWithStats)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}
