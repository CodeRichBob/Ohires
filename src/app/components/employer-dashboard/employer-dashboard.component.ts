import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobseekerProfile } from 'src/app/models/JobseekerProfile';
import { JobseekerprofileService } from 'src/app/services/jobseekerprofile.service';
import { JobseekersService } from 'src/app/services/jobseekers.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { render } from 'creditcardpayments/creditCardPayments';


@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {

  jobseekerId!:any;

  jobseekerprofile!: JobseekerProfile[];

  constructor(
    private jobseekerprofileService:JobseekerprofileService,
    private jobseeker:JobseekerprofileService,
    private router: ActivatedRoute,
    ) { 
      render(
        {
          id:"#paypalRef",
          currency:"USD",
          value:"9.99",
          onApprove:(details) =>{
            alert("Transaction successful")

          }
        }
      )
      // render(
      //   {
      //     id:"#paypalRef1",
      //     currency:"USD",
      //     value:"19.99",
      //     onApprove:(details) =>{
      //       alert("Transaction successful")

      //     }
      //   }
      // )
      // render(
      //   {
      //     id:"#paypalRef2",
      //     currency:"USD",
      //     value:"29.99",
      //     onApprove:(details) =>{
      //       alert("Transaction successful")

      //     }
      //   }
      // )
    }

    jobseekerProfileForm= new FormGroup({
      jobseekerId: new FormControl(''),
      fullname: new FormControl(''),
      image:new FormControl(''),
      gender: new FormControl(''),
      resume: new FormControl(''),
      about_me:new FormControl(''),
      phone_number: new FormControl(''),
      email:new FormControl(''),
      location:new FormControl(''),
      educational_qualification:new FormControl(''),
      professional_designation:new FormControl(''),
      experience_years:new FormControl(''),
      employer:new FormControl(''),
      job_category:new FormControl(''),
      salary:new FormControl(''),
      availability:new FormControl(''),
      create_at:new FormControl(''),
    });

  
  

  
  ngOnInit(): void {
    this.getJobseekerProfile()
  }
  getJobseekerProfile(): void{
    this.jobseekerprofileService.getJobseekerProfile().subscribe(jobseekerprofile=>{
      this.jobseekerprofile=jobseekerprofile;
      console.log(jobseekerprofile);
    })
  }

  SaveJobseekerProfileData(){
    console.log(this.jobseekerProfileForm.value)
    this.jobseeker.saveJobseekerProfileData(this.jobseekerProfileForm.value).subscribe((result)=>{
      console.log(result);
    });
  }

  deleteJobseekerProfile(jobseekerId: any){
    // console.log(jobseekerId);
    this.jobseeker.deleteJobseekerProfile(this.jobseeker).subscribe((result)=> {
      // console.log (result);
      this.ngOnInit();
    });
  }

  

}