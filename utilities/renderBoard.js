export default function renderBoard(position) {
    const imagePaths = {
        P: "images/pieces/pawn_light.png", 
        p: "images/pieces/pawn_dark.png", 
        N: "images/pieces/knight_light.png", 
        n: "images/pieces/knight_dark.png", 
        B: "images/pieces/bishop_light.png", 
        b: "images/pieces/bishop_dark.png", 
        R: "images/pieces/rook_light.png", 
        r: "images/pieces/rook_dark.png", 
        K: "images/pieces/king_light.png", 
        k: "images/pieces/king_dark.png", 
        Q: "images/pieces/queen_light.png", 
        q: "images/pieces/queen_dark.png"
    };
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let board = `<div id="board">`;
    for (let rank = 0; rank < 8; rank++ ) {
        board += `<div class="rank" data-rank=${rank}>`;
        for (let file = 0; file < 8; file++) {
            let image = '';
            let piece = '';
            if (position[file][rank] !== '-') {
                image = `<img src=${imagePaths[position[file][rank]]}>`;
                piece = `data-piece=${position[file][rank]}`
            }
            let squareColor = 'dark';
            if ((rank + file) % 2 === 0) {
               squareColor = 'light'; 
            }
            board += `
                <div 
                id="${files[file]}${rank + 1}"
                class="square ${squareColor}" 
                data-rank=${rank} 
                data-file=${file}
                ${piece}>
                    ${image}
                </div>
                `;
        }
        board += `</div>`;
    }
    board += `</div>`;
    return board;
}