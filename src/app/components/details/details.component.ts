import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router'; 
import { BooksLocationComponent } from '../books-location/books-location.component';
import { BookService } from '../../book.service';
import { Book } from '../../model/book';

BooksLocationComponent

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bookService: BookService = inject(BookService);
  librettoRicevuto: Book | undefined;
  
  constructor(){
    const bookLocationID=Number(this.route.snapshot.params['id']);
    this.librettoRicevuto=this.bookService.getBooksById(bookLocationID);
  }
}
