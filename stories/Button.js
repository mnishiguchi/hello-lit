import { html } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map.js'
import clsx from 'clsx'

import './button.css'

export const Button = ({
  primary,
  backgroundColor = null,
  size = 'medium',
  label,
  onClick
}) => {
  return html`
    <button
      type="button"
      class=${clsx([
        'storybook-button',
        `storybook-button--${size}`,
        primary ? 'storybook-button--primary' : 'storybook-button--secondary'
      ])}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `
}
