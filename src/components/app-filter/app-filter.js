import './app-filter.css';

const AppFilter = (props)  => {
    
    // формируем кнопки в виде массива данных
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'}, // label - это то что будет написано внутри кнопкок, name - это как раз фильтер из switch case, метода filterPost app.js
        {name: 'like', label: 'На повышение'},
        {name: 'salary', label: 'З/п больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filterBtn === name; // для определения, активный обьект или нет, чтобы изменять эффеткы кнопки. По умолчанию в app.js filterBtn: 'all'
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button className={`btn ${clazz}`} 
            type="button" 
            key={name} 
            onClick={() => props.onBtnFilterSelect(name)} > 
            {label} 
            </button>
        )
    }) 

    return (
        <div>
            <div className="btn-group"> {buttons}
            </div>
        </div>
    )
}

export default AppFilter;