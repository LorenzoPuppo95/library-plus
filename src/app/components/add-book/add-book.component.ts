import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-add-book',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  route: ActivatedRoute = inject(ActivatedRoute); 
  bookService: BookService = inject(BookService);   
  applyForm = new FormGroup({ 
    title: new FormControl(''), 
    imagejpeg: new FormControl(''), 
    summaries: new FormControl(''),
  });

  constructor(){
  }

  submitApplication() {
    this.bookService.submitApplication(this.applyForm.value.title ?? '', this.applyForm.value.imagejpeg ?? '', Array.isArray(this.applyForm.value.summaries) ? this.applyForm.value.summaries : [],);
  }
}