import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Ironman', 'Capitan America'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    console.log('Borrando..');
    //this.heroes.splice(this.heroes.length-1);
    this.heroeBorrado = this.heroes.shift() || ''; 
  }
}