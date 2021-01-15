import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatTable } from '@angular/material/table';
import {Observable} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  teste: string[] = ['teste1','teste2','teste3','teste4','teste5'];

  dataSource: any;
  pagination: any;

  req: any = {"pag": 0, "qtd": 5};

  constructor(public ApiService: ApiService) {}

  ngOnInit() {
    this.initData();
  }

  initData(){
    this.ApiService.getImages(this.req).subscribe(response => {
      this.dataSource = response.list;
      this.pagination = {"all": response.all, "first": response.first, "last": response.last};
    });
  }

  handlePageEvent(event: PageEvent) {
    this.req.pag = event.pageIndex;
    this.initData(); 
  }

}
