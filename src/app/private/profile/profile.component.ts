import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { HttpClient} from '@angular/common/http';
import { GetUserDetailsService} from './get-user-details.service';
import { PutUserDetailsService} from './put-user-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private fb: FormBuilder , private userService: GetUserDetailsService , private updateService: PutUserDetailsService) { }

  profileForm;
  userId:string;
  data:any;
  
  ngOnInit() {
    this.profileForm = this.fb.group({
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required],
      brief:[''],
      password:[''],
      lastname:['']
    });
    this.userId=localStorage.getItem('email');
    console.log(this.userId);
    this.userService.getUser(this.userId).subscribe(Response=>{
      console.log(Response);
      this.data =Response;
      this.profileForm.controls['firstname'].setValue(this.data.firstname);
      this.profileForm.controls['email'].setValue(this.data.email);
      this.profileForm.controls['address'].setValue(this.data.address);
      this.profileForm.controls['brief'].setValue(this.data.brief);
      this.profileForm.controls['password'].setValue(this.data.password);
      this.profileForm.controls['lastname'].setValue(this.data.lastname);
      this.profileForm.controls['phone_number'].setValue(this.data.phone_number);
      
      
    });
  }

  onUpdate = function (user) {
    if ( this.profileForm.invalid){
      return;
    }
    console.log(user);
    this.updateService.updateUser(this.profileForm.value,this.userId).subscribe(response => {
     // var data = JSON.parse(response);
     // console.log(data);
    });
     alert("Profile updated sucessfully!!");
  
  }


}
