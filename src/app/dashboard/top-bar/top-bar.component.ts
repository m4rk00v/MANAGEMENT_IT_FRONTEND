import { Component } from '@angular/core';
import { DashboardService } from "../dashboard.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpLoginComponent } from '../../pages/frontoffice/pop-up-login/pop-up-login.component';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {
  constructor(
    private dashboard: DashboardService,
    private dialog: MatDialog
  ) {}

  // Configuración personalizada para evitar problemas con el fondo
  config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true, // Mantiene el fondo semi-transparente
    backdropClass: 'no-padding-backdrop', // Clase personalizada
    panelClass: 'no-margin-dialog', // Clase para modificar el contenedor
    width: '150vw',
    position: {
      top: '50%',
      left: '50%',
    },
  };

  openSidebar() {
    this.dashboard.openSidebar();
  }

  openLoginPopup() {
    this.dialog.open(PopUpLoginComponent, this.config);
  }
}
