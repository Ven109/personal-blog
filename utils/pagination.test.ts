import {totalPages} from './pagination';

describe('totalPages', () => {
    test('basic', () => {
        expect(totalPages(0, 10)).toBe(0);
        expect(totalPages(10, 10)).toBe(1);
        expect(totalPages(11, 10)).toBe(2);
    });
});
