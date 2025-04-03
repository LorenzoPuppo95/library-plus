import { CommonModule } from '@angular/common';
import { Component , Input } from '@angular/core';
import { Book } from '../../model/book';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-books-location',
  imports: [CommonModule , RouterModule],
  templateUrl: './books-location.component.html',
  styleUrl: './books-location.component.scss'
})

export class BooksLocationComponent {
  @Input() librettoRicevuto!: Book;
}

