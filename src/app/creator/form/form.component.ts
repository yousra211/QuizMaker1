import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreatorService } from '../creators.service';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
	formCreator;
  creatorData:any
action:string="Ajouter"
photo !: File

	constructor(
	  private fb: FormBuilder,
	  private creatorService: CreatorService,
	  private activeModal: NgbActiveModal
	) {
	  // Initialize the form here to ensure `fb` is available
	  this.formCreator = this.fb.group({
		"id": ['', Validators.required],
		"fullname": ['', Validators.required],
		"username": ['', Validators.required],
		"email": ['', Validators.required],
		"password": ['', Validators.required]
	  });
	}
	
	actionCreator(){
		if(this.action=="Ajouter"){
			this.ajouterCreator()
		}
else{
	this.updateCreator(this.formCreator.value)
}
this.activeModal.close();
	}
  
	ajouterCreator() {
	  this.creatorService.addCreator(this.formCreator.value, this.photo)
	}
  
	updateCreator(creator:any){
this.creatorService.updateCreator(creator)
	}

	fermer() {
	  this.activeModal.close();
	}

	ngOnInit(){
		if(this.action=="Modifier")
		this.formCreator.setValue(this.creatorData)
	}
	fileSelected(event:any){
		const file=event.target.files[0]
		if (file)
			this.photo=file
	  }
  }
