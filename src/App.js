import React, { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import './App.css';
//Bootstrap
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
//imagenes
import paypal from './images/money.png';
import creditCard from './images/visa.png';
import question from './images/ic_help.png';

function App() {

  //creo array de las opciones de pago
  const paymentOptions = [
    {
      id: "formHorizontalRadios1",
      title: "Paypal",
      text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.",
      img: paypal
    },
    {
      id: "formHorizontalRadios2",
      title: "Credit Card",
      text: "Maecenas consequat, odio ac commodo convallis, justo lorem tempor nunc, nec luctus elit ligula sit amet ante. Sed scelerisque velit in euismod pharetra. Fusce sagittis vulputate leo, non fermentum justo bibendum sed.",
      img: creditCard
    }
  ]

  //se crea estado para abrir y cerrar el formulario
  const [openForm, setOpenForm] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [num, setNum] = useState("");
  const [cardName, setCardName] = useState("");

  //para inhabilitar el boton
  const disabled = !(
    cardNumber.length &&
    month.length &&
    num.length &&
    cardName.length
  )

  return (
    <div className="App">
      <Card>
        <Card.Header as="h1">3. Payment method</Card.Header>
        <Card.Body>
          <Form >
            {paymentOptions.map((paymentOp, i) => (
              <>
                <div className="payment-op-title">
                  <Form.Check key={i}
                    custom
                    type="radio"
                    label={paymentOp.title}
                    name="formHorizontalRadios"
                    id={paymentOp.id}
                    onClick={() => {
                      paymentOp.id === "formHorizontalRadios2" ?
                        setOpenForm(true) :
                        setOpenForm(false)
                    }}
                  />
                  <img src={paymentOp.img} alt={`imagen de ${paymentOp.title}`} />
                </div>
                <p className="payment-op-txt">{paymentOp.text}</p>
              </>
            ))}
            {
              openForm ?
                <>
                  <ReactInputMask onChange={e => setCardNumber(e.target.value)} value={cardNumber} placeholder="CARD NUMBER" mask="9999 9999 9999 9999" maskChar=" " className="form-control mt-5" />{/* El componente ReactInputMask aplica la cantidad de numeros y la separacion. No funciona con type*/}
                  <Row>
                    <Form.Group as={Col} sm={3} className="mb-0">
                      <Form.Control onChange={e => setMonth(e.target.value)} value={month} as="select" type="month" name="month">
                        <option defaultValue="MM">MM</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} sm={3} className="mb-0">
                      <Form.Control onChange={e => setYear(e.target.value)} value={year} as="select" type="year" name="year">
                        <option defaultValue="YY">YY</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                      </Form.Control>
                    </Form.Group>
                    <Col sm={6} className="container-input">
                      <ReactInputMask onChange={e => setNum(e.target.value)} value={num} placeholder="CVV / CVC" mask="999" maskChar=" " className="form-control" />
                      <img src={question} className="question-image" alt="question mark" />
                    </Col>
                  </Row>
                  <Form.Control onChange={e => setCardName(e.target.value)} value={cardName} placeholder="CARDHOLDER NAME" type="text" name="cardName" />
                </>
                :
                null
            }
            <div className="bttns-container">
              <Button className="shadow-none">
                Back
              </Button>
              <Button className="shadow-none" type="submit" disabled={disabled}>
                Continue
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div >
  );
}

export default App;
