import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_URL = environment.API_URL + 'api/classe/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT',
        'Access-Control-Allow-Origin': '*'
    }),
};
@Injectable({
    providedIn: 'root'
})
export class ClasseService {

    constructor(private http: HttpClient) {
    }


    addNewClasse(newClasse): Observable<any> {
        return this.http.post(API_URL + 'new-classe', newClasse, httpOptions);
    }


    fetchAllClasses(): Observable<any> {
        return this.http.get(API_URL + 'classes-list');
    }



}
