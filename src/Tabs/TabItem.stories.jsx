import React from "react";
import { TabItem } from "./TabItem";

export default {
    title: 'TabItem',
    component: TabItem,
    argTypes: {
        text: {control: 'text'}
    }
}

const Template = (args) => <TabItem {...args} />

export const Base = Template.bind({})
Base.args = {
    text: "initial text"
}