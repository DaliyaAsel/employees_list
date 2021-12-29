import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // отправляем данные формы
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length > 3 && this.state.salary.length !== 0) {
            this.props.onAdd(this.state.name, this.state.salary); //вызываем ф-ю и передаем в нее аргументы из инпутов
        }
        else{
            console.log("заполните поля формы")
        }
       
        this.setState({  //очищаем поля формы
            name: '',
            salary: ''
        })
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name" 
                        value={this.state.name}
                        onChange={this.onValueChange} 
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={this.state.salary}
                        onChange={this.onValueChange} 
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;