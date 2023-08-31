import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ModalConfirmComponent } from "./modal-confirm.component";

export interface ModalConfirmDTO {
  title: string
  message: string
}

@Injectable()
export class ModalConfirmService {

  constructor (private ngbModal: NgbModal) {

  }

  public open(modalConfirmDTO: ModalConfirmDTO) {
    const ngbModalRef = this.ngbModal.open(ModalConfirmComponent, { centered: true, windowClass: 'modal-confirm' })
    ngbModalRef.componentInstance.title = modalConfirmDTO.title;
    ngbModalRef.componentInstance.message = modalConfirmDTO.message;

    return ngbModalRef.closed;
  }
}
