import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(protected http: HttpClient) { }

  login(obj){
    const body = {
      ...obj
    };
    return this.http.post(`${environment.api_url}/login`, body)
  }

  signUp(obj){
    const body = {
      ...obj
    };
    return this.http.post(`${environment.api_url}/sign_up`, body)
  }

  getUserName(){
    return this.http.get(`${environment.api_url}/user?email_id=`+ localStorage.getItem('userEmailId'))
  }

  getUserExperiance(){
    return this.http.get(`${environment.api_url}/user_job_history?email_id=`+ localStorage.getItem('userEmailId'))
  }

  addUserExperiance(){
    const body = {
      'company_name': 'Microsoft',
      'title': 'Sr. Front End Developer',
      'location': 'Gurugram',
      'start_date': 'Jul 2016 - Jun 2018',
      'description': 'Development of apps, games and websites using PHP, HTML5, CSS3, JavaScript, Jquery, AngularJS, Bootstrap.',
      'email_id': localStorage.getItem('userEmailId')
      };
      return this.http.post(`${environment.api_url}/user_job_history`, body)
  }
}
