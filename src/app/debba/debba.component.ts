import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MainService } from '../main.service';

interface StatusOptions {
  value: string;
  viewValue: string;
  color: string;
}

@Component({
  selector: 'app-debba',
  templateUrl: './debba.component.html',
  styleUrls: ['./debba.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DebbaComponent implements OnInit {

   folder_data;
 
  isTableExpanded = false;

  statuses: StatusOptions[] = [
    {value: 'PEND', viewValue: 'Pending', color: 'yellow'},
    {value: 'SUCC', viewValue: 'Success', color: 'green'},
    {value: 'FAIL', viewValue: 'Failed', color: 'red'},
    {value: 'REVW', viewValue: 'Review', color: 'blue'},
  ];

  dataFolderList = new MatTableDataSource();
  displayedFolderColumnsList: string[] = ['ClientFolderId', 'FolderName', 'FolderDescription',  'Action'];

  constructor(private mainservice: MainService) { }

  ngOnInit() {
    this.folder_data = this.mainservice.getTableDate();
    this.folder_data.folders.forEach(element => {
      element["isExpanded"] = false;
      element.Documents.forEach(document => {
        document['isChanged'] = false;
      });
      
    });
    this.dataFolderList.data = this.folder_data.folders;
    console.log(this.folder_data.folders);
  }


  mylog(){
    console.log( this.dataFolderList.data );
  }


  getColor(status){
    this.statuses.forEach(s => {
      if (status == s.value){
        // console.log('returning: ' + s.color);
        return s.color;
      }
    });
    console.log('returning: black' );
    return 'black';
  }

  makeSearchString(str){
    var base = "https://www.google.com/search?q=";

    base = base + str;
    base = base.replace(' ', '+');
    // console.log('url: ' + base);
    return base;

  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
