import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Country } from '@typescript-common';

@Component({
  selector: 'curso-performance-angular-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {
  @Input() public countries: Country[];
  @Output() public goTo = new EventEmitter<string>();
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  public displayedColumns: string[] = ['id', 'name', 'capitalCity', 'longitude', 'latitude'];
  public dataSource!: MatTableDataSource<Country>;

  constructor() {
    this.countries = [];
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.countries);
    this.dataSource.sort = this.sort;
  }

  goToCountry(country: Country): void {
    this.goTo.emit(country.id);
  }

}
