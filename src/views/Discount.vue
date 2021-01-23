<template>
	<div>
		<h1 class="mb-5">Promo</h1>

		<table v-if="$store.state.discounts.length > 0" class="table">
			<thead>
				<tr>
					<th scope="col">Code</th>
					<th scope="col">Réduction</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="discount of $store.state.discounts" :key="discount[0]" :value="discount">
					<th scope="row">{{ discount[0] }}</th>
					<td>{{ discount[1] }}%</td>
					<td><button type="button" class="btn btn-danger" @click="removeDiscount(discount[0])">Supprimer</button></td>
				</tr>
			</tbody>
		</table>
		<div v-else>Pas de code promo</div>

		<div class="card">
			<div class="card-body">
				<h2 class="card-title">
					Ajouter un code promo
				</h2>
				<form @submit.prevent="addDiscount">
					<div class="mb-3">
						<label for="code" class="form-label">Code</label>
						<input type="text" class="form-control" id="code" v-model="code" />
					</div>
					<div class="mb-3">
						<label for="amount" class="form-label">Reduction (en %)</label>
						<input type="number" min="0" max="100" class="form-control" id="amount" v-model="amount" />
					</div>
					<button type="submit" class="btn btn-primary" :disabled="!code || !amount">Ajouter</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		code: null,
		amount: null
	}),
	methods: {
		removeDiscount: function(code) {
			this.$store.commit("REMOVE_DISCOUNT", code)
		},
		addDiscount: function() {
			this.$store.commit("ADD_DISCOUNT", { code: this.code, amount: this.amount })
			this.code = null
			this.amount = null
		}
	}
}
</script>

<style></style>
