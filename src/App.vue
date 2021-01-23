<template>
	<div id="app">
		<div class="navbar navbar-light bg-light navbar-fixed-top py-4">
			<div class="container">
				<div class="navbar-header pull-left">
					<router-link to="/" class="mr-4">Maison Normande</router-link>
					<!-- Je suis en Normandie + Maison du monde = maison Normande ;) -->
				</div>
				<div class="navbar-header pull-right">
					<router-link to="/cart" class="mr-4">Panier</router-link>
					<router-link to="/promo">Promo</router-link>
				</div>
			</div>
		</div>

		<div class="container my-5">
			<router-view />
		</div>
	</div>
</template>

<script></script>

<style></style>
