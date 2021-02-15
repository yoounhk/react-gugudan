const shuffleNumbers = (len) => {
    let array = [...Array(len).keys()];
    for (let i = array.length - 1; i > 0; i--) { // Durstenfeld shuffle
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export default shuffleNumbers;

export function genRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}