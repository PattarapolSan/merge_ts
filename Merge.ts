export const merge = (collection_1: number[], collection_2:number[]):number[] => {

    let i = 0;
    const res :number[] = new Array();
    const min_length = (collection_1.length < collection_2.length? collection_1.length: collection_2.length);

    while (i < min_length) {
        if(collection_1[0] < collection_2[0]) {
            res.push(collection_1[0]);
            collection_1.shift();
        }

        else {
            res.push(collection_2[0]);
            collection_2.shift();
        }
        i++;
    }

    if(collection_1.length !== 0) {
        res.push(...collection_1);
    }
    else {
        res.push(...collection_2);
    }



    return res;
}