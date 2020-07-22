import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-reddit',
  templateUrl: './select-reddit.component.html',
  styleUrls: ['./select-reddit.component.css']
})
export class SelectRedditComponent implements OnInit {
  constructor() { }

  inputForm = new FormGroup({
    subreddit: new FormControl('', [Validators.required]),
    params: new FormControl('', [Validators.required])
  });

  subredditArray: string[] = [
    'r/astrophotography',
    'r/streetphotography',
    'r/mobilephotography',
    'r/exposureporn',
    'r/villageporn',
  ];

  params: string[] = [
    'new',
    'top',
    'rising',
    'hot'
  ];

  subreddit: string;
  param: string;

  onSubmit() {
    this.subreddit = this.inputForm.controls['subreddit'].value;
    this.param = this.inputForm.controls['params'].value;
    console.log("submitted the values");
  }

  disableButton() {
    if (this.inputForm.controls['subreddit'].value === 'Select Reddit...') {
      return true;
    }
    if (this.inputForm.controls['params'].value === 'Select Params...') {
      return true;
    }

    return this.inputForm.invalid;
  }
  
  returnTerm() {
    return this.subreddit;
  }

  returnParam() {
    return this.param;
  }

  ngOnInit(): void {
  }

}
