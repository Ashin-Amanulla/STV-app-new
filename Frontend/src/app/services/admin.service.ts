import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api: string = 'http://localhost:3400/api'

  constructor(private http: HttpClient) { }

  declareElection(item: any) {
    return this.http.post(`${this.api}/election`, item)
  }  

  addPosition(item:any):Observable<any[]>{
    return this.http.post<any[]>(`${this.api}/position`, item)
  }

  getPosition(){
    return this.http.get(`${this.api}/position`)
  }

  deletePosition(id:any){
    return this.http.delete(`${this.api}/position/${id}`)
  }

  editPosition(id:any){
    return this.http.get(`${this.api}/position/${id}`)
  }
}
