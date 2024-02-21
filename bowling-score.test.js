const  score  = require('./bowling-score.js');

test('Tirar siempre un bolo', () => {expect(score("20x1")).toBe(20);});
test('Tirar siempre 0 bolos', () => {expect(score("20x0")).toBe(0);});
test('Tirar 10 veces 3 y el resto 0', () => {expect(score("10x3")).toBe(30);});
test('Semipleno', () => {expect(score("5 & 5 & 3 & 17x0")).toBe(16);});
test('No semipleno si los 10 puntos no son en la misma ronda', () => {expect(score("0 & 5 & 5 & 3 & 16x0")).toBe(13);});
test('Semipleno SOLO suma la siguiente tirada:', () => {expect(score(" 5 & 5 & 3 & 17x1 ")).toBe(33);});
test('Pleno suma los 2 siguientes tiradas', () => {expect(score("10 & 3 & 2 & 16x0")).toBe(20);});
test('Si los 10 son en segunda tirada es semipleno', () => {expect(score("0 & 10 & 3 & 2 & 16x0")).toBe(18);});
test('Pleno SOLO suma las 2 siguientes tiradas', () => {expect(score("10 & 3 & 2 & 16x1")).toBe(36);});
test('Pleno en la penultima ronda', () => {expect(score("16x0 & 10 & 3 & 2")).toBe(20);});
test('Pleno en última ronda da 2 tiradas extra', () => {expect(score("18x0 & 10 & 1 & 1")).toBe(12);});
test('Semipleno en última ronda da 1 tirada extra', () => {expect(score("18x0 & 5 & 5 & 1")).toBe(11);});
test('Todas las tiradas perfectas de 10 bolos ', () => {expect(score("12x10")).toBe(300);});



