import { LitElement, html, css } from 'lit'
import clsx from 'clsx'

export class Button extends LitElement {
  static styles = css`
    .my-button {
      font-weight: 700;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
    }
    .my-button--primary {
      color: white;
      background-color: #1ea7fd;
    }
    .my-button--secondary {
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }
    .my-button--small {
      font-size: 12px;
      padding: 10px 16px;
    }
    .my-button--medium {
      font-size: 14px;
      padding: 11px 20px;
    }
    .my-button--large {
      font-size: 16px;
      padding: 12px 24px;
    }
  `

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
