import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ModalMenuComponent } from '../modal-menu/modal-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}
  open() {
    const offcanvasRef = this.offcanvasService.open(ModalMenuComponent, {});
    offcanvasRef.componentInstance.name = 'World';
  }
}
