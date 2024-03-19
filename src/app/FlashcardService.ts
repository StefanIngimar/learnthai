import { Injectable } from '@angular/core';
import { Card } from './Card';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  thaiAlphabet: Card[] = [
    new Card("ก", "ko kai", "k", "ก ไก่ (ko kai) – chicken"),
    new Card("ข", "kho khai", "kh", "ข ไข่ (kho khai) – egg"),
    new Card("ฃ", "kho khuat", "kh", "ฃ ขวด (kho khuat) – bottle"),
    new Card("ค", "kho khwai", "k", "ค ควาย (kho khwai) – buffalo"),
    new Card("ฅ", "kho khon", "k", "ฅ คน (kho khon) – person"),
    new Card("ฆ", "kho rakhang", "k", "ฆ ระฆัง (kho rakhang) – bell"),
    new Card("ง", "ngo ngu", "ngo", "ง งู (ngo ngu) – snake"),
    new Card("จ", "cho shan", "j", "จ จาน (cho chan) – plate"),
    new Card("ฉ", "cho ching", "ch", "ฉ ฉิ่ง (cho ching) – cymbals"),
    new Card("ช", "cho chang", "ch", "ช ช้าง (cho chang) – elephant"),
    new Card("ซ", "so so", "s", "ซ โซ่ (so so) – chain"),
    new Card("ฌ", "cho choe", "ch", "ฌ เฌอ (cho choe) – tree"),
    new Card("ญ", "yo ying", "y", "ญ หญิง (yo ying) – woman"),
    new Card("ฎ", "do chada", "d", "ฎ ชฎา (do chada) – headdress"),
    new Card("ฏ", "to patak", "t", "ฏ ปฏัก (to patak) – javelin"),
    new Card("ฐ", "tho than", "th", "ฐ ฐาน (tho than) – pedestal"),
    new Card("ฑ", "tho montho", "t", "ฑ มณโฑ (tho montho) – Montho (character from Ramayana)"),
    new Card("ฒ", "tho phu thao", "t", "ฒ ผู้เฒ่า (tho phu thao) – elder"),
    new Card("ณ", "no nen", "n", "ณ เณร (no nen) – samanera (buddhist term)"),
    new Card("ด", "do dek", "d", "ด เด็ก (do dek) – child"),
    new Card("ต", "to tao", "t", "ต เต่า (to tao) – turtle"),
    new Card("ถ", "tho thung", "th", "ถ ถุง (tho thung) – sack"),
    new Card("ท", "tho thathan", "t", "ท ทหาร (tho thahan) – soldier"),
    new Card("ธ", "tho thong", "t", "ธ ธง (tho thong) – flag"),
    new Card("น", "no nu", "n", "น หนู (no nu) – mouse"),
    new Card("บ", "bo baimai", "b", "บ ใบไม้ (bo baimai) – leaf"),
    new Card("ป", "po pla", "p", "ป ปลา (po pla) – fish"),
    new Card("ผ", "pho phueng", "p", "ผ ผึ้ง (pho phueng) – bee"),
    new Card("ฝ", "fo fa", "f", "ฝ ฝา (fo fa) – lid"),
    new Card("พ", "pho phan", "p", "พ พาน (pho phan) – phan (decorated tray found in Asia)"),
    new Card("ฟ", "fo fan", "f", "ฟ ฟัน (fo fan) – tooth"),
    new Card("ภ", "pho samphao", "p", "ภ สำเภา (pho samphao) – junk"),
    new Card("ม", "mo ma", "m", "ม ม้า (mo ma) – horse"),
    new Card("ย", "yo yak", "y", "ย ยักษ์ (yo yak) – giant"),
    new Card("ร", "ro ruea", "r", "ร เรือ (ro ruea) – boat"),
    new Card("ล", "lo ling", "l", "ล ลิง (lo ling) – monkey"),
    new Card("ว", "wo waen", "w", "ว แหวน (wo waen) – ring"),
    new Card("ศ", "so sala", "s", "ศ ศาลา (so sala) – pavilion"),
    new Card("ษ", "so ruesi", "s", "ษ ฤๅษี (so ruesi) – hermit"),
    new Card("ส", "so suea", "s", "ส เสือ (so suea) – tiger"),
    new Card("ห", "ho hip", "h", "ห หีบ (ho hip) – chest (box)"),
    new Card("ฬ", "lo chula", "l", "ฬ จุฬา (lo chula) – kite"),
    new Card("อ", "o ang", "or", "อ อ่าง (o ang) – basin"),
    new Card("ฮ", "ho nok huk", "h", "ฮ นกฮูก (ho nok huk) – owl"),
  ];

  arabicAlphabet: Card[] = [
    new Card("ا", "alif", "a", ""),
    new Card("ب", "baa", "b", ""),
    new Card("ت", "taa", "t", ""),
    new Card("ث", "thaa", "th", ""),
    new Card("ج", "jiim", "j/zh", ""),
    new Card("ح", "haa", "soft h", ""),
    new Card("خ", "khaa", "kh", ""),
    new Card("د", "dal", "d", ""),
    new Card("ذ", "dhal", "hard th", ""),
    new Card("ر", "raa", "r", ""),
    new Card("ز", "zay", "z", ""),
    new Card("س", "siin", "s", ""),
    new Card("ش", "sheen", "sh", ""),
    new Card("ص", "saad", "ss", ""),
    new Card("ض", "dhad", "soft d", ""),
    new Card("ط", "taa", "t", ""),
    new Card("ظ", "dhaa", "th", ""),
    new Card("ع", "hain", "h", ""),
    new Card("غ", "ghain", "gh", ""),
    new Card("ف", "faa", "f", ""),
    new Card("ق", "qaaf", "saying q but back from the throat", ""),
    new Card("ك", "kaaf", "k", ""),
    new Card("ل", "laam", "l", ""),
    new Card("م", "miim", "m", ""),
    new Card("ن", "nun", "n", ""),
    new Card("ه", "haa", "h", ""),
    new Card("و", "waw", "w/oo as in boot", ""),
    new Card("ي", "yaa", "y/ee as in meet", ""),
  ];

  cyrillicAlphabet: Card[] = [
    new Card("А а", "A", "", ""),
    new Card("Б б", "B", "", ""),
    new Card("В в", "Ve", "", ""),
    new Card("Г г", "Ge", "", ""),
    new Card("Д д", "De", "", ""),
    new Card("Е е", "E, Je, Ye", "", ""),
    new Card("Ë ë", "Jo, Yo", "", ""),
    new Card("Ж ж", "Zhe", "", ""),
    new Card("З з", "Ze", "", ""),
    new Card("И и", "I", "", ""),
    new Card("Й й", "J", "", ""),
    new Card("К к", "Ka", "", ""),
    new Card("Л л", "El, L", "", ""),
    new Card("М м", "Em, M", "", ""),
    new Card("Н н", "Ne, N", "", ""),
    new Card("О о", "O", "", ""),
    new Card("П п", "Pe, P", "", ""),
    new Card("Р р", "Er, R", "", ""),
    new Card("С с", "Es, S", "", ""),
    new Card("Т т", "Te, T", "", ""),
    new Card("У у", "U", "", ""),
    new Card("Ф ф", "Ef, F", "", ""),
    new Card("Х х", "Kha", "", ""),
    new Card("Ц ц", "Tse", "", ""),
    new Card("Ч ч", "Che", "", ""),
    new Card("Ш ш", "Sha", "", ""),
    new Card("Щ щ", "Shta", "", ""),
    new Card("Ь ь", "Yer, J", "", ""),
    new Card("Э э", "E", "", ""),
    new Card("Ю ю", "Ju, Yu", "", ""),
    new Card("Я я", "Ja, Ya", "", ""),
  ]

  constructor() { }

  getCards(alphabet: string): Card[] {
    switch(alphabet) {
      case 'Thai':
        return this.thaiAlphabet;
      case 'Arabic':
        return this.arabicAlphabet;
      case 'Cyrillic':
        return this.cyrillicAlphabet;
      default:
        return [];
    }
  }
}
