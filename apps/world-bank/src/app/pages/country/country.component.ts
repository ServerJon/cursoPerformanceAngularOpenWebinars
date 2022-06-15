import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { CountryService } from '@data';
import { Country } from '@typescript-common';

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {
  country$!: Observable<Country | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCountry(params['id']);
    });
  }

  private getCountry(id: string): void {
    this.country$ = this.countryService
      .getCountry(id);
  }
}
