import { Component, OnInit } from '@angular/core';
import { Course, SAMPLEDATA } from '../courses/courses';
import { GpaCalculateService } from '../gpa-calculate.service'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  courses: Course[];
  detail: string;

  constructor(private gpaCalculateService: GpaCalculateService) {
    this.detail = "sample-calculate"
   }

  ngOnInit() {
    this.courses = SAMPLEDATA;
  }

  remove(courses: Course[], name: string){
    this.gpaCalculateService.removeCourse(courses, name);
  }

}
