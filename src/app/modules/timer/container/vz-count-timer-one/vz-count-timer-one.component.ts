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
  getTimeStmp: number = Date.now();

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'count': [null, Validators.required],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        this.formGroup.get('count').setValidators(Validators.required);
        this.formGroup.get('count').updateValueAndValidity();
      })
  }

  get count() {
    return this.formGroup.get('count') as FormControl
  }

  onSubmit(vzFrmData) {
    
    this.formPostData = vzFrmData;
    if (vzFrmData.count === null) { 
      
    } else {
      clearInterval(this.countInterval);
      this.countTimeLeft = vzFrmData.count;
      this.setCountTimerStatus()
      this.setCountStartTimer()
      
    }   
  }

  setCountTimerStatus() { 
    if(this.countPauseStatus === false ) {
      this.countPauseStatus = true;
      this.countAddedRecent.push({timestamp:this.getTimeStmp,status:"Started at"});
      this.countStart++
    } else {
      this.countPauseStatus = false;
      this.countAddedRecent.push({timestamp:this.getTimeStmp,status:"Paused at"});     
      this.countPause++
    }
  }

  setCountStartTimer() {
    this.countInterval = setInterval(() => {
      if (this.countTimeLeft > 0) {
        this.countTimeLeft--;
      } else {
        this.countTimeLeft = 60;
      }
    }, 1000)
    
  }

  setCountPauseTimer() {
    this.countTimeLeft = 0;
    clearInterval(this.countInterval);
  }

}
