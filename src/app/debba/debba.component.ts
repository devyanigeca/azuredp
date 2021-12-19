import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

   folder_data = {
        "status": "success",
        "clientId": 1,
        "clientYearId": 1,
        "folders": [
            {
                "ClientFolderId": 3,
                "ParentClientFolderId": 1,
                "FolderName": "W2 Taxpayer (1)",
                "FolderDescription": "W2 for Jane",
                "DMSExternalId": null,
                "VisibleToClient": true,
                "NeedApproval": true,
                "NotifyFirmOnUpload": true,
                "Documents": [
                    {
                        "ClientDocumentId": 1,
                        "ClientFolderId": 3,
                        "DocumentName": "W2-Taxpayer1.pdf",
                        "DMSExternalId": null,
                        "Status": "SUCC",
                        "Notes": null
                    }
                ]
            },
            {
                "ClientFolderId": 4,
                "ParentClientFolderId": 1,
                "FolderName": "W2 Spouse (1)",
                "FolderDescription": "W2 for spouse",
                "DMSExternalId": null,
                "VisibleToClient": true,
                "NeedApproval": true,
                "NotifyFirmOnUpload": true,
                "Documents": [
                    {
                        "ClientDocumentId": 2,
                        "ClientFolderId": 4,
                        "DocumentName": "W2-Spouse1.pdf",
                        "DMSExternalId": null,
                        "Status": "PEND",
                        "Notes": null
                    }
                ]
            },
            {
                "ClientFolderId": 5,
                "ParentClientFolderId": 1,
                "FolderName": "480.6A",
                "FolderDescription": null,
                "DMSExternalId": null,
                "VisibleToClient": true,
                "NeedApproval": true,
                "NotifyFirmOnUpload": true,
                "Documents": [
                    {
                        "ClientDocumentId": 3,
                        "ClientFolderId": 5,
                        "DocumentName": "480.6A-1.pdf",
                        "DMSExternalId": null,
                        "Status": "PEND",
                        "Notes": null
                    },
                    {
                        "ClientDocumentId": 4,
                        "ClientFolderId": 5,
                        "DocumentName": "480.6A-2.pdf",
                        "DMSExternalId": null,
                        "Status": "PEND",
                        "Notes": null
                    }
                ]
            }
        ]
    }
 
  isTableExpanded = false;

  statuses: StatusOptions[] = [
    {value: 'PEND', viewValue: 'Pending', color: 'yellow'},
    {value: 'SUCC', viewValue: 'Success', color: 'green'},
    {value: 'FAIL', viewValue: 'Failed', color: 'red'},
  ];

  dataFolderList = new MatTableDataSource();
  displayedFolderColumnsList: string[] = ['ClientFolderId', 'FolderName', 'FolderDescription',  'Action'];

  constructor() { }

  ngOnInit() {
    
    this.folder_data.folders.forEach(element => {
      element["isExpanded"] = false;
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
    console.log('url: ' + base);
    return base;

  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
