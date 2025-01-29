import { CommonModule } from '@angular/common';
import { Component, OnInit, signal  } from '@angular/core';
import { CreatorService } from '../creator.service';

import { ConfirmComponent } from './confirm/confirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { Creator } from '../creator.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule , ConfirmComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

	creators = signal<Creator[]>([]);
	constructor(
		private creatorService : CreatorService ,
		private modalService: NgbModal 
	){}
	ngOnInit():void{
	
		//this.creators=this.creatorService.getCreators()
		this.creators = this.creatorService.creators;
	}

	openModal(){
		this.modalService.open(FormComponent)
	}
	
deleteCreator(id:number){
	this.creatorService.deleteCreator(id)
	
	
	//this.creatorService.deleteCreator(creator.id)
	//const indexToRemove=this.creators.indexOf(creator)
	//this.creators.splice(indexToRemove, 1);
}
openDeleteModal(creator:any){
	const dialogRef = this.modalService.open(ConfirmComponent)
	dialogRef.componentInstance.creatorData=creator
	dialogRef.result.then(data=>{
		if(data=='ok'){
			this.deleteCreator(creator)
		}
	})
}
updateCreator(creator:any){
	const dialogRef=this.modalService.open(FormComponent)
	dialogRef.componentInstance.creatorData=creator
	dialogRef.componentInstance.action="Modifier"
}
}
