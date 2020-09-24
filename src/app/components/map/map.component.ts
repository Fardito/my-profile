import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.map;

  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 12,
      center: [-59.1378078,-37.3296328]
    });
    
    this.generateMarker(-59.1378078,-37.3296328);

    
  }

  generateMarker(lng: number, lat: number){
    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.map);

    marker.on('drag', () => {
      console.log(marker.getLngLat())
    })
  }
}
