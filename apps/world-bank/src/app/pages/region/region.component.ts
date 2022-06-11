import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReplaySubject, takeUntil } from 'rxjs';

import { Country } from '@typescript-common';
import { CountryService } from '@data';

@Component({
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit, OnDestroy {

  countries: Country[];
  private destructor: ReplaySubject<void>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) {
    this.countries = [];
    this.destructor = new ReplaySubject<void>();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCountries(params['code']);
    });
  }

  public goToCountry(id: string): void {
    this.router.navigate([`/country/${id}`]);
  }

  private getCountries(code: string): void {
    this.countryService.getCountriesByRegion(code).pipe(takeUntil(this.destructor)).subscribe(
      {
        next: (response: Country[]) => {
          this.countries = response;
        }
      }
    )
  }

  async ngOnDestroy(): Promise<void> {
    this.destructor.next();
    this.destructor.complete();
  }
}
