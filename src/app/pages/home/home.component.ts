import { Component } from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";
import {SkillsComponent} from "../../components/skills/skills.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
