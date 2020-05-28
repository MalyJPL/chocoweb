import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})



export class IngredientsComponent implements OnInit {
  
  counter=0;

  imagenes = [
    {src: '../../assets/img/almendra.png', 
    nombre:'Almendra'},
    {src: '../../assets/img/bananos.png', 
    nombre:'Banano'},
    {scr: -'../../assets/img/curcuma.png', 
    nombre: 'Cúrcuma'},
    {src:'../../assets/img/frutosRojos.png',
  nombre:'Frutos Rojos'}]

  showNextImage() {
    if (this.counter < this.imagenes.length -1) {
      this.counter += 1;
    }
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}



