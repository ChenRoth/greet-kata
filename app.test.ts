import { greet, splitNames } from './app';

describe('greet', () => {
    it('should say hello to a given person', () => {
        expect(greet('Bob')).toBe('Hello, Bob.');
        expect(greet('Jane')).toBe('Hello, Jane.');
    });

    it('should use a default message if no name is provided', () => {
        expect(greet(null)).toBe('Hello, my friend.');
    });

    it('should shout back upon receiving an uppercased name', () => {
        expect(greet('JERRY')).toBe('HELLO JERRY!');
    });

    it('should say hello to 2 people', () => {
        expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
    });

    it('should say hello to 2 crazy people', () => {
        expect(greet(['JILL', 'JANE'])).toBe('HELLO JILL AND JANE!');
    });

    it('should say hello to more than 2 people', () => {
        expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe('Hello, Amy, Brian and Charlotte.');
    });

    it('should allow a mix of normal and shouted names', () => {
        expect(greet(["Amy", "BRIAN", "Charlotte", "JOHN"])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN AND JOHN!');
    });
});

describe('splitNames', () => {
    it('should split to shouted and normal groups', () => {
        expect(splitNames(['amy', 'BRIAN', 'charlotte'])).toStrictEqual([['amy', 'charlotte'], ['BRIAN']]);
        expect(splitNames(['BRIAN', 'amy', 'CHARLOTTE'])).toStrictEqual([['amy'], ['BRIAN', 'CHARLOTTE']]);
    });
});
