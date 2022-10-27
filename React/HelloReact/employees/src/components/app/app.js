import { Component } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import EmployeesList from '../employees-list/employees-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Jonh C.", salary: 800, increase: false, rise: true, id: 1 },
                { name: "Alex M.", salary: 1000, increase: true, rise: false, id: 2 },
                { name: "Teodor L.", salary: 3000, increase: false, rise: false, id: 3 },
                { name: "Harry P.", salary: 5000, increase: true, rise: true, id: 4 },
            ],
            term: '',
            filter: 'all'
        }
        this.idMax = 5
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.idMax++
        }

        this.setState(({ data }) => ({
            data: [...data, newItem]
        }))
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({ data }) => {
    //     //     const index = data.findIndex(elem => elem.id === id)

    //     //     const oldData = data[index]
    //     //     const newItem = { ...oldData, increase: !oldData.increase }
    //     //     const newArrData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //     //     return {
    //     //         data: newArrData
    //     //     }
    //     // })
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase }
    //             }
    //             return item
    //         })
    //     }))
    // }

    // onToggleRise = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, rise: !item.rise }
    //             }
    //             return item
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (!term.length) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter(item => item.rise)
            case "moreThen1000":
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state
        const amountEmployees = data.length
        const riseEmployees = data.filter(item => item.increase).length
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter)

        return (
            <div className='app' >
                <AppInfo
                    amountEmployees={amountEmployees}
                    riseEmployees={riseEmployees} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise}
                    onToggleProp={this.onToggleProp} />

                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}

export default App