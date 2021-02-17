import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javasript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among developers'
  },
  {
    title: 'How do you use React?',
    content: 'You user React by creating components'
  }
];

export default () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}
