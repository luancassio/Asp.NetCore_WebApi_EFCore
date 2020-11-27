import { Teacher } from './../models/Teacher';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  
  teacherSelected: Teacher;
  teacherForm: FormGroup;
  modalRef: BsModalRef;

  
  public title = 'Lista de Professores';
  teachers = [
    {id: 1, name: 'Márcia', surname: 'Andreia', discipline: 'Banco de Dados'},
    {id: 2, name: 'José', surname: 'Vicente', discipline: 'Lógica de Programação'},
    {id: 3, name: 'Anderson', surname: 'Silva', discipline: 'Arquitetura de Software'},
    {id: 4, name: 'Kleber', surname: 'Peixoto', discipline: 'Programação Web'},
    {id: 5, name: 'Nanda', surname: 'Vieira', discipline: 'Engenharia de Software'},
    {id: 6, name: 'Marcos', surname: 'Antonio', discipline: 'Estrutura de Dados'}
  ];
  constructor( private fb: FormBuilder, private modalService: BsModalService) { 
    this.createForm();
    
  }
  
  ngOnInit() { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  createForm(){
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      discipline: ['', Validators.required]
    });
  }
  
  teachertSelect(teacher: Teacher){
    this.teacherSelected = teacher;
    this.teacherForm.patchValue(teacher);
  }   
  back(){
    this.teacherSelected = null;
  }
  
  teacherSubmit(){
    console.log(this.teacherForm.value);
  }
  
  
  
  
}





