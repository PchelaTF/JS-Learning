import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({ data, onDelete, onToggleProp }) => {

    const elements = data.map(elem => {
        const { id, ...elemProps } = elem;

        return (
            // <EmployeesListItem name={elem.name} salary={elem.salary} />
            <EmployeesListItem
                key={id}
                {...elemProps}
                onDelete={() => onDelete(id)}
                // onToggleIncrease={() => onToggleIncrease(id)}
                // onToggleRise={() => onToggleRise(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList