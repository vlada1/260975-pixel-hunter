import {createDomElement} from '../create-screen';

class AbstractView {
  get template() {
    return `You have to define template for view`;
  }

  render() {
    return createDomElement(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}

export default AbstractView;
