import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enquete } from '../models/enquete.model';
import { map } from 'rxjs/operators';


const baseUrl = 'http://localhost:5001/api/enquetes/';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Enquete[]> {
   // return this.http.get<Enquete[]>(baseUrl);

    return this.http.get(baseUrl).pipe(map((data: any) => {
      return data;
     }));
  }

  get(id: any): Observable<Enquete> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  vote(id: any): Observable<Enquete> {
    
    var jsonVar = {"optionId": id};
    var url = 'http://localhost:5001/api/enquetes/vote/';
    return this.http.post(url,{"optionId": id});
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Enquete[]> {
    return this.http.get<Enquete[]>(`${baseUrl}?title=${title}`);
  }
}
