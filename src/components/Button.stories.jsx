import React from 'react';
import { Button } from './Button';  // Updated import

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Button variant style'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size'
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color'
    },
    onClick: {
      action: 'clicked'
    },
    children: {
      control: 'text',
      description: 'Button content'
    }
  }
};

export default meta;

export const Primary = {
  args:{
    children:"Button",
    variant:"primary",
    size:"small",
    onclick: () => console.log("primary butoon clicked"),
    backgroundColor:"#f3e4e4"
  }
};

export const Secondary = {
  args:{
    children:'Secondary Button',
    variant:"secondary",
    size:"small",
    onclick:() => console.log('Secondary button clicked'),
    backgroundColor:"#c79292"
  }
};

export const Danger = {
  args:{
    children:'Danger Button',
    variant:"danger",
    onclick:() => console.log('Danger button clicked'),
    backgroundColor:"#ddbfbf",
    size:"small"
  }
};

export const Custom = {
  args: {
    children: 'Custom Button',
    variant: "secondary",
    size: 'large',
    onClick: () => console.log('Custom button clicked'),
    backgroundColor: "#03a803"
  }
};