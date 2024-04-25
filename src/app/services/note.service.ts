import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  SaveEmployeeDocument,
  EmployeeDocument,
  newDocumentData,
} from '../data-types/notes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private requestURL = 'http://localhost:8090/employee-document';

  constructor(private http: HttpClient) {}

  createNote(note: SaveEmployeeDocument): Observable<EmployeeDocument> {
    return this.http.post<EmployeeDocument>(
      this.requestURL + '/create-document',
      note,
    );
  }

  getDocuments(): Observable<EmployeeDocument[]> {
    return this.http.get<EmployeeDocument[]>(
      `${this.requestURL}/get-documents/${localStorage.getItem('userId')}`,
    );
  }

  deleteDocument(id: any): Observable<any> {
    return this.http.delete(`${this.requestURL}/${id}`);
  }

  getDocument(id: any): Observable<EmployeeDocument> {
    return this.http.get<EmployeeDocument>(
      `${this.requestURL}/get-document/${id}`,
    );
  }

  updateDocument(document: EmployeeDocument): Observable<EmployeeDocument> {
    return this.http.put<EmployeeDocument>(
      `${this.requestURL}/update-document`,
      document,
    );
  }
}
