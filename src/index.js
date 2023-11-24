import renderBoard from '../utilities/renderBoard.js';
import { position } from '../state/position.js';

export default function render(root) {
  console.log('rendering');
  return renderBoard(position.board);
}
