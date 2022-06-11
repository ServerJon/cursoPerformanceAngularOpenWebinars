import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReplaySubject, takeUntil } from 'rxjs';

import { CountryService } from '@data';
import { Country } from '@typescript-common';

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit, OnDestroy {

  country!: Country;
  private destructor: ReplaySubject<void>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
  ) {
    this.destructor = new ReplaySubject<void>();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCountry(params['id']);
    });
  }

  private getCountry(id: string): void {
    this.countryService.getCountry(id).pipe(takeUntil(this.destructor)).subscribe(
      {
        next: (response: Country | undefined) => {
          console.log(response);

          if (response)
            this.country = response;
        }
      }
    )
  }

  async ngOnDestroy(): Promise<void> {
    this.destructor.next();
    this.destructor.complete();
  }
}
