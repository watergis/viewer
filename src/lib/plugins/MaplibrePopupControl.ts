import {
	Map as MaplibreMap,
	Popup,
	LngLat,
	type IControl,
	MapMouseEvent,
	type MapGeoJSONFeature
} from 'maplibre-gl';

class PopupManager {
	private popup: Popup | null;
	private contents: string[];

	constructor(private map: MaplibreMap) {
		this.contents = [];
	}

	add(lnglat: LngLat, feature: MapGeoJSONFeature) {
		const html = `
    <div class="maplibregl-popup-layer-name">${feature.sourceLayer}</div>
    <div class="maplibregl-popup-panel_area"><table class="maplibregl-popup-table">
    ${Object.keys(feature.properties)
			.map((k) => {
				return `<tr><th class="maplibregl-popup-th">${k
					.replace(/_/g, ' ')
					.replace(/-/g, ' ')}</th><td class="maplibregl-popup-td">${
					feature.properties[k]
				}</td></tr>`;
			})
			.join('')}
    </table></div>`;
		this.contents.push(html);

		let mainContent: string;

		if (this.contents.length === 1) {
			mainContent = this.contents[0];
		} else {
			mainContent = `
      <div class="maplibregl-popup-tab_wrap">
      ${[...Array(this.contents.length).keys()]
				.map((index) => {
					index += 1;
					const checked = index === 0 ? 'checked' : '';
					return `<input id="maplibregl-popup-tab${index}" type="radio" name="tab_btn" ${checked}>`;
				})
				.join('')}
      <div class="maplibregl-popup-tab_area">
      ${[...Array(this.contents.length).keys()]
				.map((index) => {
					index += 1;
					return `<label class="maplibregl-popup-tab${index}_label" for="maplibregl-popup-tab${index}">${index}</label>`;
				})
				.join('')}
      </div>
      <div class="maplibregl-popup-panel_area">
      ${this.contents
				.map((s, index) => {
					index += 1;
					return `<div id="maplibregl-popup-panel${index}" class="maplibregl-popup-tab_panel">${s}</div>`;
				})
				.join('')}
      </div>
     </div>`;
		}

		if (!this.popup) {
			this.popup = new Popup()
				.setLngLat(lnglat)
				.setHTML(mainContent)
				.setMaxWidth('400px')
				.addTo(this.map);
		} else {
			this.popup.setHTML(mainContent);
		}
		if (this.contents.length > 1) {
			const tab1: HTMLInputElement = <HTMLInputElement>(
				document.getElementById('maplibregl-popup-tab1')
			);
			tab1.checked = true;
		}
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const this_ = this;
		this_.popup?.on('close', function () {
			this_.popup = null;
			this_.contents = [];
		});
	}
}

export default class MaplibrePopupControl implements IControl {
	private controlContainer: HTMLElement | undefined;
	private popupButton: HTMLButtonElement | undefined;
	private map?: MaplibreMap;
	private popupManager?: PopupManager;

	constructor(private targets: string[] = []) {}

	onAdd(map: MaplibreMap): HTMLElement {
		this.map = map;
		this.popupManager = new PopupManager(this.map);
		if (this.targets.length > 0) {
			map.on('click', this.onClick.bind(this));
		}
		//Below button is just dummy for the control.
		this.controlContainer = document.createElement('div');
		this.controlContainer.className = 'maplibregl-ctrl maplibregl-ctrl-group';
		Object.assign(this.controlContainer, { style: 'display:none' });
		this.popupButton = document.createElement('button');
		this.popupButton.className = 'maplibregl-ctrl-icon';
		this.popupButton.type = 'button';
		this.controlContainer.appendChild(this.popupButton);
		return this.controlContainer;
	}

	onClick(e: MapMouseEvent) {
		const layers = [];
		this.targets.forEach((layer) => {
			if (this.map.getLayer(layer)) {
				layers.push(layer);
			}
		});
		const features = this.map.queryRenderedFeatures(e.point, { layers });
		features.forEach((feature) => {
			this.popupManager?.add(e.lngLat, feature);
		});
		return;
	}

	onRemove(): void {
		if (
			!this.controlContainer ||
			!this.controlContainer.parentNode ||
			!this.map ||
			!this.popupButton
		) {
			return;
		}
		this.controlContainer.parentNode.removeChild(this.controlContainer);
		this.map = undefined;
	}
}
