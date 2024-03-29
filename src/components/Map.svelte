<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Map,
		NavigationControl,
		GeolocateControl,
		ScaleControl,
		AttributionControl
	} from 'maplibre-gl';
	import { page } from '$app/stores';
	import { map } from '$lib/stores';
	import AttributePopupControl from '@watergis/svelte-maplibre-attribute-popup';
	import { MapExportControl } from '@watergis/svelte-maplibre-export';
	import { MenuControl } from '@watergis/svelte-maplibre-menu';
	import LayerListPanel from './LayerListPanel.svelte';

	const VITE_MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;

	let mapContainer: HTMLDivElement;
	let isMenuShown = true;

	let showTileBoundaries = true;
	let showCollisionBoxes = false;
	let showPadding = false;

	$: {
		if ($map) {
			$map.showTileBoundaries = showTileBoundaries;
		}
	}

	$: {
		if ($map) {
			$map.showCollisionBoxes = showCollisionBoxes;
		}
	}

	$: {
		if ($map) {
			$map.showPadding = showPadding;
		}
	}

	onMount(async () => {
		$map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${VITE_MAPTILER_KEY}`,
			center: [37.138, 0.414],
			zoom: 4,
			hash: true,
			attributionControl: false
		});

		$map.addControl(new NavigationControl({}), 'top-right');
		$map.addControl(
			new GeolocateControl({
				positionOptions: { enableHighAccuracy: true },
				trackUserLocation: true
			}),
			'top-right'
		);
		$map.addControl(new ScaleControl({ maxWidth: 80, unit: 'metric' }), 'bottom-left');
		$map.addControl(new AttributionControl({ compact: true }), 'bottom-right');

		$map.on('load', async () => {
			await loadStyle();
		});
	});

	const loadStyle = async () => {
		const url = $page.url.searchParams.get('style');
		if (url) {
			const res = await fetch(url);
			const styleJSON = await res.json();
			$map.setStyle(styleJSON);
			$map.once('styledata', () => {
				if (styleJSON.zoom) $map.setZoom(styleJSON.zoom);
				if (styleJSON.bearing) $map.setBearing(styleJSON.bearing);
				if (styleJSON.pitch) $map.setPitch(styleJSON.pitch);
				if (styleJSON.center) $map.setCenter(styleJSON.center);
				$map.fire('style:change');
			});
		}
	};
</script>

<MenuControl bind:map={$map} position={'top-left'} bind:isMenuShown>
	<div slot="primary">
		<LayerListPanel bind:map={$map} />
	</div>
	<div slot="secondary">
		<div class="map" id="map" bind:this={mapContainer}>
			<div class="settings">
				<label>
					<input type="checkbox" bind:checked={showTileBoundaries} />
					Show Tile Boundaries
				</label>
				<label>
					<input type="checkbox" bind:checked={showCollisionBoxes} />
					Show Collision Boxes
				</label>
				<label>
					<input type="checkbox" bind:checked={showPadding} />
					Show Padding
				</label>
			</div>
		</div>
		<AttributePopupControl bind:map={$map} />
		<MapExportControl
			bind:map={$map}
			showPrintableArea={true}
			showCrosshair={true}
			position="top-right"
		/>
	</div>
</MenuControl>

<style lang="scss">
	@import 'maplibre-gl/dist/maplibre-gl.css';

	.map {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		z-index: 1;

		:global(table) {
			width: 100%;
		}
	}

	.settings {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 45px;
		left: 10px;
		z-index: 10;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 10px;
		font-size: medium;
	}
</style>
