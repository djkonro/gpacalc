import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from './courses';
import { GpaCalculateService } from '../gpa-calculate.service'
import { isNull } from 'util';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  gpa: number;
  detail: string;
  defaultValue = 'A';
  exist: string;
  
  getCourses(): void {
    this.courses = this.gpaCalculateService.getCourses();
  }
  constructor(private gpaCalculateService: GpaCalculateService) {
    this.detail = "calculate";
    this.gpa = 50;
  }

  ngOnInit() {
    this.getCourses();
  }

  onSubmit(f: NgForm) {
    if (f.value){
      for (let course of this.courses){
        if (course.name == f.value.name){
          this.exist = course.name;
          return
        }
      }

      if (f.value.name === "" ||  isNull(f.value.credit) || f.value.credit === "")
        return
      this.exist = null
      this.gpaCalculateService.addCourse(f.value.name, f.value.credit, f.value.grade)
    }
  }

  remove(courses: Course[], name: string){
    this.gpaCalculateService.removeCourse(courses, name);
  }

}
