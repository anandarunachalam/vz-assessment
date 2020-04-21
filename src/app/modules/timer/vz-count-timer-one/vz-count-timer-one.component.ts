import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-vz-count-timer-one',
  templateUrl: './vz-count-timer-one.component.html',
  styleUrls: ['./vz-count-timer-one.component.scss']
})
export class VzCountTimerOneComponent  {

  formGroup: FormGroup;
  formEmptyMsg: string = 'This field is required';
  formPostData: any = '';

  countTimeLeft: number = 0;
  countInterval;
  countSubscribe: any;
  countStart = 0;
  countPause = 0;
  countPauseStatus = false;
  countAddedRecent = []
  today: number = Date.now();

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        this.formGroup.get('name').setValidators(Validators.required);
        this.formGroup.get('name').updateValueAndValidity();
      })
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  onSubmit(vzFrmData) {
    
    console.log(this.countAddedRecent);
    
    if(this.countPauseStatus === false ) {
      this.countPauseStatus = true;
      this.countAddedRecent.push({timestamp:this.today,status:"Started at"});
      this.countStart++
    } else {
      this.countPauseStatus = false;
      this.countAddedRecent.push({timestamp:this.today,status:"Paused at"});     
      this.countPause++
    }
    console.log(this.countPauseStatus)
    this.formPostData = vzFrmData;

    if (vzFrmData.name === null) {
     // console.log('form not submitted');
    } else {
      clearInterval(this.countInterval);
      this.countTimeLeft = vzFrmData.name;
      this.startTimer()
    }   
  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.countSubscribe = this.countTimeLeft - val;
    });
  }

  startTimer() {
    this.countInterval = setInterval(() => {
      if (this.countTimeLeft > 0) {
        this.countTimeLeft--;
      } else {
        this.countTimeLeft = 60;
      }
    }, 1000)
    
  }

  pauseTimer() {
    this.countTimeLeft = 0;
    clearInterval(this.countInterval);
  }

}
