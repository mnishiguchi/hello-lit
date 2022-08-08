import { html } from 'lit-html'
import './my-chip'

export default {
  title: 'Components/Chip',
  argTypes: {
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
      defaultValue: 'medium'
    },
    color: {
      control: { type: 'radio' },
      options: ['blue', 'purple', 'red'],
      defaultValue: 'blue'
    }
  }
}

const Template = ({ label, size, color }) =>
  html`<my-chip .color=${color} .label=${label} .size=${size}></my-chip>`

export const Example = Template.bind({})
Example.args = {
  label: 'Chip'
}
