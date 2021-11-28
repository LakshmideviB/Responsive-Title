import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  book: any[] = [];
  filteredBooks: any[] = [];
  filterBy: any;
  title: Object | undefined;
 
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(){
        this.http.get<any>('https://bookcart.azurewebsites.net/api/Book').subscribe(Book => {
        this.book = Book;
        this.filteredBooks = [this.book];
      })
  }

  filter() {
    this.filteredBooks = this.book.filter(book => book.title.includes(this.filterBy))
    ;
}

cancelSearch(){
  this.router.navigate(['/']);
}
}
