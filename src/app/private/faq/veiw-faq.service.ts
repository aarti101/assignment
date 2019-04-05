import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class VeiwFaqService {
  constructor( private http: HttpClient) { } 
getFaqs(getData){ 
return this.http.get('http://localhost:3000/faqs',{ 
params: getData 
}) 
} 

  
}
