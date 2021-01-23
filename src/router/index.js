import Vue from "vue"
import VueRouter from "vue-router"
import Cart from "../views/Cart.vue"
import Discount from "../views/Discount.vue"
import NotFound from "../views/NotFound.vue"
import Success from "../views/Success.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		alias: "/cart",
		component: Cart
	},
	{
		path: "/discount",
		component: Discount
	},
	{
		path: "/success",
		component: Success
	},
	{
		path: "*",
		component: NotFound
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
