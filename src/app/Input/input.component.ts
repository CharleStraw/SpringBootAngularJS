import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'input-app',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  model:InputStudents = {

  id : "",
  name : "",
  course :""

  };

  constructor(private http: HttpClient){


  }

   ngOnInit(){}
/**
   sendInput(): void  {

     console.log("asdad");
    let url = "http://localhost:8080/students";
    this.http.post(url, this.model).subscribe(
                                         res => {
                                           location.reload();
                                         },
                                         err => {
                                           alert("An error has occurred while sending feedback");
                                         }
                                       );


   }


   getInput(): void  {

        console.log("asdad");
       let url = "http://localhost:8080/students";
       this.http.get(url).subscribe(
                                            res => {
                                              location.reload();
                                              alert();

                                            },
                                            err => {
                                              alert("An error has occurred while sending feedback");
                                            }
                                          );


      }


*/



}
export interface InputStudents{

     id: string;
     name: string;
     course: string;


};
