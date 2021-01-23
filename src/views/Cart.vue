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
					<td>
						<button type="button" class="btn btn-secondary" @click="itemQtyUpdate(item.reference, item.qty - 1)" :disabled="item.qty <= 1">-</button>
						{{ item.qty }}
						<button type="button" class="btn btn-secondary" @click="itemQtyUpdate(item.reference, item.qty + 1)">+</button>
					</td>
					<td>{{ item.price }}€</td>
					<td>{{ round(item.qty * item.price) }}€</td>
					<td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalConfirmation" @click="selectWaitingConfirmation(item.reference)">Retirer</button></td>
				</tr>
			</tbody>
		</table>
		<div v-else>Panier vide</div>

		<button type="button" class="btn btn-success mt-5 mr-3" @click="fillCart">Remplir le panier</button>
		<button type="button" class="btn btn-danger mt-5" @click="resetCart">Vider le panier</button>

		<div class="card mt-5">
			<div class="card-body">
				<h2 class="card-title">
					Livraison
				</h2>
				<div class="form-check">
					<input class="form-check-input" type="radio" :value="false" v-model="delivery" />
					<label class="form-check-label" for="flexRadioDefault1"> Retrait en magasin : <b>GRATUIT</b> </label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="radio" :value="true" v-model="delivery" />
					<label class="form-check-label" for="flexRadioDefault2"> Livraison à domicile : <b>+50€</b> </label>
				</div>
			</div>
		</div>

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
					<td>{{ round(item.qty * item.price) }}€</td>
				</tr>
				<tr>
					<th scope="row">Total HT</th>
					<td></td>
					<td></td>
					<td></td>
					<td>
						<b>{{ ht }}€</b>
					</td>
				</tr>
				<tr>
					<th scope="row">Livraison</th>
					<td></td>
					<td></td>
					<td></td>
					<td>
						<b>{{ fee }}€</b>
					</td>
				</tr>
				<tr>
					<th scope="row">TVA</th>
					<td></td>
					<td></td>
					<td></td>
					<td>
						<b>{{ tva }}€</b>
					</td>
				</tr>
				<tr>
					<th scope="row">Total TTC</th>
					<td></td>
					<td></td>
					<td></td>
					<td>
						<b>{{ ttc }}€</b>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-else>Panier vide</div>

		<ModalConfirmation :callback="removeFromCart" />
	</div>
</template>

<script>
import ModalConfirmation from "@/components/ModalConfirmation"

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
	components: { ModalConfirmation },
	data: () => ({
		cart: mock,
		waitingConfirmation: null,
		delivery: false
	}),
	computed: {
		ht: function() {
			return this.round(this.cart.reduce((acc, item) => acc + item.qty * item.price, 0))
		},
		fee: function() {
			return this.delivery ? 50 : 0
		},
		tva: function() {
			return this.round((this.ht + this.fee) * 0.2)
		},
		ttc: function() {
			return this.ht + this.fee + this.tva
		}
	},
	methods: {
		resetCart: function() {
			this.cart = []
		},
		fillCart: function() {
			this.cart = mock
		},
		selectWaitingConfirmation: function(reference) {
			this.waitingConfirmation = reference
		},
		removeFromCart: function() {
			this.cart = this.cart.filter(item => {
				return item.reference !== this.waitingConfirmation
			})
		},
		round: function(value) {
			return Math.round(value * 100) / 100
		},
		itemQtyUpdate: function(reference, qty) {
			this.cart.find(item => item.reference === reference).qty = qty
		}
	}
}
</script>

<style></style>
