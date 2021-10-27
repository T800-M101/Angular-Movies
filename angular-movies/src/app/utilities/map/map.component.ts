import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletLayersControlDirective } from '@asymmetrik/ngx-leaflet';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  layers:Marker<any>[] = [];

  

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }


  
  @Output()
  onSelectedLocation:EventEmitter<coordinatesMap> = new EventEmitter<coordinatesMap>();

  @Input()
  initialCoordinates:coordinatesMap[] = [];

  @Input()
  editMode:boolean = true;



  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      { maxZoom: 15, attribution: 'Angular Movies' })
    ],
    zoom: 20,
    center: latLng(28.67335476653241, -106.10094666464649)
  };

  handleMapClick(event:any){

    if(this.editMode){

      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      this.layers = [];
      this.layers.push(marker([latitude,longitude]));
  
      this.onSelectedLocation.emit({latitude,longitude});
    }


  }

}
