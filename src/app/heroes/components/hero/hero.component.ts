import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;


  public get capitalizedName() : string {
    return this.name.toUpperCase();
  }


  public set capitalizedName(v : string) {
    this.name = v;
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 28;

  }

  resetForm(): void{
    this.name = 'Ironman';
    this.age = 45;

    // document.querySelectorAll('h1').forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }
}
