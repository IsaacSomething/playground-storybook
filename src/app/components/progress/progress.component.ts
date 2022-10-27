import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';

@Component({
  selector: 'sb-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  imports: [MatProgressBarModule, MatProgressSpinnerModule],
  standalone: true,
})
export class SBProgressComponent {
  @Input() value = 20;
  @Input() color = 'primary';
  @Input() disabled = false;
  @Input() mode: ProgressSpinnerMode = 'determinate';
  constructor() {}
}
