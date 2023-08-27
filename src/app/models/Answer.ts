export interface Answer {
    txt: string[];
    correct: boolean;
};

export interface UserAnswer {
    qtyp: "sc" | "mc" | "fi";
    answer: number | number[] | string;
}