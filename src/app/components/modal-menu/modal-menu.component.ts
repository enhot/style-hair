import { Component } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrl: './modal-menu.component.scss',
})
export class ModalMenuComponent {
  constructor(public activeOffcanvas: NgbActiveOffcanvas) {}
}
