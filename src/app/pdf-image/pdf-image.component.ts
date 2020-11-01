import { Component, OnInit } from '@angular/core';
import {ReactiveForms}

@Component({
  selector: 'app-pdf-image',
  templateUrl: './pdf-image.component.html',
  styleUrls: ['./pdf-image.component.css']
})
export class PdfImageComponent implements OnInit {
  file = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}