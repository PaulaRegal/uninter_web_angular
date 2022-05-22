//representa a parte logica do student-list.components.html

//import do projeto
import { Component, OnInit } from '@angular/core';
import { Student } from '../form-student/models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  //lista que armazenará as informações do formulário
  studentList!: Student[];
  constructor(private studentService: StudentService) { }

  //função que ao inicializar recupera os dados do studentService (dados salvos no navegador) e armazena na lista
  ngOnInit(): void {
    this.studentList = this.studentService.getAllStudents();
  }

}
