import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input type="text" data-testid="name-input" name="nome" />
        </label>
        <label htmlFor="Descricao">
          Descicao
          <input type="textarea" data-testid="description-input" name="Descicao" />
        </label>
        <label htmlFor="Atributo 1">
          Atributo 1
          <input type="number" data-testid="attr1-input" name="Atributo 1" />
        </label>
        <label htmlFor="Atributo 2">
          Atributo 2
          <input type="number" data-testid="attr2-input" name="Atributo 2" />
        </label>
        <label htmlFor="Atributo 3">
          Atributo 3
          <input type="number" data-testid="attr3-input" name="Atributo" />
        </label>
        <label htmlFor="Image">
          Imagem
          <input type="text" data-testid="image-input" name="Image" />
        </label>
        <label htmlFor="Raridade">
          Raridade
          <select data-testid="rare-input" name="Raridade">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="Trunfo">
          <input type="checkbox" data-testid="trunfo-input" name="Trunfo" />
        </label>
        <label htmlFor="save-button">
          <button type="button" data-testid="save-button">Salvar</button>
        </label>
      </form>
    );
  }
}

export default Form;
