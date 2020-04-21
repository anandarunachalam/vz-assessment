import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';

import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';

@Injectable()
export class RmsShowService {

	constructor(private _http: HttpClient) {}

	getProductList(page: number, query: string) {
		let queryString = query.length > 0 ? (page + query) : page;
		return this._http.get(environment.url + 'character?page=' + queryString).pipe(
			retry(1),
			catchError(this.handleError)
		)
  }
  
	handleError(err) {
		let errMsg = '';
		if (err.error instanceof ErrorEvent) {			
			errMsg = `Error: ${err.error.message}`;
		} else {		
			errMsg = `Error Code: ${err.status}\nMessage: ${err.message}`;
		}
		return throwError(errMsg);
	}
}
