// TODO
// 1. add methods
// 2. add piece classes
    // may not literally be classes
    // a. images
    // b. eval stats
    // c. move history
    // d. move validation
    // e. current square
    // f. legal moves
    // g. user notes (would be cool, not sure useful)

    
export const position = {
    board: [
        ["r", "p", "-", "-", "-", "-", "P", "R"],
        ["n", "p", "-", "-", "-", "-", "P", "N"],
        ["b", "p", "-", "-", "-", "-", "P", "B"],
        ["q", "p", "-", "-", "-", "-", "P", "Q"],
        ["k", "p", "-", "-", "-", "-", "P", "K"],
        ["b", "p", "-", "-", "-", "-", "P", "B"],
        ["n", "p", "-", "-", "-", "-", "P", "N"],
        ["r", "p", "-", "-", "-", "-", "P", "R"]
    ],

    // castling rights
    castleRights: [true, true, true, true],

    // enpassant
    enPassantCandidates: null,

    // side to move
    whiteToMove: true,

    // move counts
    moveCounters: [0, 1],

    // methods
        // validate move
        // set board
        // update castling rights
        // update enpassant candidates
        // update side to move
        // update move counters
        // evaluate position
}