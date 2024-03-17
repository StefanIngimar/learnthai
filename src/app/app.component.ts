import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlashcardService } from './FlashcardService';
import { Card } from './Card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent implements OnInit {
  cards: Card[] = [];
  flipState: boolean[] = [];
  
  constructor(private flashcardService: FlashcardService) {}

  ngOnInit() {
      this.cards = this.flashcardService.getCards();
      this.flipState = new Array(this.cards.length).fill(false);
  }

  toggleFlip(index: number) {
    this.flipState[index] = !this.flipState[index];
  }
}
