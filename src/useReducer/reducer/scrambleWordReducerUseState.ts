export interface ScrambleWordState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
}

//Acciones

export type ScrambleWordsAction =
    | { type: 'AUN_NO_tENGO_IDEA' }


const GAME_WORDS = [
    "REACT",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "HTML",
    "ANGULAR",
    "SOLID",
    "NODE",
    "VUEJS",
    "SVELTE",
    "EXPRESS",
    "MONGODB",
    "POSTGRES",
    "DOCKER",
    "KUBERNETES",
    "WEBPACK",
    "VITE",
    "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
    return word
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
};

