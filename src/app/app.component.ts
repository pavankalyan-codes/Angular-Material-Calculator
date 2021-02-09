import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Calculator';

  input: string = '';
  output: string = '';

  evaluate() {
    console.log(this.input);

    this.setOutput();
  }

  addToInput(literal) {
    if (this.input.length > 50) {
      this.input = '';
      this.output = '';
      alert('Hello this is normal calculator. Not a super Computer');
      return;
    }
    if (literal === 'AC') {
      this.input = '';
      this.output = '';
      return;
    }
    if (literal === 'BS') {
      this.input = this.input.substring(0, this.input.length - 1);
      try {
        this.setOutput();
      } catch (error) {
        console.log(error);
      }
      return;
    }
    if (literal === 'x') {
      this.input += 'x';
      return;
    }

    this.input += literal;
    this.setOutput();
  }

  setOutput() {
    let exp = this.input.split('x').join('*');
    console.log(exp);

    try {
      this.output = eval(exp);
    } catch (error) {
      console.log(error);
    }
  }
}
