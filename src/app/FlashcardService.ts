import { Injectable } from '@angular/core';
import { Card } from './Card';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  cards: Card[] = [
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

  constructor() { }

  getCards(): Card[] {
    return this.cards;
  }
}
