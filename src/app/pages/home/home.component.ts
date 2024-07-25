import { Component } from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";
import {SkillsComponent} from "../../components/skills/skills.component";
import {ProjectsComponent} from "../../components/projects/projects.component";
import {ExtracurricularsComponent} from "../../components/extracurriculars/extracurriculars.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    ExtracurricularsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
