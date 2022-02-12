import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: CustomStepperComponent}],

})
export class CustomStepperComponent extends CdkStepper{

  // constructor() { }

  ngOnInit(): void {
  }
  Onclick(index:number){
    this.selectedIndex = index;
  }

}
