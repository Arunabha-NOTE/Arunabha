import { Component } from '@angular/core';

@Component({
  selector: 'app-go-to-top',
  standalone: true,
  imports: [],
  templateUrl: './go-to-top.component.html',
  styleUrl: './go-to-top.component.css'
})
export class GoToTopComponent {

    scrollToTop(elem: string) {
        document.querySelector(elem)!.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
}
