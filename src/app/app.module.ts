import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { GpaCalculateService } from './gpa-calculate.service';
import { SampleComponent } from './sample/sample.component';
import { ResultComponent } from './result/result.component'


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SampleComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GpaCalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
