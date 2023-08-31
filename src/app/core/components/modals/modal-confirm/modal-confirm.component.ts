import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {

  public title: string;
  public message: string;

  constructor(private ngbActiveModal: NgbActiveModal) {}

  public accept() {
    this.ngbActiveModal.close();
  }

  public cancel() {
    this.ngbActiveModal.dismiss();
  }
}
