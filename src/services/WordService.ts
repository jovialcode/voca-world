import {WordBeepWord} from "../store/word_beep/atom";

const words_example : WordBeepWord[] = [
    {no: 1, pronounce: "kæt", spelling: "Cat", meaning: "고양이", image: "/cats.jpg"},
    {no: 2, pronounce: "dɔːɡ", spelling: "Dog", meaning: "강아지", image: "/dogs.jpg"}
];

const WordService = () => {
    return {
        async getWordBeep() {
            return words_example;
        }
    }
}

export default WordService();