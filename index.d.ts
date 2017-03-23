
declare module "mocha-given" {
    interface Clause {
        (done?: () => void) : void;
    }

    function Given(clause: Clause): void;
    function Given(varName: string, clause: Clause): void;
    function When(clause: Clause): void;
    function When(varName: string, clause: Clause): void;
    function Then(clause: Clause): void;
    function And(clause: Clause): void;
    function Invariant(clause: Clause): void;
}
