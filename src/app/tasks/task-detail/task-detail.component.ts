// import{Component, Input, OnInit} from '@angular/core';
import{Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import{Location} from '@angular/common';

import { Task } from '../shared/task.model';
import {TaskService} from '../shared/task.service';

@Component({
selector: 'task-detail',
templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit {
    // @Input() public task: Task;
    public task: Task;
    public taskDoneOptions: Array<any> = [
      
        { value: false, text: "Pendiente"},
        {  value: true, text: "Feita"}
       
    ]
    
    public constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ){
        // this.task = new Task(1,'tarea realizada');
    }

    public ngOnInit(){
        this.route.params
        .switchMap((params: Params)=> this.taskService.getById(+params['id']))
        .subscribe(
            task => this.task = task,
            error => alert("Ocurrio un error no servidor")
        
        )
    }

    public ngAfterViewInit(){
       
    }

    public goBack(){
        this.location.back();
    }

    public updateTask(){
        if(!this.task.title)
        {
            alert("a tarefa esta presente");
        }else{
            this.taskService.update(this.task)
            .subscribe(
                () => alert("Actulizado con sucesso"),
                () => alert("Ocurrio un error no servidor")
            
            )
        }
    }

    public showFieldError(field):boolean{
        return field.invalid && (field.touched || field.dirty)
    }

}