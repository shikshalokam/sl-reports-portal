import { Component, OnInit, ViewChild ,OnChanges, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as data from '../../../assets/andhra.json';
import * as L from 'leaflet';
import * as R from 'leaflet-responsive-popup';

var globalMap;

@Component({
  selector: 'app-activitypercentage-perdistrict',
  templateUrl: './activitypercentage-perdistrict.component.html',
  styleUrls: ['./activitypercentage-perdistrict.component.scss']
})
export class ActivitypercentagePerdistrictComponent implements OnInit, OnChanges {
  markerData: any;
  @Input() mapLoginChartData:any;


  constructor(public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit() {
    
  }
  ngOnChanges(){
    this.markerData = this.mapLoginChartData['data'];
      data.default['features'].forEach((element) => {
        this.markerData.forEach((prop) => {
          if (
            element.properties['District Name'] ==
            prop['District Name']
          ) {
            element.properties = prop;
          }
        });
      });
      data.default['features'].forEach((element) => {
        if (!element.properties.login_percentage) {
          element.properties['login_percentage'] = 0;
        }
      });

      this.initMapContainer(data.default['features'], 'mapContainer');

  }
  initMapContainer(data, id) {
    const lat = 15.999337593805994;
    const lng = 80.95896916007721;
    globalMap = L.map(id, { zoomControl: false }).setView([lat, lng], 5);
    applyCountryBorder(globalMap);
    function applyCountryBorder(map) {
      L.geoJSON(data, {
        color: '#a9a9a9',
        weight: 1,
      }).addTo(map);
    }
    L.tileLayer(
      'https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}?access_token={token}',
      {
        token: environment.leafletToken,
        id: 'mapbox.streets',
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        minZoom: 4,
        maxZoom: 18,
      }
    ).addTo(globalMap);

    data.sort((a, b) => Number(a.properties.login_percentage) > Number(b.properties.login_percentage) ? 1
      : Number(b.properties.login_percentage) > Number(a.properties.login_percentage) ? -1 : 0
    );
    var colors: any = this.color().generateGradient('#FF0000', '#7FFF00', data.length, 'rgb');

    var i = 0;
    var index;
    function getColor(d) {
      index = i;
      i++;
      return colors[index];
    }

    function style(feature) {
      return {
        fillColor: getColor(feature.properties.login_percentage),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.75,
        fillText: feature.properties['District Name'],
        textColor: 'green',
      };
    }

    var geojson;

    function onEachFeature(feature, layer) {
      // console.log(layer.feature.properties);
      const popup = R.responsivePopup({
        hasTip: true,
        autoPan: true,
        offset: [15, 20],
      }).setContent(
        layer.feature.properties
          ? 'District Name : ' +
          layer.feature.properties['District Name'] +
          '<br />' +
          'Login Percentage : ' +
          layer.feature.properties['login_percentage']
          : 'Hover over a state'
      );
      layer.addTo(globalMap).bindPopup(popup);

      layer.on('mouseover', function (e) {
        this.openPopup();
      });
      layer.on('mouseout', function (e) {
        this.closePopup();
      });
    }

    geojson = L.geoJson(data, {
      style: style,
      onEachFeature: onEachFeature,
    }).addTo(globalMap);
  }
  public color() {
    // Converts a #ffffff hex string into an [r,g,b] array
    function hex2rgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
        : null;
    }

    // Inverse of the above
    function rgb2hex(rgb) {
      return (
        '#' +
        ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
          .toString(16)
          .slice(1)
      );
    }

    // Interpolates two [r,g,b] colors and returns an [r,g,b] of the result

    function _interpolateRgb(color1, color2, factor) {
      if (arguments.length < 3) {
        factor = 0.5;
      }

      let result = color1.slice();

      for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }
      return result;
    }

    function generateGradient(color1, color2, total, interpolation) {
      const colorStart = typeof color1 === 'string' ? hex2rgb(color1) : color1;
      const colorEnd = typeof color2 === 'string' ? hex2rgb(color2) : color2;

      // will the gradient be via RGB or HSL
      switch (interpolation) {
        case 'rgb':
          return colorsToGradientRgb(colorStart, colorEnd, total);
        case 'hsl':
        //   return colorsToGradientHsl(colorStart, colorEnd, total);
        default:
          return false;
      }
    }

    function colorsToGradientRgb(startColor, endColor, steps) {
      // returns array of hex values for color, since rgb would be an array of arrays and not strings, easier to handle hex strings
      let arrReturnColors = [];
      let interimColorRGB;
      let interimColorHex;
      const totalColors = steps;
      const factorStep = 1 / (totalColors - 1);

      for (let idx = 0; idx < totalColors; idx++) {
        interimColorRGB = _interpolateRgb(
          startColor,
          endColor,
          factorStep * idx
        );
        interimColorHex = rgb2hex(interimColorRGB);
        arrReturnColors.push(interimColorHex);
      }
      return arrReturnColors;
    }
    return {
      generateGradient,
    };
  }

}
