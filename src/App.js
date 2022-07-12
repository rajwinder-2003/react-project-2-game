import React, {useState} from 'react';
import Icon from './componets/Icon';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import './App.css';
  import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap';
const ItemArray = new Array(9).fill("empty")
const App = () => {
  const[isCross, setIsCross] = useState(false);
  const[winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    ItemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
        ItemArray[0] === ItemArray[1] &&
        ItemArray[0] === ItemArray[2] &&
        ItemArray[0] !== "empty"
      ) {
      setWinMessage(`${ItemArray[0]} wins`)
    } else if (
        ItemArray[3] !== "empty" &&
        ItemArray[3] === ItemArray[4] &&
        ItemArray[4] === ItemArray[5]
        
      ) {
      setWinMessage(`${ItemArray[3]} won`)
    } else if (
      ItemArray[6] !== "empty" &&
      ItemArray[6] === ItemArray[7] &&
      ItemArray[7] === ItemArray[8]
      
    ) {
    setWinMessage(`${ItemArray[6]} won`)
    } else if (
      ItemArray[0] !== "empty" &&
      ItemArray[0] === ItemArray[3] &&
      ItemArray[3] === ItemArray[6]
      
    ) {
    setWinMessage(`${ItemArray[0]} won`)
    } else if (
      ItemArray[1] !== "empty" &&
      ItemArray[1] === ItemArray[4] &&
      ItemArray[4] === ItemArray[7]
      
    ) {
    setWinMessage(`${ItemArray[1]} won`)
    } else if (
      ItemArray[2] !== "empty" &&
      ItemArray[2] === ItemArray[5] &&
      ItemArray[5] === ItemArray[8]
      
    ) {
    setWinMessage(`${ItemArray[2]} won`)
    } else if (
      ItemArray[0] !== "empty" &&
      ItemArray[0] === ItemArray[4] &&
      ItemArray[4] === ItemArray[8]
      
    ) {
    setWinMessage(`${ItemArray[0]} won`)
    } else if (
      ItemArray[2] !== "empty" &&
      ItemArray[2] === ItemArray[4] &&
      ItemArray[4] === ItemArray[6]
      
    ) {
    setWinMessage(`${ItemArray[2]} won`)
    }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, {type: "success"});
    }
    if (ItemArray[itemNumber] === "empty") {
      ItemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross) 
    } else {
      return toast("already filled", {type: "error"})
    }
    checkIsWinner();
  };
  return (
   <Container className='p-5'>
     <ToastContainer position='bottom-center'/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button
              color="success"
              block
              onClick={reloadGame}
              > Reload the Game</Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {ItemArray.map((item, index) => (
                <Card color='info' onClick={ () => changeItem(index)}>
                  <CardBody className='box'>
                    <Icon name={item}/>
                  </CardBody>
                </Card>
            ))}
          </div>
        </Col>
      </Row>
   </Container>
  );
}

export default App;
