import { Component, OnInit } from '@angular/core';
import { IPrroduct } from './models/prouct';
import { ProuctsService } from './services/products.service';
import { tap, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular app';
  // products: IPrroduct[] = [];
  loading = false;
  products$: Observable<IPrroduct[]>
  term = ''
  constructor(private prodctsService: ProuctsService) {

  }
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.prodctsService.getAll().pipe(
      tap(() => this.loading = false)
    );
    // this.prodctsService.getAll().subscribe(products => {
    //   console.log(products);
    //   this.products = products;
    //   this.loading = false;
    // })
  }
}
