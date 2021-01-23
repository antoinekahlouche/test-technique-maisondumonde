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
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in cart" :key="item.reference" :value="item">
					<th scope="row">{{ item.reference }}</th>
					<td><img :src="item.images" height="150px" /></td>
					<td>{{ item.name }}</td>
					<td>{{ item.qty }}</td>
					<td>{{ item.price }}€</td>
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
	})
}
</script>

<style></style>
