import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../service/api.service';


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
  
  templates: any;
  images: any;

  constructor(private route: ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit() {
    this.initParam();
    this.initTemplate();
  }
  
  initParam(){
    this.route.params.subscribe(params => {
      this.all = params['qtd'];
      this.index = params['num'];
      this.img = params['img'];
      this.link = "http://localhost:9999/images/" + params['img'];

      this.initData(this.all);
    });
  }

  initData(all){
    let req = {"pag": 0, "qtd": all};

    this.ApiService.getImages(req).subscribe(response =>{
      this.images = response.list; 
    });
  }
  
  initTemplate(){
    this.ApiService.getTemp().subscribe(response =>{
      this.templates = response;
    });
  }

  templateFields(temp){
    return this.templates.templateFields[temp];
  }

  next(){
    let num: number = +this.index + 1;
    let element = this.images[num];

    if(num < Number(this.all)){
      this.index = num;
      this.img = element;
      this.link = "http://localhost:9999/images/" + element;
    }
  }
  
  back(){
    let num: number = +this.index - 1;
    let element = this.images[num];
    
    if(num >= 0){
      this.index = num;
      this.img = element;
      this.link = "http://localhost:9999/images/" + element;
    }
  }

  save(){

  }

}
