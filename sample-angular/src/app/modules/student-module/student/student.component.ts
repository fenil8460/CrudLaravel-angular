import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  data:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent(){
    this.http.get('http://127.0.0.1:8000/api/student').subscribe((res)=>{
      this.data = res;
      this.data = this.data.results;
    })
    }

}
