import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Document } from '../model/Document.model';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @ViewChild('selectDocType') SelectDocType: any;
  @ViewChild('formFields') FormFields: any;

  data: Document;

  link: String;
  img: String;
  all: Number; 
  index: Number;
  
  templates: any;
  images: any;

  document: Document;

  constructor(private route: ActivatedRoute, private ApiService: ApiService, private snackBar: MatSnackBar) { }

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

  openSnackBar(msg) {
    this.snackBar.open(msg, 'Fechar', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
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

    var fields: any[] = [];

    for(let i = 0; i < this.FormFields.nativeElement.length; i++){
      let field = {
        "description": [this.FormFields.nativeElement[i].name], "lst": [{ "result": [{ "value": [this.FormFields.nativeElement[i].value] }] }]
      };
      fields.push(field);
    }

    let data = {
      "metadata": [{
          "docType": [this.SelectDocType.value],
          "bpp": ["24"],
          "dpi": ["72"],
          "orientation": ["1"],
          "extraInfos": [{ "info": [{ "value": ["0"] }] }]
      }],
      "results": [{"field": fields}]
    }

    this.ApiService.saveFields({ "file": this.img, "data": data}).subscribe(response =>{
      if(response.status == 200){
        this.openSnackBar("Sucesso ao salvar campos");
      }else{
        this.openSnackBar("Erro ao salvar campos!");
      }
    });

  }

}
