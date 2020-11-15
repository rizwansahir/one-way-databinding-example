import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! {{title}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() title: string;
   ngOnInit(){
    console.log("Name is "+ this.name + " Title is " + this.title);
  }
}
