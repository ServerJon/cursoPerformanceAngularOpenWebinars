import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Region } from '@typescript-common';

@Component({
  selector: 'curso-performance-angular-region-info',
  templateUrl: './region-info.component.html',
  styleUrls: ['./region-info.component.scss'],
})
export class RegionInfoComponent implements OnInit {
  @Input() public regions: Region[];
  @Output() public goTo = new EventEmitter<string>();
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  public displayedColumns: string[] = ['id', 'name', 'iso2code', 'code'];
  public dataSource!: MatTableDataSource<Region>;


  constructor() {
    this.regions = [];
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.regions);
    this.dataSource.sort = this.sort;
  }

  goToRegion(region: Region): void {
    this.goTo.emit(region.code);
  }
}
