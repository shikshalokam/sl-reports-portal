import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { KeycloakAngularModule } from 'keycloak-angular';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { initializer } from './keycloak.init';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalCoreModule } from './modules/portal-core/portal-core.module';
import { PortalSharedModule } from './modules/portal-shared/portal-shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { CoreModuleModule } from 'shikshalokam';
import { NgSelectModule } from "@ng-select/ng-select";

import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './chart-modules/home/home.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ComplianceComponent } from './chart-modules/compliance/compliance.component';

// import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
declare var require:any

const exporting = require('highcharts/modules/exporting.src')
const  exportdata = require('highcharts/modules/export-data.src')
const  wordcloud = require('highcharts/modules/wordcloud.src')
import * as Highcharts from 'highcharts';
import { ProgramEffectivenessComponent } from './chart-modules/program-effectiveness/program-effectiveness.component';
import { LearningComponent } from './chart-modules/learning/learning.component';
import { EngagementComponent } from './chart-modules/engagement/engagement.component';
import { TopratedResourceComponent } from './chart-modules/toprated-resource/toprated-resource.component';
import { UserratingBreakdownComponent } from './chart-modules/userrating-breakdown/userrating-breakdown.component';
import { PercentagePergroupComponent } from './chart-modules/percentage-pergroup/percentage-pergroup.component';
import { UserneverloggedinComponent } from './chart-modules/userneverloggedin/userneverloggedin.component';
import { DailyactivePerappComponent } from './chart-modules/dailyactive-perapp/dailyactive-perapp.component';
import { ViewallResourceComponent } from './chart-modules/viewall-resource/viewall-resource.component';
import { DailyactivityGrowthComponent } from './chart-modules/dailyactivity-growth/dailyactivity-growth.component';
import { AverageratingContentComponent } from './chart-modules/averagerating-content/averagerating-content.component';
import { TopscoreAllquizzesComponent } from './chart-modules/topscore-allquizzes/topscore-allquizzes.component';
import { ResourcesPerdistrictComponent } from './chart-modules/resources-perdistrict/resources-perdistrict.component';
import { ActivitypercentagePerdistrictComponent } from './chart-modules/activitypercentage-perdistrict/activitypercentage-perdistrict.component';
import { BarChartComponent } from './chart-modules/bar-chart/bar-chart.component';
import { SplineChartComponent } from './chart-modules/spline-chart/spline-chart.component';
import { ColumnChartComponent } from './chart-modules/column-chart/column-chart.component';
import { PercentageVarianceComponent } from './chart-modules/percentage-variance/percentage-variance.component';
import { LineChartComponent } from './chart-modules/line-chart/line-chart.component';
exporting(Highcharts);
exportdata(Highcharts);
wordcloud(Highcharts);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComplianceComponent,
    MainscreenComponent,
    ProgramEffectivenessComponent,
    LearningComponent,
    EngagementComponent,
    TopratedResourceComponent,
    UserratingBreakdownComponent,
    PercentagePergroupComponent,
    UserneverloggedinComponent,
    DailyactivePerappComponent,
    ViewallResourceComponent,
    DailyactivityGrowthComponent,
    AverageratingContentComponent,
    TopscoreAllquizzesComponent,
    ResourcesPerdistrictComponent,
    ActivitypercentagePerdistrictComponent,
    BarChartComponent,
    SplineChartComponent,
    ColumnChartComponent,
    PercentageVarianceComponent,
    LineChartComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,ChartModule,
    AppRoutingModule,
    KeycloakAngularModule,
    PortalCoreModule,
    PortalSharedModule,
    MatMenuModule,
    CoreModuleModule,
    NgSelectModule,
    TranslateModule.forChild(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SidebarModule,

    ChartModule,



   

   
  ],
  entryComponents: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
