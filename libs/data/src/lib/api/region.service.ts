import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { API_URL, Region, isPositiveNumeric, InformationPage } from '@typescript-common';

@Injectable()
export class RegionService {

  constructor(private http: HttpClient) { }

  public get(): Observable<Region[]> {
    return this.http.get<[InformationPage, Region[]]>(`${API_URL}/region/?format=json`).pipe(
      map((response: [InformationPage, Region[]]) => {
        return response[1].filter((region: Region) => isPositiveNumeric(region.id));
      })
    );
  }
}
