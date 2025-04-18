import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';

//função para adicionar o icon
import { addIcons } from 'ionicons';

//importar icone
import {ellipseOutline, checkmarkCircle, eyeOff, eye, trash} from 'ionicons/icons'

import { Task } from '../service/taks.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    FormsModule,
    IonInput,
    IonButton,
    IonList,
    IonLabel,
    IonIcon,
    IonItem
  ],
})

export class HomePage {

  tasks: Task[] = [];
  newTask: string = '';

  exibirConcluidos: boolean = true;

  addTask() {
    //trin tira os espaços em branco
    if (this.newTask.trim()) {
      const newTaskObj: Task = { //cria o objeto Task
        id: Date.now(),
        title: this.newTask.trim(),
        completed: false,
      };
      this.tasks.push(newTaskObj);
      this.newTask = '';
    }
    console.log(this.tasks);
  }

  concluir(taskId: number) {
    const task = this.tasks.find((task) => task.id === taskId);
    if(task) {
      task.completed = !task.completed;
    }
    console.log(task)
  }

  deletarTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  constructor() {
    addIcons({ellipseOutline, checkmarkCircle, eyeOff, eye, trash})
  }

  mostrarOcultar() {
    this.exibirConcluidos = !this.exibirConcluidos;
  }

  get filterTasks() {
    return this.tasks.filter((task) => this.exibirConcluidos || !task.completed)
  }
}
