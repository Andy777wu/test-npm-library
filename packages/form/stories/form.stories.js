import { Form } from '../'

export default {
    title: 'WnxForm',
    component: Form
}
const Template = (args) => <Form {...args} />;
export const Text = Template.bind({});
Text.args = {
    type: 'text',
    label: 'form',
}
export const Password = Template.bind({});
Password.args = {
    type: 'password',
    label: 'form'
}  
