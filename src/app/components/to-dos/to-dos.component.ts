import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  tasks:Task[];
  inputTask:string;
  
  constructor() { }

  ngOnInit(): void {
    this.inputTask = "";
    this.tasks=[]
  }


  // funktion um einen gemachten Task zu markieren
  toggleDone(id:number){
    this.tasks.map((undonetasks, i) =>{
      if (i == id){
        undonetasks.completed = !undonetasks.completed;
      }
      return undonetasks;
    }
    )
  }
  //funktion um einen Task zu löschen
  deleteTask(id:number){
    this.tasks = this.tasks.filter((undonetasks, i) => i !== id);
    
  }

  //funktion um neuen Task zu addieren
  addNewTask(){
    this.tasks.push({
      task:this.inputTask,
      completed:false

    });
    this.inputTask ="";
  }



}
