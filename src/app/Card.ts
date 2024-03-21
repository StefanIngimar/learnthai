export class Card {
    character: String;
    name: String;
    phonetic: String;
    example: String;
    language: String;
    constructor(character: String, name: String, phonetic: String, example: String, language: String){
        this.character = character;
        this.name = name;
        this.phonetic = phonetic;
        this.example = example;
        this.language = language;
    }
}