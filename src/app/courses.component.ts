import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <input type="text" [(ngModel)]="email" (keyup.enter)="onKeyUp()">
    <button class="btn btn-primary">Save</button>`
})

export class CoursesComponent {
    email = "me@example.com";
    title = "List of courses";
    courses;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    onKeyUp() {
        console.log(this.email);
    }
}