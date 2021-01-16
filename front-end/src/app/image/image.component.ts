import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  link: String;
  img: String;
  all: Number; 
  index: Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.initParam();
  }

  initParam(){
    this.route.params.subscribe(params => {
      debugger
      this.all = params['qtd'];
      this.img = params['img'];
      this.index = params['num'];
      this.link = "http://localhost:9999/images/" + params['img'];
    });
  }

}
