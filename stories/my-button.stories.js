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
    }
  }
}

const Template = ({ primary, label, size }) =>
  html`<my-button
    ?primary=${primary}
    .label=${label}
    .size=${size}
  ></my-button>`

export const Example = Template.bind({})
Example.args = {
  primary: true,
  label: 'Button'
}
