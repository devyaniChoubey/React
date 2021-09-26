import {Component} from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
   static defaultProps = {
       nColumns : 5,
       nRows : 5,
       setLightOn : 0.25 
   } 
   constructor(props){
       super(props)
       this.state = {
             hasWon : false,
             board : this.createBoard()
       }
   }
   createBoard(){
       let {nRows , nColumns , setLightOn} = this.props;
       let board = [];
        for(let i = 0; i < nRows; i++){
            let rows = [];
           for(let j = 0; j < nColumns; j++){
               rows.push(Math.random() < setLightOn)
           }
           board.push(rows)
       }
       return board;
   }
   flipCellAround(coord){
        let {nColumns , nRows} = this.props;
        let board = this.state.board;
        let [x , y] = coord.split("-").map(Number);
        function flipCell(x , y){
               if(x >= 0  && x < nRows && y >= 0 && y <nColumns){
                   board[x][y] = !board[x][y]
               }
        }
        flipCell(x , y - 1);
        flipCell(x , y + 1);
        flipCell(x - 1, y);
        flipCell(x + 1 , y);
        let hasWon = board.every(row => row.every(cell => !cell));
        this.setState({ board , hasWon}); 
   }
    maketable(){
        let {nColumns , nRows} = this.props;
        let tblBoard = [];
        for(let x = 0; x < nRows; x++){
            let rows = [];
            for(let y = 0; y < nColumns; y++){
                let coord = `${x}-${y}`;
                rows.push(
                    <Cell
                    key={coord}
                    isLit={this.state.board[x][y]}
                    flipCellAround={() => this.flipCellAround(coord)}
                    />
                )
            }
            tblBoard.push(<tr key={x}>{rows}</tr>);
        }
        return (
            <table className='Board'>
              <tbody>{tblBoard}</tbody>
            </table>
        );
    }
   render(){
       return(
           <div>
              {this.state.hasWon ? (
                    <div className="winner">
                       <span className="neon-orange">You</span>
                       <span className="neon-blue">Win!</span>
                    </div>
              ) : (
                    <div>
                        <div className='Board-title'>
                            <div className='neon-orange'>Lights</div>
                            <div className='neon-blue'>Out</div>
                        </div>
                        {this.maketable()}
                    </div>
              )}
           </div>
       )
   }
}
export default Board;