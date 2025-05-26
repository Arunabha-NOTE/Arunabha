import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";
import {SkillsComponent} from "../../components/skills/skills.component";
import {ProjectsComponent} from "../../components/projects/projects.component";
import {ExtracurricularsComponent} from "../../components/extracurriculars/extracurriculars.component";
import {ExperienceComponent} from "../../components/experience/experience.component";
import {AwardsComponent} from "../../components/awards/awards.component";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        SkillsComponent,
        ProjectsComponent,
        ExtracurricularsComponent,
        ExperienceComponent,
        AwardsComponent,
        CommonModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }

}
