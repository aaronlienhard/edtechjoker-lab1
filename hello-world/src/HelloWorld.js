import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 15px;
        background: lightgray;
      }
      .object {
        color: var(--object-color, green);
      }
    `;
  }

  static get properties() {
    return {
      greeting: {},
      object: {},
    };
  }

  constructor() {
    super();
    this.greeting = 'Hello';
    this.object = "World";
  }

  render() {
    return html`
      <span @click = ${this.toggleObject}
        >${this.greeting}
        <span class = "object"> ${this.object} </span>
      </span>
    `;
  }

  toggleObject() {
    this.object = this.object === 'World' ? 'People' : 'World';
  }
}

customElements.define('my-element', HelloWorld);
