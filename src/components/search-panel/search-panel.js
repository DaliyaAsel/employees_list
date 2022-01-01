import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            search: ''  //этот search мы приравняем к term в app.ja обьекта state
        }
    }

    onSearch = (e) => {
        const inpValue = e.target.value;
        this.setState({ search: inpValue});
        this.props.onUpdateSearch(inpValue);
    }

   render() {
    return (
        <input type="text" className="form-control search-input" placeholder="Найти сотрудника" value={this.state.search} onChange={this.onSearch} />
    )
   }
}

export default SearchPanel;