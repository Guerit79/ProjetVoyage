import { Component } from '@angular/core';



@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent {
  hide = true;
  password = '';

  public passwordVisibility(): void {
    this.hide = !this.hide;
  }



}
