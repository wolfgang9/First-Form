import { Component } from '@angular/core';
import { User } from './user';
import 
{ EnrollmentService }from './enrollment.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  topics = ['Angular Developer', 'React Developer', 'Vue Developer', 'MEAN Stack Devops'];

topicHasError=true;
  userModel = new User('Rob', 'rob@test.com',7766999548,'default','morning');
  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError=true;
    } else{
      this.topicHasError=false;
    }
  }
  onSubmit(){
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(data => console.log('Success!', data),
    error => console.error('Error!',   error))
  }
}
