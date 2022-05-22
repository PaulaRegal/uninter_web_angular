//Classe responsável por salvar os dados do usuário no navegador

//Imports do projeto
import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import { Student } from '../form-student/models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private localStorageService: LocalStorageService) { }

  //salva os dados atraves do id
  saveStudent(student: Student) {
    try {
      console.log("saveStudent: objectSaved");
      this.localStorageService.set(student.id, student)
    } catch (err) {
      console.log("saveStudent: objectUnsaved_error= " + err);
    }
  }

  //recupera os dados atraves do id
  private getStudent(studentId: string): Student {
    console.log("getStudent: id=" + studentId);
    return this.localStorageService.get(studentId);
  }

  //retorna uma lista de todos os dados salvos
  getAllStudents(): Student[] {
    return this.localStorageService.keys().map(id => this.getStudent(id));
  }
}
