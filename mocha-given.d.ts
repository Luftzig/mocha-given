
declare interface Clause {
    (done?: () => void) : void;
}

declare function Given(clause: Clause): void;
declare function Given(varName: string, clause: Clause): void;
declare function When(clause: Clause): void;
declare function When(varName: string, clause: Clause): void;
declare function Then(clause: Clause): void;
declare function And(clause: Clause): void;
declare function Invariant(clause: Clause): void;
