import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.css'
})
export class CreatorComponent {

	constructor(private modal:NgbModal) {}

	openModal() {
	  // Your logic to open the modal goes here
	  this.modal.open(FormComponent);
	}
  }
