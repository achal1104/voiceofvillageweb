import { field, waterscarity, well, well1, dryland, droughtcondition, farmer, lakebed, stepwell, shepherd, cattlecamp } from './images.js'
// Photographs only. Real stories (title, village, date, text) will be added from verified field reports.
export const CATS = ['Farmer stories', 'Women’s stories', 'Water scarcity', 'Drought-affected land', 'Livestock & fodder', 'Village life']
export const PHOTOS = [
  { cat: CATS[0], img: farmer, pos: '70% 35%', alt: 'A farmer holding dried crop on cracked, parched earth' },
  { cat: CATS[2], img: stepwell, pos: '50% 50%', alt: 'Women collecting water at the bottom of a deep stone stepwell' },
  { cat: CATS[3], img: lakebed, pos: '50% 50%', alt: 'Two men digging in a cracked, dried-up lakebed' },
  { cat: CATS[4], img: cattlecamp, pos: '50% 50%', alt: 'Cattle sheltered under green shade nets at a fodder camp' },
  { cat: CATS[4], img: shepherd, pos: '50% 50%', alt: 'A herdsman with his sheep and goats on dry, cracked ground' },
  { cat: CATS[1], img: waterscarity, pos: '50% 50%', alt: 'Women carrying metal water pots along a dirt path' },
  { cat: CATS[0], img: field, pos: '50% 30%', alt: 'A farmer crouching on cracked dry earth' },
  { cat: CATS[2], img: well, pos: '50% 50%', alt: 'Villagers crowding around a stone well' },
  { cat: CATS[2], img: well1, pos: '50% 55%', alt: 'Women gathered around a large dry well' },
  { cat: CATS[3], img: dryland, pos: '50% 70%', alt: 'Cracked dry farmland under a blue sky' },
  { cat: CATS[5], img: droughtcondition, pos: '50% 50%', alt: 'Aerial view of a dry village' },
]
