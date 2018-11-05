import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GpaCalculateService } from '../gpa-calculate.service'
import { Course, SAMPLEDATA, Courses } from '../courses/courses';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  gpa: number;
  courses: Course[];
  page: string;

  constructor(
    private route: ActivatedRoute, 
    private gpaCalculateService: GpaCalculateService, 
    private location: Location) { }

  ngOnInit() {
    this.getGpa();
  }

  getGpa(): void {
    this.route.queryParams.subscribe(
      params => this.page = params['id']);

    if (this.page == 'calculate') {
      this.courses = this.gpaCalculateService.getCourses();
    }else if (this.page == 'sample-calculate'){
      this.courses = SAMPLEDATA
    }
    this.gpa = this.gpaCalculateService.getGPA(this.courses)
  }

}
