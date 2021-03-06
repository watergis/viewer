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
	import { MaplibreLegendControl } from '@watergis/maplibre-gl-legend';
	import MaplibrePopupControl from '$lib/plugins/MaplibrePopupControl';

	const VITE_MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;

	let mapContainer: HTMLDivElement;

	onMount(async () => {
		const tmpMap = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${VITE_MAPTILER_KEY}`,
			center: [37.138, 0.414],
			zoom: 4,
			hash: false,
			attributionControl: false
		});
		map.update(() => tmpMap);

		tmpMap.on('load', async () => {
			await addControls();
			await loadStyle();
		});
	});

	const addControls = async () => {
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

		const { MaplibreExportControl } = await import('@watergis/maplibre-gl-export');
		$map.addControl(
			new MaplibreExportControl({
				Crosshair: true,
				PrintableArea: true
			}),
			'top-right'
		);

		$map.addControl(
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			new MaplibreLegendControl(
				{},
				{
					showDefault: true,
					showCheckbox: true,
					reverseOrder: true,
					onlyRendered: true
				}
			),
			'bottom-left'
		);

		const layerList = $map.getStyle().layers.map((layer) => {
			return layer.id;
		});
		$map.addControl(new MaplibrePopupControl(layerList));
	};

	const loadStyle = async () => {
		const url = $page.url.searchParams.get('style');
		if (url) {
			const res = await fetch(url);
			const styleJSON = await res.json();

			$map.remove();

			const tmpMap = new Map({
				container: mapContainer,
				style: styleJSON,
				center: $map.getCenter(),
				zoom: $map.getZoom(),
				bearing: $map.getBearing(),
				pitch: $map.getPitch(),
				hash: true,
				attributionControl: false
			});
			if (styleJSON.zoom) tmpMap.setZoom(styleJSON.zoom);
			if (styleJSON.bearing) tmpMap.setBearing(styleJSON.bearing);
			if (styleJSON.pitch) tmpMap.setPitch(styleJSON.pitch);
			if (styleJSON.center) tmpMap.setCenter(styleJSON.center);

			map.update(() => tmpMap);
			tmpMap.on('load', async () => {
				await addControls();
			});
		}
	};
</script>

<div class="map" id="map" bind:this={mapContainer} />

<style>
	@import 'maplibre-gl/dist/maplibre-gl.css';
	@import '@watergis/maplibre-gl-export/css/styles.css';
	@import '@watergis/maplibre-gl-legend/css/styles.css';
	@import '$lib/plugins/MaplibrePopupControl.css';

	.map {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
	}
</style>
