import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksLocationComponent } from '../books-location/books-location.component';
import { BookService } from '../../book.service';
import { Book } from '../../model/book';


@Component({
  selector: 'app-home',
  imports: [CommonModule, BooksLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  librettiList: Book[] = [];  
  bookService: BookService = inject(BookService);

  constructor() {    
    this.librettiList = this.bookService.getAllBooks();  
  }
}