export const getNumberOfCards = (gameDifficulty: string) => {
    switch (gameDifficulty) {
        case 'easy':
            return 5;
        case 'medium':
            return 7;
        case 'hard':
            return 10;
    }
}

export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
