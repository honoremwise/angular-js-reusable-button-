import { Stock } from '../../../pos/pos';

export interface PosSearchStockState {
  data: Stock[];
  loaded: boolean;
  loading: boolean;
  payload?:any;
  success?:boolean;
  stock:Stock;
  itemId:number | 0;
  meta:{
  from: number;
  to: number;
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  path: string;
  query: string;
  type: string;
  next_page_url: string|null;
  prev_page_url: string|null;
  sort_column: SortColumn;
  sort_direction: SortDirection;

  },
  queryParams?: StockApiIndexParams;

}


export const AVAILABLE_SORTS: PosSortOption[] = [
  {name: 'item', viewName: 'Item'},
  {name: 'updated_at', viewName: 'Last Modified'},
  {name: 'created_at', viewName: 'Created Date'},
];

export interface StockModel {
  entries:Stock[];
  meta: {
    currentPage: number;
    lastPage: number;
    sortColumn: SortColumn;
    sortDirection: SortDirection;
    type?: string|null,
    query?: string|null
};
}

export interface PosSortOption {
  name: SortColumn;
  viewName: string;

}

export type SortColumn = 'item' | 'name' | 'updated_at' | 'created_at';
export type SortDirection = 'desc'|'asc';

export interface StockApiIndexParams {
  order_by?: SortColumn;
  order_dir?: SortDirection;
  categoryId?: number | '0';
  customerTypeId?:number;
  query?: string;
  type?: string;
  per_page?: number;
  page?: number;
}
