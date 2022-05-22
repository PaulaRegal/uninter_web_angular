//arquivo que representa a logica do form-student.component.html

//imports do projeto
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './models/student.model';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {

  //instanciação da model Student e criação de lista de estudantes
  student!: Student; 
  studentList!: Student[];
  constructor(private studentService: StudentService) { }

  //função que inicializar a variavel student
  ngOnInit(): void {
    this.student = new Student();
  }

  //função que pega as informações do formulário e salva na memória do navegador
  onSubmitForm(form: NgForm) {
      console.log(form.value);
      this.student = form.value;
      this.student.id = new Date().getTime().toString();
      this.studentService.saveStudent(this.student);
      form.resetForm();
  }
}
