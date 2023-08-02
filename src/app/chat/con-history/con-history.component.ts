import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-con-history',
  templateUrl: './con-history.component.html',
  styleUrls: ['./con-history.component.scss']
})
export class ConHistoryComponent implements OnInit{
  CurrentUser:string|undefined;
   
constructor(){}

ngOnInit(): void {
  this.CurrentUser!=localStorage.getItem('CurrentUserID');
}




}
