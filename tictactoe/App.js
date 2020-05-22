import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

//function component
function Square(props){
    return(
      /* props.onPress passes the press event to the onPress defined of the parent
       in this case Board.*/
      <TouchableOpacity style={styles.button} onPress = {props.onPress}>
        <Text style={{fontSize: 100 }}>
          {props.value}
        </Text>
      </TouchableOpacity>

    );
}

// my br
function Br(){
  return(
    <View>
      <Text>{"\n"}
      </Text>
    </View>
  )
}

class Board extends React.Component {
    renderSquare(i) {
        // render by rows
        return(
          /*
            this.props.onPress(i) passes the onPress event to the parent of this
            component. in this case the Game function
          */
          <View >
            <Square
            value={this.props.squares[i]}
            onPress = {() => this.props.onPress(i)}
              />
          </View>
        );
    }

    render() {
      return(
        <View style={{margin: 10}}>
            <Row>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </Row>
            <Row>
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </Row>
            <Row>
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </Row>
        </View>
      )
    }

}

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      history: [{squares: Array(9).fill(null),}],
      stepNumber: 0,
      xIsNext: true,
      message: false,
    };
  }

  handleClick(i){
    //alert("in handle click func");
    // make another copy of state. keep things immutable
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // same thing with squares
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // because we fill the squares with null if they are not null it'll trigger
    // this if statement
    if(calculateWinner(squares))
        return;

    else if(squares[i]){
      this.setState({
        history: history.concat([{squares:squares,}]),
        stepNumber: history.length,
        xIsNext: this.state.xIsNext,
        message: true,
      });
      return;
    }
    else {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{squares:squares,}]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        message: false,
      });
    }
  }
  reset() {
    this.setState({
      history: [{squares: Array(9).fill(null),}],
      stepNumber: 0,
      xIsNext: true,
      message: false,
    });

  }


  render() {
    // history calls our current state
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const status =  winner? 'The winner is ' + (!this.state.xIsNext ? 'X' : 'O'):
                    'Next player ' + (this.state.xIsNext ? 'X' : 'O');
    const message = (this.state.message ? 'Tile is already full': '');
    return (
      /*Since this is the owner of all the squares, it has to define the
      onPress func */
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{status}</Text>
        <View style={styles.container}>
          <Board squares={current.squares}
          onPress={(i) => this.handleClick(i)} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Br />
          <Button title='Reset' onPress={() => this.reset()}/>
        </View>
        <Text style={{color: 'red', fontWeight: 'bold'}}>{message}</Text>
      </View>
    );
  }
}

/* This works on expo
<View style = {{flexDirection: 'row'}}>
  <Square/>
  <Square/>
  <Square/>
</View>
<View style = {{flexDirection: 'row'}}>
  <Square/>
  <Square/>
  <Square/>
</View>
<View style = {{flexDirection: 'row'}}>
  <Square/>
  <Square/>
  <Square/>
</View> */

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for (let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] != ' ' && squares[a] && squares[a] == squares[b] &&
      squares[a] == squares[c])
        {
          return squares[a];
        }
  }
  return null;
}

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 60,
  },
  button:{
    //backgroundColor: '#fff',
    width: 100,
    height: 100,
    color: 'red',
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /*separator:{
    //borderBottomColor: '#fff',
    //borderBottomWidth: 1,
    //borderRightWidth: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 50,
  },*/
});
