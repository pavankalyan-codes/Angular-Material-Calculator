import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';

  input:string="1+6+3+5";
  output:string="15";

  evaluate(){
    console.log(this.input);
    
    this.output=eval(this.input);
  }

  addToInput(literal){
    if(this.input.length>50)
    {
      this.input='';
      this.output='';
      alert("Hello this is normal calculator. Not a super Computer")
      return;
    }
    if(literal === 'AC')
    {
      this.input='';
      this.output='';
      return
    }
    if(literal === 'BS')
    {
      this.input=this.input.substring(0,this.input.length-1)
      return;
    }
    if(literal === 'x')
    {
      this.input+='x';
      return;
    }


    this.input+=literal;
    let exp=this.input.replace('x','*')
    this.output=eval(exp)
  }

  
}


