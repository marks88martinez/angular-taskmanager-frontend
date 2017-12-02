import {Component, OnInit} from '@angular/core';


import{ Task } from './shared/task.model';
import { TaskService }from './shared/task.service';
import { error } from 'selenium-webdriver';



@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit{
    public tasks: Array<Task>;
    public newTask: Task;

    public constructor(private taskService: TaskService){
        this.newTask = new Task(null,'');

    }
    public ngOnInit(){
        this.taskService.getAll()


        .subscribe(
            tasks => this.tasks = tasks,
            error => alert("Ocurrio un error no servidor")
        )

    };

    public createTask(){
        this.newTask.title = this.newTask.title.trim();

        if(!this.newTask.title){
            alert("A tarefa debe ter un titulo");
        }else{
            this.taskService.create(this.newTask)
            .subscribe(
               (task)=>{
                   this.tasks.push(task);
                    this.newTask = new Task(null, '');
               },
               ()=>alert("Ocorreo un erro no servidor tente mais tarde")
                    )
        }
    }

    public deleteTask(task: Task){
        if(confirm(`Desea realmente eliminar "${task.title}"`))
        {
            this.taskService.delete(task.id)
            .subscribe(
                ()=>this.tasks = this.tasks.filter(f=>f !== task),
                ()=>alert("Ocorreo un erro no servidor tente mais tarde")
            )
        }
    }


}