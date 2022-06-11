import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { API_URL, Country, InformationPage } from '@typescript-common';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  public getCountriesByRegion(code: string): Observable<Country[]> {
    return this.http.get<[InformationPage, Country[]]>(`${API_URL}/region/${code}/country?per_page=1000&format=json`).pipe(
      map((response: [InformationPage, Country[]]) => {
        return response[1];
      })
    );
  }

  public getCountry(id: string): Observable<Country | undefined> {
    return this.http.get<[InformationPage, Country[]]>(`${API_URL}/country/${id}?format=json`).pipe(
      map((response: [InformationPage, Country[]]) => {

        return response[1].find((country: Country) => country.id === id)
      })
    );
  }
}
