import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { SelectRedditComponent } from './select-reddit/select-reddit.component';
import { HttpClientModule } from "@angular/common/http";
import { InstructModule } from '../instruct/instruct.module';
import { ReactiveFormsModule } from "@angular/forms";
import { HeadingComponent } from './heading/heading.component';


@NgModule({
  declarations: [PhotoCardComponent, SelectRedditComponent, HeadingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    InstructModule,
    ReactiveFormsModule
  ],
  exports: [
    SelectRedditComponent
  ]
})
export class MainModule { }
