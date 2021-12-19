import { Injectable } from '@angular/core';

var folderData = {
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
                  },
                   {
                        "ClientDocumentId": 5,
                        "ClientFolderId": 5,
                        "DocumentName": "hola.pdf",
                        "DMSExternalId": null,
                        "Status": "PEND",
                        "Notes": "in review"
                    },
                    {
                          "ClientDocumentId": 43,
                          "ClientFolderId": 5,
                          "DocumentName": "481.6A-2.pdf",
                          "DMSExternalId": null,
                          "Status": "PEND",
                          "Notes": null
                      }
              ]
          }
      ]
  }

@Injectable({
  providedIn: 'root'
})
export class MainService {

 

  constructor() { }

  getTableDate(){
    return folderData;
  }

}
