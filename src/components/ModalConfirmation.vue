<template>
	<div class="modal fade" id="modalConfirmation" tabindex="-1" role="dialog" aria-labelledby="modalConfirmationLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="modalConfirmationLabel">Confirmation</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					Confirme-tu le retrait du panier ?
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Non</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal" @click="callback">Oui</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		callback: Function
	}
}
</script>

<style></style>
