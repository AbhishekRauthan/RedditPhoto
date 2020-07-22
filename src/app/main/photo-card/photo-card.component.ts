import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GetRedditDataService } from '../get-reddit-data.service';
import { RedditData, Data } from 'src/app/interfaces/reddit-data';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit,OnChanges {

  constructor(private photoService: GetRedditDataService) { }

  @Input() selected: string;
  @Input() param:string;

  dataArray: any[];

  getPhotos() {
    this.dataArray = [];
    this.photoService.getData(this.selected,this.param).subscribe((resp: RedditData) => {
      resp.data.children.forEach((val: Data) => {
        if (val.data.url_overridden_by_dest) {
          this.dataArray.push(val)
        }
      })
    })
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  ngOnChanges() {
    this.getPhotos();
  }

}
