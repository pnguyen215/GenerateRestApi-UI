import { Component, OnInit, state, transition, style, animate, Input, trigger } from '@angular/core';


@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class FaderComponent implements OnInit {
  @Input() isVisible: boolean = true;
  visibility = 'shown';
  constructor() { }

  ngOnInit() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

}
