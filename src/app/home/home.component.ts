import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
import { BooksLocationComponent } from '../books-location/books-location.component';
import { BookService } from '../book.service';


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