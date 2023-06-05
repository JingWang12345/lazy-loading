import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-empoyees',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './empoyees.component.html',
  styleUrls: ['./empoyees.component.scss']
})
export class EmpoyeesComponent {

}
