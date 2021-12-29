import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       // имитируем сервер для практики пропсов
      data: [
        {name:"Asel", salary: 600000, increase: false, like: true, id: 1 },
        {name:"Busel", salary: 68000, increase: false, like: false, id: 2},
        {name:"Tosel", salary: 90000, increase: true, like: false, id: 3},
      ]
    }

    this.maxId = 4; // это для генерации id у добавленных элементов
  }
 
// удаление элементов из data
deleteItem = (id) => {
  this.setState(({data}) => {
    return {
      data: data.filter( item => item.id !== id)
    }
  })
}

// добавление сотрудников
addItem = (name, salary) => {
  const newItem = {
      name, 
      salary,
      increase: false,
      like: false,
      id: this.maxId++
  }
  this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
          data: newArr
      }
  });
} 

onToggleProp = (id, prop) => { //переключатель с true  на false. Общий и для звезды и для премии
  this.setState(({data}) => ({
    data: data.map(item => {
      if(item.id === id) {
        return {...item, [prop]: !item[prop]}
      }
      return item;
    })
  }))
}

 
 render() {
   const prize = this.state.data.filter(item =>  item.increase).length;

  return (
    <div className="app">
        <AppInfo  countEmployees={this.state.data.length} prize={prize}/>

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList  data={this.state.data} onDelete={ this.deleteItem } onToggleProp={this.onToggleProp} />
      <EmployeesAddForm  onAdd={this.addItem} />
    </div>
  );
 }
}

export default App;
