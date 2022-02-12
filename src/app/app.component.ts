import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stepperform';
  steponeform!:FormGroup;
  steptwoform!:FormGroup;
  stepthreeform!:FormGroup;
  stepfourform!:FormGroup;
  stepfiveform!:FormGroup;
  value:any = 1;
  valueforradio:any=1;
  addcontainer:any = [];
  addcontainerforradio:any = [];
  addcontainerforcalender:any = [];
  img:any = [];
  constructor(private fb:FormBuilder){
    this.applyvalidation();
  }
  stepChangeEvent: StepperSelectionEvent | undefined;
  selectionchange(event: StepperSelectionEvent){
    this.stepChangeEvent = event;
    console.log(event.selectedStep.label)
  }
  submitoneform(steponeform:FormGroup){
    console.log(steponeform)
  }
  submitsecond(steptwoform:FormGroup){
    console.log(steptwoform)
  }
  submitthreeform(stepthreeform:FormGroup){
    console.log(stepthreeform)
  }
  submitfourform(stepfourform:FormGroup){
    console.log(stepfourform)
  }
  submitfiveform(stepfiveform:FormGroup){
    console.log(stepfiveform)
    let obj = {
      'organization':this.steponeform.value.organization,  
      'Category':this.steponeform.value.Category,  
      'Activity':this.steponeform.value.Activity,  
      'title':this.steponeform.value.title,  
      'Minimumage':this.steponeform.value.Minimumage,  
      'Maximumage':this.steponeform.value.Maximumage,  
      'description':this.steponeform.value.description, 
      'projectname':this.steptwoform.value.projectname, 
      'img':this.steptwoform.value.img, 
      'projectduration':this.stepthreeform.value.projectduration, 
      'projectnameforthree':this.stepthreeform.value.projectname, 
      'projectcost':this.stepthreeform.value.projectcost, 
      'projectcostfour':this.stepfourform.value.projectcost, 
      'projectnameforfour':this.stepfourform.value.projectname, 
      'includdescription':this.stepfourform.value.includdescription,
      'date':this.stepfiveform.value.date, 
      'projectnamefive':this.stepfiveform.value.projectname, 
    }
    console.log('>>>>>>>>>>>>>>>>>>',obj)
  }
  applyvalidation(){
    this.steponeform = this.fb.group({
      organization:['',[Validators.required]],  
      Category:['',[Validators.required]],  
      Activity:['',[Validators.required]],  
      title:['',[Validators.required]],
      Minimumage:['',[Validators.required]],
      Maximumage:['',[Validators.required]],  
      description:['',[Validators.required]],
    });
    this.steptwoform = this.fb.group({
      projectname:['',[Validators.required]],  
      // img:['',[Validators.required]],  
    });
    this.stepthreeform = this.fb.group({
      projectname:['',[Validators.required]],  
      projectduration:['',[Validators.required]],  
      projectcost:['',[Validators.required]],  
    
    });
    this.stepfourform = this.fb.group({
      projectcost:['',[Validators.required]],  
      projectname:['',[Validators.required]],  
      includdescription:['',[Validators.required]],  
    });
    this.stepfiveform = this.fb.group({
      date:['',[Validators.required]],  
      projectname:['',[Validators.required]],  
    });
  }
  addrow(e:any){
    this.value++;
    this.addcontainer.push({value:this.value});
    console.log("clicked add row",this.addcontainer,this.value);
  }
  Delete(e:any){
    this.addcontainer.pop({value:this.value});
    console.log("clicked add row",this.addcontainer,this.value);
  }


  addradio(){
    this.valueforradio++;
    this.addcontainerforradio.push({value:this.valueforradio});
    console.log("clicked add row",this.addcontainerforradio,this.valueforradio);
  }
  delectradio(){
    this.addcontainerforradio.pop({value:this.valueforradio});
    console.log("clicked add row",this.addcontainerforradio,this.valueforradio);
  }


  addcalendar(){
    this.valueforradio++;
    this.addcontainerforcalender.push({value:this.valueforradio});
    console.log("clicked add row",this.addcontainerforcalender,this.valueforradio);
  }

  deletecalendar(){
    this.valueforradio++;
    this.addcontainerforcalender.pop({value:this.valueforradio});
    console.log("clicked add row",this.addcontainerforcalender,this.valueforradio);
  }
  pushimg(e:any){
    this.img.push(e.target.value)
    console.log(e.target.value,this.img);
  }
}
