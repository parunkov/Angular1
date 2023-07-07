import { Component, Input } from "@angular/core";
import { IPrroduct } from "src/app/models/prouct";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product: IPrroduct;
    details = false;
}
