import Square from './Square';
import wood from './squareimages/wood.jpg';
import vanilla from './squareimages/vanilla.jpg';

function ChessBoard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-1"><Square id="a8" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="b8" squarebackground={wood} /></div>
                <div className="col-1"><Square id="c8" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="d8" squarebackground={wood} /></div>
                <div className="col-1"><Square id="e8" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="f8" squarebackground={wood} /></div>
                <div className="col-1"><Square id="g8" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="h8" squarebackground={wood} /></div>
            </div>
            <div className="row">
                <div className="col-1"><Square id="a7" squarebackground={wood} /></div>
                <div className="col-1"><Square id="b7" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="c7" squarebackground={wood} /></div>
                <div className="col-1"><Square id="d7" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="e7" squarebackground={wood} /></div>
                <div className="col-1"><Square id="f7" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="g7" squarebackground={wood} /></div>
                <div className="col-1"><Square id="h7" squarebackground={vanilla} /></div>
            </div>
            <div className="row">
                <div className="col-1"><Square id="a6" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="b6" squarebackground={wood} /></div>
                <div className="col-1"><Square id="c6" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="d6" squarebackground={wood} /></div>
                <div className="col-1"><Square id="e6" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="f6" squarebackground={wood} /></div>
                <div className="col-1"><Square id="g6" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="h6" squarebackground={wood} /></div>
            </div>
            <div className="row">
                <div className="col-1"><Square id="a5" squarebackground={wood} /></div>
                <div className="col-1"><Square id="b5" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="c5" squarebackground={wood} /></div>
                <div className="col-1"><Square id="d5" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="e5" squarebackground={wood} /></div>
                <div className="col-1"><Square id="f5" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="g5" squarebackground={wood} /></div>
                <div className="col-1"><Square id="h5" squarebackground={vanilla} /></div>
            </div>
            <div className="row">
                <div className="col-1"><Square id="a4" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="b4" squarebackground={wood} /></div>
                <div className="col-1"><Square id="c4" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="d4" squarebackground={wood} /></div>
                <div className="col-1"><Square id="e4" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="f4" squarebackground={wood} /></div>
                <div className="col-1"><Square id="g4" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="h4" squarebackground={wood} /></div>
            </div>
            <div className="row">
                
                <div className="col-1"><Square id="a3" squarebackground={wood} /></div>
                <div className="col-1"><Square id="b3" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="c3" squarebackground={wood} /></div>
                <div className="col-1"><Square id="d3" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="e3" squarebackground={wood} /></div>
                <div className="col-1"><Square id="f3" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="g3" squarebackground={wood} /></div>
                <div className="col-1"><Square id="h3" squarebackground={vanilla} /></div>
                
            </div>
            <div className="row">
                
                <div className="col-1"><Square id="a2" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="b2" squarebackground={wood} /></div>
                <div className="col-1"><Square id="c2" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="d2" squarebackground={wood} /></div>
                <div className="col-1"><Square id="e2" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="f2" squarebackground={wood} /></div>
                <div className="col-1"><Square id="g2" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="h2" squarebackground={wood} /></div>
                
            </div>
            <div className="row">
                
                <div className="col-1"><Square id="a1" squarebackground={wood} /></div>
                <div className="col-1"><Square id="b1" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="c1" squarebackground={wood} /></div>
                <div className="col-1"><Square id="d1" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="e1" squarebackground={wood} /></div>
                <div className="col-1"><Square id="f1" squarebackground={vanilla} /></div>
                <div className="col-1"><Square id="g1" squarebackground={wood} /></div>
                <div className="col-1"><Square id="h1" squarebackground={vanilla} /></div>
                
            </div>
        </div>
    );
}

export default ChessBoard;