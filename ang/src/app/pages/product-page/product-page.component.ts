import { Component, OnInit } from '@angular/core';
import { IPrroduct } from '../../models/prouct';
import { ProuctsService } from '../../services/products.service';
import { tap, Observable } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'angular app';
  products: IPrroduct[] = [];
  loading = false;
  // products$: Observable<IPrroduct[]>
  term = ''
  constructor(
    public prodctsService: ProuctsService,
    public modalService: ModalService
  ) {

  }
  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.prodctsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // );
    this.prodctsService.getAll().subscribe(products => {
      // console.log(products);
      // this.products = products;
      this.loading = false;
    })
  }
}
