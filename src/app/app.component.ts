import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlashcardService } from './FlashcardService';
import { Card } from './Card';
import { CommonModule } from '@angular/common';
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
  selectedAlphabet = 'Thai';
  
  constructor(private flashcardService: FlashcardService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.onAlphabetChange('Thai');
  }

  loadCards() {
    this.cards = this.flashcardService.getCards(this.selectedAlphabet);
    console.log('Loaded cards for:', this.selectedAlphabet);
  }

  onAlphabetChange(alphabet: string): void {
    console.log('Changing alphabet to:', alphabet);
    this.selectedAlphabet = alphabet;
    this.cards = this.flashcardService.getCards(alphabet);
    this.cdr.detectChanges();
  }
}
