import { LitElement, html, css } from 'lit'
import clsx from 'clsx'
import Style from './my-button.scss'

export class Button extends LitElement {
  static get styles() {
    return [Style]
  }

  static properties = {
    primary: { type: Boolean },
    size: { type: String },
    label: { type: String },
    onClick: { type: Function }
  }

  constructor() {
    super()
    this.size = 'medium'
  }

  render() {
    const className = clsx([
      'my-button',
      `my-button--${this.size}`,
      [this.primary ? 'my-button--primary' : 'my-button--secondary']
    ])

    return html`
      <button type="button" class=${className} @click=${this.onClick}>
        ${this.label}
      </button>
    `
  }
}

customElements.define('my-button', Button)
