import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// dashboard components
import { LayoutComponent } from './dashboard/layout/layout.component';
import { TopBarComponent } from './dashboard/top-bar/top-bar.component';
import { OverlayComponent } from './dashboard/overlay/overlay.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './dashboard/sidebar/sidebar-item/sidebar-item.component';
import { SidebarItemsComponent } from './dashboard/sidebar/sidebar-items/sidebar-items.component';
import { SidebarHeaderComponent } from './dashboard/sidebar/sidebar-header/sidebar-header.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { BillComponent } from './pages/bill/bill.component';
import { AnalyticComponent } from './pages/analytic/analytic.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { DocIconComponent } from './dashboard/icons/doc-icon/doc-icon.component';
import { ApplicationComponent } from './pages/application/application.component';
import { DemographicComponent } from './pages/demographic/demographic.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

// icons
import { AppIconComponent } from './dashboard/icons/app-icon/app-icon.component';
import { BillIconComponent } from './dashboard/icons/bill-icon/bill-icon.component';
import { HomeIconComponent } from './dashboard/icons/home-icon/home-icon.component';
import { AnalyticIconComponent } from './dashboard/icons/analytic-icon/analytic-icon.component';
import { MonitoringIconComponent } from './dashboard/icons/monitoring-icon/monitoring-icon.component';
import { DemographicIconComponent } from './dashboard/icons/demographic-icon/demographic-icon.component';

// others
import { DocComponent } from './components/docs/doc/doc.component';
import { ContentComponent } from './components/content/content.component';
import { SnippetComponent } from './components/docs/snippet/snippet.component';
import { FolderIconComponent } from './components/docs/icons/folder-icon/folder-icon.component';
import { AngularIconComponent } from './components/docs/icons/angular-icon/angular-icon.component';
import { LandingPageComponent } from './pages/frontoffice/landing-page/landing-page.component';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';




import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {

  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PopUpLoginComponent } from './pages/frontoffice/pop-up-login/pop-up-login.component';


@NgModule({
  declarations: [
    AppComponent,

    // dashboard
    LayoutComponent,
    TopBarComponent,
    OverlayComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemsComponent,
    SidebarHeaderComponent,

    // pages
    HomeComponent,
    BillComponent,
    AnalyticComponent,
    SettingsComponent,
    MonitoringComponent,
    ApplicationComponent,
    DemographicComponent,
    DocumentationComponent,
    LandingPageComponent,
   

    // icons
    DocIconComponent,
    AppIconComponent,
    BillIconComponent,
    HomeIconComponent,
    AnalyticIconComponent,
    MonitoringIconComponent,
    DemographicIconComponent,

    // others
    DocComponent,
    SnippetComponent,
    ContentComponent,
    FolderIconComponent,
    AngularIconComponent,
    LandingPageComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule,MatDialogModule],
  providers: [ { provide: MAT_DIALOG_DATA, useValue: {} },
    
    { provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
})
export class AppModule {}
