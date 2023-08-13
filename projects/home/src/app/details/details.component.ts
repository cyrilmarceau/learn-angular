import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { HousingLocation } from '../interfaces/housing-location';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  housingLocationId = -1;
  photoBaseUrl = 'https://angular.io/assets/images/tutorials/faa.';

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    this.housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

    this.housingService
      .getHousingLocationById(this.housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      });
  }

  onSubmit(): void {
    const firstName = this.applyForm.value.firstName ?? '';
    const lastName = this.applyForm.value.lastName ?? '';
    const email = this.applyForm.value.email ?? '';

    this.housingService.submitApplication(firstName, lastName, email);
  }
}
