import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_URL = environment.API_URL + 'api/teacher/';
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
export class TeacherService {

    constructor(private http: HttpClient) {
    }


    addNewTeacher(newTeacher): Observable<any> {
        return this.http.post(API_URL + 'new-teacher', newTeacher, httpOptions);
    }

    fetchAllTeachers(): Observable<any> {
        return this.http.get(API_URL + 'teachers-list');
    }

    removeTeacher(id): Observable<any> {
        return this.http.delete(API_URL + 'remove-teacher/' + id);
    }



}
