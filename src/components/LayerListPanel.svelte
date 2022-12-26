<script lang="ts">
	import { LegendPanel } from '@watergis/svelte-maplibre-legend';
	import type { Map } from 'maplibre-gl';

	export let map: Map;

	let onlyRendered = true;
	let onlyRelative = false;
	let enableLayerOrder = false;

	let headerHeight = 100;
</script>

<div class="primary-container">
	<div class="legend-header m-1" bind:clientHeight={headerHeight}>
		<label>
			<input type="checkbox" bind:checked={onlyRendered} />
			Show only rendered layers
		</label>
		<label>
			<input type="checkbox" bind:checked={enableLayerOrder} />
			Change layer order
		</label>
	</div>
	<div class="legend-content" style="height: calc(100vh - {headerHeight + 10}px);">
		<LegendPanel
			bind:map
			bind:onlyRendered
			bind:onlyRelative
			bind:enableLayerOrder
			disableVisibleButton={false}
		/>
	</div>
</div>

<style lang="scss">
	.primary-container {
		display: flex;
		flex-direction: column;
		position: relative;
		margin: 0.5rem;

		.style-header {
			width: 100%;
			margin-bottom: 0.5rem;
		}

		.legend-header {
			width: 100%;
			margin-bottom: 0.5rem;
			display: flex;
			flex-direction: column;
		}

		.legend-content {
			overflow-x: hidden;
			overflow-y: auto;
			width: 100%;
		}
	}
</style>
