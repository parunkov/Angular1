import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retry, catchError, delay, Observable, throwError } from 'rxjs';
import { IPrroduct } from '../models/prouct';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class ProuctsService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {

    }
    getAll(): Observable<IPrroduct[]> {
        return this.http.get<IPrroduct[]>('https://fakestoreapi.com/products', {
            // params: new HttpParams().append('limit', 5)
            // params: new HttpParams({
            //     fromString: 'limit=5'
            // })
            params: new HttpParams({
                fromObject: {limit: 5}
            })
        }).pipe(
            delay(2000),
            retry(2),
            catchError(this.errorHandler.bind(this))
        )
    }
    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
}