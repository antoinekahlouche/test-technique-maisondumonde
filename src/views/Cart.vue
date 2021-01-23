<template>
	<div>
		<h1 class="mb-5">Panier</h1>

		<table v-if="cart.length > 0" class="table">
			<thead>
				<tr>
					<th scope="col">Ref</th>
					<th scope="col">Image</th>
					<th scope="col">Nom</th>
					<th scope="col">Quantité</th>
					<th scope="col">Prix U</th>
					<th scope="col">Total</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in cart" :key="item.reference" :value="item">
					<th scope="row">{{ item.reference }}</th>
					<td><img :src="item.images" height="150px" /></td>
					<td>{{ item.name }}</td>
					<td>{{ item.qty }}</td>
					<td>{{ item.price }}€</td>
					<td>{{ item.qty * item.price }}€</td>
					<td><button type="button" class="btn btn-danger" @click="removeFromCart(item.reference)">Retirer</button></td>
				</tr>
			</tbody>
		</table>
		<div v-else>Panier vide</div>

		<button type="button" class="btn btn-success mt-5 mr-3" @click="fillCart">Remplir le panier</button>
		<button type="button" class="btn btn-danger mt-5" @click="resetCart">Vider le panier</button>

		<h2 class="my-5">Recapitulatif</h2>
		<table v-if="cart.length > 0" class="table">
			<thead>
				<tr>
					<th scope="col">Ref</th>
					<th scope="col">Nom</th>
					<th scope="col">Quantité</th>
					<th scope="col">Prix U</th>
					<th scope="col">Total</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in cart" :key="item.reference" :value="item">
					<th scope="row">{{ item.reference }}</th>
					<td>{{ item.name }}</td>
					<td>{{ item.qty }}</td>
					<td>{{ item.price }}€</td>
					<td>{{ item.qty * item.price }}€</td>
				</tr>
				<tr>
					<th scope="row">Total</th>
					<td></td>
					<td></td>
					<td></td>
					<td>
						<b>{{ total }}€</b>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-else>Panier vide</div>
	</div>
</template>

<script>
const mock = [
	{
		reference: "166174",
		name: "Canapé-lit style scandinave 3 places gris clair",
		price: 699,
		images: "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-1000-16-1-166174_5.jpg",
		qty: 2
	},
	{
		reference: "188239",
		name: "Canapé d'angle convertible 3/4 places bleu nuit",
		price: 599.9,
		images: "//cdn.maisonsdumonde.com/img/canape-d-angle-convertible-3-4-places-bleu-nuit-1000-15-8-188239_1.jpg",
		qty: 1
	}
]

export default {
	data: () => ({
		cart: mock
	}),
	computed: {
		total: function() {
			return this.round(this.cart.reduce((acc, item) => acc + item.qty * item.price, 0))
		}
	},
	methods: {
		resetCart: function() {
			this.cart = []
		},
		fillCart: function() {
			this.cart = mock
		},
		removeFromCart: function(reference) {
			this.cart = this.cart.filter(item => {
				return item.reference !== reference
			})
		},
		round: function(value) {
			return Math.round(value * 100) / 100
		}
	}
}
</script>

<style></style>
