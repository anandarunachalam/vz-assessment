import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { VzCountTwoService } from '../../services/vz-count-two.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-vzs-count-down-form',
  templateUrl: './vzs-count-down-form.component.html',
  styleUrls: ['./vzs-count-down-form.component.scss']
})
export class VzsCountDownFormComponent implements OnDestroy {

    //message: any;
    subscription: Subscription;

    formGroup: FormGroup;
    formEmptyMsg: string = 'This field is required';
    formPostData: any = '';

    constructor(private vzCountService: VzCountTwoService, private formBuilder:FormBuilder) {        
       // this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    }

    ngOnInit(): void {
      this.generateForm();
      this.setFormChangeValidate();
    }

    generateForm(){ 
      this.formGroup = this.formBuilder.group({
        'count': [null, Validators.required],
        'validate': ''
      });
    }

    setFormChangeValidate() {
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
      //console.log(vzFrmData)
      this.formPostData = vzFrmData;
      this.vzCountService.setCountDownTime(vzFrmData.count);
            
    }

    ngOnDestroy() {        
      this.subscription.unsubscribe();
    }

}
