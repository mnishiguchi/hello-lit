import { LitElement, html } from 'lit'
import clsx from 'clsx'
import Style from './my-chip.scss'

export class Chip extends LitElement {
  // https://github.com/drdreo/lit-scss-loader
  static get styles() {
    return [Style]
  }

  static properties = {
    color: { type: String },
    size: { type: String },
    label: { type: String },
    onClick: { type: Function }
  }

  render() {
    const className = clsx([
      'mdc-evolution-chip',
      this.color === 'red' && 'is-red',
      this.color === 'blue' && 'is-blue',
      this.color === 'purple' && 'is-purple',
      this.size === 'small' && 'is-small',
    ])

    return html`
      <div class=${className} @click=${this.onClick}>
        <span
          class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
          role="gridcell"
        >
          <button
            class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
            type="button"
            tabindex="0"
          >
            <span
              class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
            ></span>
            <span class="mdc-evolution-chip__text-label">${this.label}</span>
          </button>
        </span>
      </div>
    `
  }
}

customElements.define('my-chip', Chip)
