import { Injectable } from '@angular/core';
import {Course, Courses} from './courses/courses';


let grd = [['A', 4.00], ['B+', 3.50], ['B', 3.00], ['C+', 2.50], ['C', 2.00], ['D+', 1.50], ['D', 1.00], ['F', 0]];

@Injectable()
export class GpaCalculateService {
  coursesList: Course[];
  constructor() { 
    this.coursesList = (new Courses().courses)
  }

  getCourses(): Course[] {
    return this.coursesList;
  }

  addCourse(name: string, credit: number, grade: string): void {
    this.coursesList.push({name:name, credit:credit, grade:grade })
  }

  removeCourse(courses: Course[], name: string): void {
    for (let i in courses){
      if (courses[i].name == name){
        courses.splice(parseInt(i),1);
      }
    }
  }

  getGPA(courses: Course[]): number {
    let sumcrd: number = 0;
    let sumwp: number = 0;

    if (!courses.length) {
      return 0;
    }
    for(let course of courses) {
      sumcrd = (+sumcrd) + (+course.credit.valueOf());
      sumwp = (+sumwp) + ((+course.credit)*(+this.findGradeValue(course.grade)))
    }

    if (sumcrd != 0){
      return (sumwp/sumcrd);
    }

    return -1;
  }

  findGradeValue(gd: string): string|number {
    for (let i in grd){
      if (gd === grd[i][0]) {
        return grd[i][1];
      }
    }
    return -1;
  }

}
