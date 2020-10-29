import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';


@Component({
  selector: 'app-program-effectiveness',
  templateUrl: './program-effectiveness.component.html',
  styleUrls: ['./program-effectiveness.component.scss'],
})
export class ProgramEffectivenessComponent implements OnInit{
  
  constructor(public http:HttpClient,private service: AppServiceComponent) {}

  ngOnInit() {

   
  }

  


}
