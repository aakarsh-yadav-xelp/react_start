import React from "react";
import Downshift from "downshift";
export default class TodoAuto extends React.Component{

mapTodosToTitle(todos){
    this.title = [];
    todos.map(item=>{
        this.title.push(item.title);
    })
    return this.title;
}

render(){
this.mapTodosToTitle(this.props.todos);
    return  <BasicAutocomplete
      items={this.title}
      onChange={selectedItem => console.log(selectedItem)}
    />;
}
}

function BasicAutocomplete({items, onChange}) {
    return (
      <Downshift onChange={onChange}>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex
        }) => (
          <div>
            <input {...getInputProps({placeholder: 'Favorite color ?'})} className="TodoSearch"/>
            {isOpen ? (
              <div className="TodoSearchList">
                {items
                  .filter(
                    i =>
                      !inputValue ||
                      i.toLowerCase().includes(inputValue.toLowerCase()),
                  )
                  .map((item, index) => (
                    <div
                      {...getItemProps({item})}
                      key={item}
                    className="TodoSearchListItem"
                    >
                      {item}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    )
  }