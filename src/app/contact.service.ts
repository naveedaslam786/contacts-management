import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = "http://localhost:3333/contacts/"
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.url)
  }
  getContactbyId(id: any) {
    return this.http.get(`http://localhost:3333/contacts/${id}`)
  }
}
