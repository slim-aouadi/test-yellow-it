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

    fetchTeacherDetails(id): Observable<any> {
        return this.http.get(API_URL + 'teacher-details/' + id);
    }

    removeTeacher(id): Observable<any> {
        return this.http.delete(API_URL + 'remove-teacher/' + id);
    }


    updateTeacherDetails(updatedTeacher): Observable<any> {
        return this.http.put(API_URL + 'update-teacher/' + updatedTeacher.id, updatedTeacher, httpOptions);
    }



}
