import moment from 'moment';
import { numberOfYearse, displayOfTheMonthInText, displayOfTheYear, endingOfTheWord } from './employeeBirthdays.js';

//#region A list of employees
let vera = { name: "Бондарева Вера", birthdays: moment([2000, 7, 20]) };
let vika = { name: "Васильева Виктория", birthdays: moment([2000, 6, 20]) };
let malika = { name: "Кузнецова Малика", birthdays: moment([2000, 5, 20]) };
let anna = { name: "Петрова Анна", birthdays: moment([1973, 1, 5]) };
let maks = { name: "Белов Максим", birthdays: moment([1984, 2, 7]) };
let artem = { name: "Федосеев Артём", birthdays: moment([1971, 6, 28]) };
let lila = { name: "Овчинникова Лиля", birthdays: moment([1973, 1, 17]) };
let mark = { name: "Емельянов Марк", birthdays: moment([1995, 11, 8]) };
let dima = { name: "Попов Дмитрий", birthdays: moment([1986, 3, 4]) };
let alisa = { name: "Калмыкова Алиса", birthdays: moment([1998, 4, 25]) };
let veronika = { name: "Лобанова Вероника ", birthdays: moment([1977, 12, 6]) };


let arrayOfEmployees = [vera, vika, malika, anna, maks, artem, lila, mark, dima, alisa, veronika];
//#endregion
describe('', () => {
    describe('numberOfYearse', () => {
        it('checking the coend checknformity of the number of years (month corresponds to the current) ', () => {
            expect(numberOfYearse(arrayOfEmployees, 1)).toBe(22);
        })
        it('checking the conformity of the number of years (month before the current) ', () => {
            expect(numberOfYearse(arrayOfEmployees, 2)).toBe(22);
        })
    })
    describe('displayOfTheMonthInText', () => {
        it('check for capital letter ', () => {
            expect(displayOfTheMonthInText(arrayOfEmployees, 1)).toBe("Август");
        })
        it('check on undefined. If the string is empty, it will return undefined', () => {
            expect(displayOfTheMonthInText(arrayOfEmployees, 0)).not.toBe(undefined);
        })
    });
    describe('displayOfTheYear', () => {
        it('checking the output of the year', () => {
            expect(displayOfTheYear(4)).toBe(2021);
        })
        it('checking the output of the year', () => {
            expect(displayOfTheYear(6)).toBe(2022);
        })
    });
    describe('endingOfTheWord', () => {
        it('end check', () => {
            expect(endingOfTheWord(0)).toBe("лет");
        })
    });
});