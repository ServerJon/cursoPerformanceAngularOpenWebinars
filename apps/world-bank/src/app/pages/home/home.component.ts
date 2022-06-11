import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject, takeUntil } from 'rxjs';

import { RegionService } from '@data';
import { Region } from '@typescript-common';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  public regions: Region[];
  private destructor: ReplaySubject<void>;

  constructor(private regionService: RegionService, private router: Router, private cdr: ChangeDetectorRef) {
    this.regions = [];
    this.destructor = new ReplaySubject<void>();
  }

  ngOnInit(): void {
    this.getRegions();
  }

  goToRegion(code: string): void {
    this.router.navigate([`/region/${code}`]);
  }

  private getRegions(): void {
    this.regionService
      .get()
      .pipe(takeUntil(this.destructor))
      .subscribe({
        next: (response: Region[]) => {
          this.regions = [...response];
          this.cdr.detectChanges();

          /* Mas código en caso necesario */
        },
      });
  }

  async ngOnDestroy(): Promise<void> {
    this.destructor.next();
    this.destructor.complete();
  }
}
