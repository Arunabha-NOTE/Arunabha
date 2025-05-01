import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { ProjectModel } from "../../models/projectModel"
import projectData from "../../data/projectData";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects:  ProjectModel[] = projectData.slice().reverse();
}
