import { Component } from '@angular/core';
import { bootstrapHospital, bootstrapBank, bootstrapShop, bootstrapMortarboard, bootstrapBuildings, bootstrapRocketTakeoff, bootstrapBuilding, bootstrapLaptop } from '@ng-icons/bootstrap-icons';
import { provideIcons, provideNgIconsConfig, NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-industry',
  imports: [NgIcon],
  templateUrl: './industry.html',
  styleUrl: './industry.css',
   viewProviders:[ 
  provideNgIconsConfig({
      size: '40px',
      color: '#432dd7',
    }),
  provideIcons({ 
    bootstrapHospital,
    bootstrapBank,
    bootstrapShop,
    bootstrapMortarboard,
    bootstrapBuildings,
    bootstrapRocketTakeoff,
    bootstrapBuilding,
    bootstrapLaptop
   })],
})
export class Industry {

}
