import { Injectable } from '@angular/core';
import { Card } from './Card';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  cards: Card[] = [
    new Card("ก", "ko kai", "k", "ก ไก่ (ko kai) – chicken", "Thai"),
    new Card("ข", "kho khai", "kh", "ข ไข่ (kho khai) – egg", "Thai"),
    new Card("ฃ", "kho khuat", "kh", "ฃ ขวด (kho khuat) – bottle", "Thai"),
    new Card("ค", "kho khwai", "k", "ค ควาย (kho khwai) – buffalo", "Thai"),
    new Card("ฅ", "kho khon", "k", "ฅ คน (kho khon) – person", "Thai"),
    new Card("ฆ", "kho rakhang", "k", "ฆ ระฆัง (kho rakhang) – bell", "Thai"),
    new Card("ง", "ngo ngu", "ngo", "ง งู (ngo ngu) – snake", "Thai"),
    new Card("จ", "cho shan", "j", "จ จาน (cho chan) – plate", "Thai"),
    new Card("ฉ", "cho ching", "ch", "ฉ ฉิ่ง (cho ching) – cymbals", "Thai"),
    new Card("ช", "cho chang", "ch", "ช ช้าง (cho chang) – elephant", "Thai"),
    new Card("ซ", "so so", "s", "ซ โซ่ (so so) – chain", "Thai"),
    new Card("ฌ", "cho choe", "ch", "ฌ เฌอ (cho choe) – tree", "Thai"),
    new Card("ญ", "yo ying", "y", "ญ หญิง (yo ying) – woman", "Thai"),
    new Card("ฎ", "do chada", "d", "ฎ ชฎา (do chada) – headdress", "Thai"),
    new Card("ฏ", "to patak", "t", "ฏ ปฏัก (to patak) – javelin", "Thai"),
    new Card("ฐ", "tho than", "th", "ฐ ฐาน (tho than) – pedestal", "Thai"),
    new Card("ฑ", "tho montho", "t", "ฑ มณโฑ (tho montho) – Montho (character from Ramayana)", "Thai"),
    new Card("ฒ", "tho phu thao", "t", "ฒ ผู้เฒ่า (tho phu thao) – elder", "Thai"),
    new Card("ณ", "no nen", "n", "ณ เณร (no nen) – samanera (buddhist term)", "Thai"),
    new Card("ด", "do dek", "d", "ด เด็ก (do dek) – child", "Thai"),
    new Card("ต", "to tao", "t", "ต เต่า (to tao) – turtle", "Thai"),
    new Card("ถ", "tho thung", "th", "ถ ถุง (tho thung) – sack", "Thai"),
    new Card("ท", "tho thathan", "t", "ท ทหาร (tho thahan) – soldier", "Thai"),
    new Card("ธ", "tho thong", "t", "ธ ธง (tho thong) – flag", "Thai"),
    new Card("น", "no nu", "n", "น หนู (no nu) – mouse", "Thai"),
    new Card("บ", "bo baimai", "b", "บ ใบไม้ (bo baimai) – leaf", "Thai"),
    new Card("ป", "po pla", "p", "ป ปลา (po pla) – fish", "Thai"),
    new Card("ผ", "pho phueng", "p", "ผ ผึ้ง (pho phueng) – bee", "Thai"),
    new Card("ฝ", "fo fa", "f", "ฝ ฝา (fo fa) – lid", "Thai"),
    new Card("พ", "pho phan", "p", "พ พาน (pho phan) – phan (decorated tray found in Asia)", "Thai"),
    new Card("ฟ", "fo fan", "f", "ฟ ฟัน (fo fan) – tooth", "Thai"),
    new Card("ภ", "pho samphao", "p", "ภ สำเภา (pho samphao) – junk", "Thai"),
    new Card("ม", "mo ma", "m", "ม ม้า (mo ma) – horse", "Thai"),
    new Card("ย", "yo yak", "y", "ย ยักษ์ (yo yak) – giant", "Thai"),
    new Card("ร", "ro ruea", "r", "ร เรือ (ro ruea) – boat", "Thai"),
    new Card("ล", "lo ling", "l", "ล ลิง (lo ling) – monkey", "Thai"),
    new Card("ว", "wo waen", "w", "ว แหวน (wo waen) – ring", "Thai"),
    new Card("ศ", "so sala", "s", "ศ ศาลา (so sala) – pavilion", "Thai"),
    new Card("ษ", "so ruesi", "s", "ษ ฤๅษี (so ruesi) – hermit", "Thai"),
    new Card("ส", "so suea", "s", "ส เสือ (so suea) – tiger", "Thai"),
    new Card("ห", "ho hip", "h", "ห หีบ (ho hip) – chest (box)", "Thai"),
    new Card("ฬ", "lo chula", "l", "ฬ จุฬา (lo chula) – kite", "Thai"),
    new Card("อ", "o ang", "or", "อ อ่าง (o ang) – basin", "Thai"),
    new Card("ฮ", "ho nok huk", "h", "ฮ นกฮูก (ho nok huk) – owl", "Thai"),
  ];

  constructor() { }

  getCards(): Card[] {
    return this.cards;
  }
}
