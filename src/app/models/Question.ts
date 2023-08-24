import { Answer } from "./Answer";

export interface Question {
    qid: string;
    qtxt: string[];
    qtyp: "sc" | "mc" | "fi";
    qanswers: Answer[];
};