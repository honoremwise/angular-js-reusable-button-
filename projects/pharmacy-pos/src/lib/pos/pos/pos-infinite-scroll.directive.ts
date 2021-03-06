import { Directive, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScroll } from '../../importables/ui/infinite-scroll/infinite.scroll';
import { Store } from '@ngxs/store';
import { LocalStorage } from '../../importables/services/local-storage.service';
 //TODO: FIXME:
// import { PosCateoriesState } from '../../importables/store/states/PosCategoryStates';
// import { LoadMoreCategoriesEntries } from '../../importables/store/actions/pos-categories.action';
import { PosStockStates } from '../../importables/store/states/PosStockStates';
import { LoadMoreStockEntries } from '../../importables/store/actions/pos-Stock.action';

@Directive({
  selector: '[posInfiniteScroll]'
})
export class PosInfiniteScrollDirective extends InfiniteScroll {
  constructor(
      protected el: ElementRef,
      protected store: Store,
      private localStorage: LocalStorage
  ) {

      super();
  }


  protected loadMoreItems() {
    const loadData= this.localStorage.get('pos-load-data');
    if(loadData=='ofCategories'){
       //TODO: FIXME:
      // const page = this.store.selectSnapshot(PosCateoriesState.currentPage) + 1;
      //TODO:fix the bellow line see https://stackoverflow.com/questions/47826611/angular-5-upgrade-module-build-failed-custompackage-is-not-part-of-the-compil
      // this.store.dispatch(new LoadMoreCategoriesEntries({page}));
    }else{
      const page = this.store.selectSnapshot(PosStockStates.currentPage) + 1;
      this.store.dispatch(new LoadMoreStockEntries({page}));
    }

  }

  protected isLoading(): boolean {
    const loadData= this.localStorage.get('pos-load-data');
    if(loadData=='ofCategories'){
       //TODO: FIXME:
      // return this.store.selectSnapshot(PosCateoriesState.loading);
    }else{
      return this.store.selectSnapshot(PosStockStates.loading);
    }

  }

  protected canLoadMore(): boolean {
    const loadData= this.localStorage.get('pos-load-data');
    if(loadData=='ofCategories'){
       //TODO: FIXME:
      // return this.store.selectSnapshot(PosCateoriesState.canLoadMoreEntries);
    }else{
      return this.store.selectSnapshot(PosStockStates.canLoadMoreEntries);
    }
  }
}
