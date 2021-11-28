import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../store/actions/counter';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  
  count$: Observable<number>;
  constructor(private router: Router, private store: Store<{ count: number }>) { 
    this.count$ = store.pipe(select('count'));
  }


  ngOnInit(): void {
    this.router.navigate(['/wishlist'])
  }
  increment() {
    this.store.dispatch(new Increment());
   }
 
   decrement() {
     this.store.dispatch(new Decrement());
   }
 
   reset() {
     this.store.dispatch(new Reset());
   }
  
}
