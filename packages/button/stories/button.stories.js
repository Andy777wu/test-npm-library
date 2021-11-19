import { Btn } from '../'

export default {
    title: 'WnxBtn',
    component: Btn
}
const Template = (args) => <Btn {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    label: 'button'
}
export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'button'
}
export const Small = Template.bind({});
Small.args = {
    size: 'small',
    backgroundColor: '#f0f',
    label: 'button'
}  
