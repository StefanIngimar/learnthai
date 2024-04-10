import { Component, OnInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlashcardService } from './FlashcardService';
import { Card } from './Card';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, FormsModule],
})
export class AppComponent implements OnInit {
  cards: Card[] = [];
  
  constructor(
    private flashcardService: FlashcardService) {}

  ngOnInit() {
    this.cards = this.flashcardService.getCards();
  }
}