import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Chart } from 'angular-highcharts';

import * as Highcharts from 'highcharts';
import wordcloud from 'highcharts/modules/exporting';
wordcloud(Highcharts);

import * as data from '../../../assets/andhra.json';
import * as L from 'leaflet';
import * as R from 'leaflet-responsive-popup';

var globalMap;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public count: any = [];
  public bodhCount: any;
  public unnatiCount: any;
  public samikshaCount: any;
  public abyasaCount: any;
  public apppercentage;
  public applogin;
  dataTable = [];
  worddata: any;
  barchart: Chart;
  linechart: Chart;
  name: string;
  data: any[];
  num1: any;
  num2: any;
  num3: any;
  numbers: any;
  averagetimespent: any;
  growth_in_minutes: any;
  minutes_time: any;
  topscorer: any;
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  markerData: any;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  constructor(
    public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router
  ) {}

  ngOnInit() {
    this.homedata();
  }
  homedata() {
this.service.topscorer().subscribe((response4) => {
      this.topscorer = response4;
      this.topscorer.sort((a, b) =>
        Number(a.topscore) < Number(b.topscore)
          ? 1
          : Number(b.topscore) < Number(a.topscore)
          ? -1
          : 0
      );

      this.barChart(this.topscorer);
      this.service.app_login().subscribe((response2) => {
        this.applogin = response2;
        this.appcount(this.applogin);

this.service.averagetimespent().subscribe((response3) => {
          this.averagetimespent = response3;
          this.growth_in_minutes = this.averagetimespent[0].growth_in_minutes;
          this.minutes_time = this.averagetimespent[0].minutes_time;
        
this.service.app_percentage().subscribe((response1) => {
            this.apppercentage = response1;
            this.lineChart(this.apppercentage);
this.service.top5basedratedcontent().subscribe((response5) => {
              this.worddata = response5;
             
              //////////////map-data///////////////////////
this.service.map_data().subscribe((res) => {
                this.markerData = res;
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
                  if (!element.properties.numofResources) {
                    element.properties['numofResources'] = 0;
                  }
                });
                this.initMap(data.default['features'], 'map');

                ///////////////////////map-login///////////////
this.service.map_loginpercentage().subscribe((res) => {
                  this.markerData = res;
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

                  this.initMapcontainer( data.default['features'],'mapContainer');
                });

                //////////////////////////////////////////////
              });

              ///////////////////////////map-data//////////
            });
          });
        });
      });
    });
  }
  ///////map-login//////
  initMapcontainer(data, id) {
    const lat = 15.999337593805994;
    const lng = 80.95896916007721;
    globalMap = L.map(id, { zoomControl: false }).setView([lat, lng], 6);
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
        token:
          'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
        id: 'mapbox.streets',
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        minZoom: 4,
        maxZoom: 18,
      }
    ).addTo(globalMap);

    data.sort((a, b) =>
      Number(a.properties.login_percentage) >
      Number(b.properties.login_percentage)
        ? 1
        : Number(b.properties.login_percentage) >
          Number(a.properties.login_percentage)
        ? -1
        : 0
    );
    var colors: any = this.color().generateGradient(
      '#FF0000',
      '#7FFF00',
      data.length,
      'rgb'
    );

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
  ///////map-login/////////////

  /////////////mapdata////////////////////
  initMap(data, id) {
    const lat = 15.999337593805994;
    const lng = 80.95896916007721;
    globalMap = L.map(id, { zoomControl: false }).setView([lat, lng], 6);
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
        token:
          'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
        id: 'mapbox.streets',
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        minZoom: 4,
        maxZoom: 18,
      }
    ).addTo(globalMap);

    data.sort((a, b) =>
      Number(a.properties.numofResources) > Number(b.properties.numofResources)
        ? 1
        : Number(b.properties.numofResources) >
          Number(a.properties.numofResources)
        ? -1
        : 0
    );
    var colors: any = this.color().generateGradient(
      '#FF0000',
      '#7FFF00',
      data.length,
      'rgb'
    );

    var i = 0;
    var index;
    function getColor(d) {
      index = i;
      i++;
      return colors[index];
    }

    function style(feature) {
      return {
        fillColor: getColor(feature.properties.numofResources),
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
      const popup = R.responsivePopup({
        hasTip: true,
        autoPan: true,
        offset: [15, 20],
      }).setContent(
        layer.feature.properties
          ? 'District Name : ' +
              layer.feature.properties['District Name'] +
              '<br />' +
              'Number of resources : ' +
              layer.feature.properties['numofResources']
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
    globalMap.on('click', this.onMapClick);
  }

  onMapClick(e) {
   // console.log(e);
  }

  // color gredient generation....
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
  ////////////////mapdata////////////////////

  appcount(result) {
    this.bodhCount = result[0]['numUsers'];

    this.unnatiCount = 0;
    this.samikshaCount = 0;
    //this.unnatiCount = result[2]['numUsers'];
    //this.samikshaCount = result[1]['numUsers'];
  }
  lineChart(result) {
    var date = [];
    var bodh = [];
    var samiksha = [];
    var unnati = [];

    for (var i = 0; i < result.length; i++) {
      date.push(result[i]['date']);
      bodh.push(parseInt(result[i]['bodh']));
      samiksha.push(parseInt(result[i]['samiksha']));
      unnati.push(parseInt(result[i]['unnati']));
    }

    this.linechart = new Chart({
      chart: {
        type: 'spline',
      },
      title: {
        text:'<span style="font-size: 16px ;font-family: Segoe UI ; color:black">Daily Activity Growth By App</span>',

      },
      xAxis: {
        categories: date,
      },
      yAxis: {
       
      },
      series: [
        {
          type: 'spline',
          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">Bodh</span>',
          data: bodh,
        },
        {
          type: 'spline',
          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">Samiksha</span>',
          data: samiksha,
        },
        {
          type: 'spline',
          name:
            '<span style="font-size: 16px ;font-family: Segoe UI; color:black">Unnati</span>',
          data: unnati,
        },
      ],
      exporting: {
        enabled: true,
      },
    });
  }

  barChart(result) {
    var User_FirstName = [];
    var TotalScore = [];

    for (var i = 0; i < result.length; i++) {
      User_FirstName.push(result[i]['User_FirstName']);
      TotalScore.push(parseInt(result[i]['TotalScore']));
    }

    this.barchart = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI; color:black">Top Scores in All Quizzes</span> ',
      },
      xAxis: {
        categories: User_FirstName,
      },
      yAxis: {
        title: {
          text: '',
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          type: 'bar',
          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">Total Score</span>',
          data: TotalScore,
        },
      ],
      exporting: {
        enabled: true,
      },
    });
  }
}
