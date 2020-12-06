import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent implements OnInit {

  userName: string;
  userExpArray: any;
  constructor(protected fb: FormBuilder,protected commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.getUserName();
    this.getUserExperiance();
  }

  getUserName(){
    this.commonService.getUserName().subscribe((response)=>{
      this.userName = response['name'];
    })
  }

  getUserExperiance(){
    this.commonService.getUserExperiance().subscribe((response)=>{
      this.userExpArray = response['past_jobs'];
    })
  }

  addUserExperiance(){
    this.commonService.addUserExperiance().subscribe((response)=>{
      console.log(response);
    })
  }

}
