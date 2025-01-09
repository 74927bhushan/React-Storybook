import React from 'react';
import { TodoList } from './TodoList';  // Updated import

const meta = {
  title: 'Components/TodoList',
  component: TodoList,
  tags: ['autodocs'],
  argTypes: {
    canAdd: {
      control: 'boolean',
      description: 'Enable/disable add functionality'
    },
    canDelete: {
      control: 'boolean',
      description: 'Enable/disable delete functionality'
    }
  }
};

export default meta;

export const Default = {
  args:{
    canAdd:true,
    canDelete:true
  }
};

export const DisableAdd = {
  args: {
    canAdd: false,
    canDelete: true
  }
};

export const DisableDelete = {
  args: {
    canAdd: true,
    canDelete: false
  }
};

export const DisableBoth = {
  args: {
    canAdd: false,
    canDelete: false
  }
};