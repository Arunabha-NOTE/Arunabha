import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ExperienceModel} from "../../models/experienceModel";
import experienceData from "../../data/experienceData";

@Component({
  selector: 'app-experience',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences:  ExperienceModel[] = experienceData;
}
