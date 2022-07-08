import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.state;

    const cards = { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prevSate) => ({
      savedCards: [...prevSate.savedCards, cards],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  }

  validateSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (
      cardName
      && cardDescription
      && cardImage
      && cardRare
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && cardAttr1 <= +'90'
      && cardAttr2 <= +'90'
      && cardAttr3 <= +'90'
      && sum < Number('211')
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = (type === 'checkbox') ? checked : target.value;
    this.setState({ [name]: value }, () => {
      this.validateSaveButton();
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        {
          savedCards.map((card) => {
            console.log(card);
            const { cardName: Name,
              cardDescription: Description,
              cardAttr1: Attr1,
              cardAttr2: Attr2,
              cardAttr3: Attr3,
              cardImage: Image,
              cardRare: Rare,
              cardTrunfo: trunfoCard,
            } = card;
            return (
              <Card
                key={ Name }
                cardName={ Name }
                cardDescription={ Description }
                cardAttr1={ Attr1 }
                cardAttr2={ Attr2 }
                cardAttr3={ Attr3 }
                cardImage={ Image }
                cardRare={ Rare }
                cardTrunfo={ trunfoCard }
              />
            );
          })
        }
      </div>
    );
  }
}
export default App;
