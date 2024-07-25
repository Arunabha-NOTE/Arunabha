import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ExtraModel} from "../../models/extraModel";
import extraData from "../../data/extraData";

@Component({
  selector: 'app-extracurriculars',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './extracurriculars.component.html',
  styleUrl: './extracurriculars.component.css'
})
export class ExtracurricularsComponent {
  extras:  ExtraModel[] = extraData;
}
