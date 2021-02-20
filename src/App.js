import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

export default () => {
  const [selectedColor, setSelectedColor] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} />
      <Search />
       */}
       <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
       {showDropdown ?
         <Dropdown
          selected={selectedColor}
          onSelectedChange={setSelectedColor}
          options={options}
        /> : null
       }
    </div>
  );
}
