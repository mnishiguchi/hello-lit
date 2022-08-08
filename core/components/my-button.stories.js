import { html } from 'lit-html'
import './my-button'

export default {
  title: 'Components/Button',
  argTypes: {
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium'
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
      defaultValue: 'primary'
    }
  }
}

const Template = ({ fullWidth, label, size, variant }) =>
  html`<my-button
    ?fullWidth=${fullWidth}
    .variant=${variant}
    .label=${label}
    .size=${size}
  ></my-button>`

export const Example = Template.bind({})
Example.args = {
  label: 'Button'
}
