import rook from './pieceimages/whiteRook.png';
import wood from './squareimages/wood.jpg';

function Square(props) {
    return (
            <img src={props.squarebackground} />
    );
}

export default Square;