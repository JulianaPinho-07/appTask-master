import { Injectable } from '@angular/core';

import { Preferences } from '@capacitor/preferences'

//interface para criar um "objeto"
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaksService {

  constructor() { }

  addTask () {
    
  }

  getTask () {

  }

  deletarTask() {
    
  }

}
