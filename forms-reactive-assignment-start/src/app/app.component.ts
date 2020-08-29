import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { CustomValidators } from './custom-validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  project = {
    projectname:'',
    email: ''
  };
  projectStatus = '';
  forbiddenProjectNames = ['Test'];
  submitted = false;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'userData': new FormGroup({
        // 'projectname': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'projectname': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'projectStatus': new FormControl('Critical')
    });
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) != -1) {
      return { 'PrjectnameIsForbidden': true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.projectForm);
    this.project.projectname = this.projectForm.value.userData.projectname;
    this.project.email = this.projectForm.value.userData.email;
    this.projectStatus = this.projectForm.value.projectStatus;
    this.submitted = true;
    this.projectForm.reset();
  }
}
