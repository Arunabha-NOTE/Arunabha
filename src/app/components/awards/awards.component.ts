import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ExperienceModel} from "../../models/experienceModel";
import experienceData from "../../data/experienceData";
import {awardsModel} from "../../models/awardsModel";
import awardsData from "../../data/awardsData";

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent {
  awards:  awardsModel[] = awardsData;
}
