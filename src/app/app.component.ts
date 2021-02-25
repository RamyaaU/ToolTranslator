import { Component } from '@angular/core';
import {TranslateService} from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToolTranslator';

  constructor(public translateService: TranslateService) {}
  text:string;
  translatedText : string;

  submit(){
    this.translateService.translate(this.text).subscribe((result) =>{
      this.translatedText = result;
    });
  }
}
