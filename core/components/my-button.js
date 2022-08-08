import { LitElement, html } from 'lit'
import clsx from 'clsx'
import Style from './my-button.scss'

export class Button extends LitElement {
  // https://github.com/drdreo/lit-scss-loader
  static get styles() {
    return [Style]
  }

  static properties = {
    fullWidth: { type: Boolean },
    variant: { type: String },
    size: { type: String },
    label: { type: String },
    onClick: { type: Function }
  }

  constructor() {
    super()
  }

  render() {
    const className = clsx([
      'mdc-button',
      this.variant === 'primary' && 'is-primary',
      this.variant === 'secondary' && 'is-secondary',
      this.variant === 'tertiary' && 'is-tertiary',
      this.variant === 'link' && 'is-link',
      this.size === 'small' && 'is-small',
      this.size === 'large' && 'is-large',
      this.fullWidth && 'is-full-width',
    ])

    return html`
      <button type="button" class=${className} @click=${this.onClick}>
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">${this.label}</span>
      </button>
    `
  }
}

customElements.define('my-button', Button)
