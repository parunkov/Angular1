import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  form = new FormGroup({
    title: new FormControl<string>('')
  })
  submit() {
    console.log(this.form.value);
  }
}
