import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility-bar',
  templateUrl: './accessibility-bar.component.html',
  styleUrls: ['./accessibility-bar.component.scss']
})
export class AccessibilityBarComponent implements OnInit {
  element = document.querySelector("html")!;
  fontSize = getComputedStyle(this.element).getPropertyValue("font-size");


  constructor() { }

  changeFontSize(type: string) {
    let element = document.querySelector("html")!;
    let size: string | number = getComputedStyle(element).getPropertyValue("font-size");
    size = parseInt(size);
    switch(true) {
      case type == 'increase-font' && size < 22:
        this.element.style.fontSize = (size + 2) + "px";
        break;
      case type == 'decrease-font' && size > 10:
        this.element.style.fontSize = (size - 2) + "px";
        break;
      case type == 'default-font':
        this.element.style.fontSize = localStorage.getItem('globalFontSize')!;
    }
  }

  ngOnInit(): void {
    localStorage.setItem("globalFontSize", this.fontSize);
    console.log(this.fontSize);
  }

}
