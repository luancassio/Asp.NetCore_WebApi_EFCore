import { Student } from './../models/Student';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  studentSelected: Student;
  studentForm: FormGroup;
  modalRef: BsModalRef;
  
  public title = 'Lista de Alunos';
  students =[
    {id: 1, name:'Raquel', surname: 'Alana', telephone: 31711957 },
    {id: 2, name:'Márcia', surname: 'Lima', telephone: 33597382 },
    {id: 3, name:'Pedro', surname: 'Henrique', telephone: 45709355 },
    {id: 4, name:'Samuel', surname: 'Oliveira', telephone: 59728336 },
    {id: 5, name:'Simone', surname: 'Souza', telephone: 93877223 },
    {id: 6, name:'Rafael', surname: 'Santos', telephone: 22340994 },
    {id: 7, name:'Rodrigo', surname: 'Silva', telephone: 45588759 },
    {id: 8, name:'Amanda', surname: 'Gomes', telephone: 23664336 },
    {id: 9, name:'Giovanni', surname: 'Costa', telephone: 87385938 },
    {id: 10, name:'Rafael', surname: 'Cardoso', telephone: 96848757 },
    {id: 11, name:'Juliana', surname: 'Barbosa', telephone: 40358093 },
    {id: 12, name:'Stafanny', surname: 'Almeida', telephone: 53749820 },
    {id: 13, name:'Henrique', surname: 'Donati', telephone: 93776483 },
    {id: 14, name:'Luis', surname: 'Miguel', telephone: 87483998 },
    {id: 15, name:'Samara', surname: 'Andrade', telephone: 88589020 }
  ];
  
  constructor( private fb: FormBuilder, private modalService: BsModalService) { 
    this.createForm();
    
  }
  
  ngOnInit() { }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  createForm(){
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }
  
  studentSelect(student: Student){
    this.studentSelected = student;
    this.studentForm.patchValue(student);
  }   
  back(){
    this.studentSelected = null;
  }
  
  studentSubmit(){
    console.log(this.studentForm.value);
  }
  
}
