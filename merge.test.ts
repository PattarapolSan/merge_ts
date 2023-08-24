import { merge } from "./Merge";
describe('merge function', () => {
    test('Merge two collection of sorted number array with equal length', () => {
        const collection_1 = [1,2,3,4];
        const collection_2 = [6,7,8,9];
        const res = merge(collection_1, collection_2);
        expect(res).toEqual([1,2,3,4,6,7,8,9])
    });

    test('Merge two collection of sorted number array with unequal length', () => {
        const collection_1 = [8,12,14,18];
        const collection_2 = [4,5];
        const res = merge(collection_1, collection_2);
        console.log(res);
        expect(res).toEqual([4,5,8,12,14,18])
    });

    test('Merge two collection of sorted number array with unequal length', () => {
        const collection_1 = [1,2,3];
        const collection_2 = [15,16,17,18];
        const res = merge(collection_1, collection_2);
        console.log(res);
        expect(res).toEqual([1,2,3,15,16,17,18])
    });

    test('Merge two collection of sorted number array with empty array', () => {
        const collection_1 = [];
        const collection_2 = [15,16,17,18];
        const res = merge(collection_1, collection_2);
        console.log(res);
        expect(res).toEqual([15,16,17,18])
    });
});