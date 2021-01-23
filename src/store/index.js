import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		discounts: [
			["PROMO10", 10],
			["PROMO20", 20]
		]
	},
	mutations: {
		ADD_DISCOUNT(state, { code, amount }) {
			if (Object.keys(state.discounts).includes(code)) {
				// Si le code promo existe déjà, on le supprime pour ajouter le nouveau
				state.discounts = state.discounts.filter(discount => {
					return discount[0] !== code
				})
			}
			state.discounts.push([code, amount])
		},
		REMOVE_DISCOUNT(state, code) {
			state.discounts = state.discounts.filter(discount => {
				return discount[0] !== code
			})
		}
	},
	actions: {},
	modules: {}
})
