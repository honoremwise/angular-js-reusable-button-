import { Injectable } from '@angular/core';
import { Orders } from '../../orders';
import { OrdersApiIndexParams } from '../../../store/model/pos-order-state-model';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../../../types/pagination-response';
import { AppHttpClient } from '../../../http/app-http-client.service';
import { OrderParms } from '../../../store/actions/pos-Order.action';
import { OrderItems } from 'projects/pharmacy-pos/src/lib/pos/cart/order_items';
export interface OrderEntriesPaginationResponse extends PaginationResponse<Orders> {
  orders?: Orders[];
}

export interface StockEntriesPaginationResponse extends PaginationResponse<Orders> {
  stocks?: Orders[];
}

@Injectable({
    providedIn: 'root'
})
export class ApiOrderService {

    constructor(private http: AppHttpClient) {

    }

    public getEntries(params: OrdersApiIndexParams = {}): Observable<OrderEntriesPaginationResponse> {
      return this.http.get(params.url, params);
    }
    public getCurrentOrder(): Observable<Orders> {
      return this.http.get('order/'+parseInt(localStorage.getItem('active_branch')));
    }
    public createInvoice(params: any = {}): Observable<any> {
      return this.http.post('invoice', params);
    }
    public createOrder(params: OrderParms): Observable<Orders> {
      return this.http.post('order', params);
  }
  public updateOrder(params: Orders):  Observable<Orders> {
    return this.http.put('order/'+params.id, params);
 }
  public updateOrderItem(params: OrderItems): Observable<Orders> {
    return this.http.post('order-item', params);
}

public deleteOrderedItem(params: OrderItems): Observable<Orders> {
  return this.http.delete('delete-order-item/'+params.id);
}

public deleteOrder(params: Orders):  Observable<Orders> {
  return this.http.delete('order/'+params.id);
}


}
