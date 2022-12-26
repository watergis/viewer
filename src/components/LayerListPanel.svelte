<script lang="ts">
	import { LegendPanel, LegendHeader } from '@watergis/svelte-maplibre-legend';
	import type { Map } from 'maplibre-gl';

	export let map: Map;

	let onlyRendered = true;
	let onlyRelative = false;
	let enableLayerOrder = false;
</script>

<div class="primary-container">
	<div class="legend-header m-1">
		<LegendHeader
			bind:onlyRendered
			bind:onlyRelative
			bind:enableLayerOrder
			isLayerOrderShown={true}
		/>
	</div>
	<div class="legend-content">
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
	$height: calc(100vh - 56px);

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
		}

		.legend-content {
			overflow-x: hidden;
			overflow-y: auto;
			height: $height;
			width: 100%;
		}
	}
</style>
