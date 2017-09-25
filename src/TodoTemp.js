import React from 'react'
import {render} from 'react-dom'
import Downshift from 'downshift'
const items = ['apple', 'pear', 'orange', 'grape', 'banana'];

export default class TodoTemp extends React.Component(){
render(
    <div>
  <Downshift onChange={selection => alert(`You selected ${selection}`)}>
    {({
      getInputProps,
      getLabelProps,
      getItemProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) =>
      <div>
        <label {...getLabelProps()}>Enter a fruit</label>
        <input {...getInputProps()} />
        {isOpen ? (
          <div>
            {items
              .filter(i => !inputValue || i.includes(inputValue))
              .map((item, index) =>
                <div
                  {...getItemProps({
                    key: item,
                    index,
                    item,
                    style: {
                      backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  {item}
                </div>,
              )}
          </div>
        ) : (
          null
        )}
      </div>}
  </Downshift>
</div>);
}

  
