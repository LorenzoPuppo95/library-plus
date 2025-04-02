import { CommonModule } from '@angular/common';
import { Component , Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books-location',
  imports: [CommonModule],
  templateUrl: './books-location.component.html',
  styleUrl: './books-location.component.scss'
})
export class BooksLocationComponent {
  @Input() librettoRicevuto!: Book;
}

