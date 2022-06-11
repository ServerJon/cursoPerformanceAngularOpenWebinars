import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Country } from '@typescript-common';
import { CountryService } from '@data';

@Component({
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {
  countries$!: Observable<Country[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCountries(params['code']);
    });
  }

  public goToCountry(id: string): void {
    this.router.navigate([`/country/${id}`]);
  }

  private getCountries(code: string): void {
    this.countries$ = this.countryService
      .getCountriesByRegion(code);
  }
}
