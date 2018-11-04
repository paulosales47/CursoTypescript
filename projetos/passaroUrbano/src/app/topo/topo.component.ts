import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aws-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  public pesquisaOferta(event: Event): void {
    let termo = (<HTMLInputElement>event.target).value;
    console.log(termo);
  }

  ngOnInit() {
  }

}
