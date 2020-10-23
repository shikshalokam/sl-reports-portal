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
