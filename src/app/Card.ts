export class Card {
    thaiCharacter: String;
    name: String;
    phonetic: String;
    example: String;
    language: String;
    constructor(thaiCharacter: String, name: String, phonetic: String, example: String, language: String){
        this.thaiCharacter = thaiCharacter;
        this.name = name;
        this.phonetic = phonetic;
        this.example = example;
        this.language = language;
    }
}