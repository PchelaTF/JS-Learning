import './app-info.css'

const AppInfo = ({ amountEmployees, riseEmployees }) => {

    // const { amountEmployees, riseEmployees } = props

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {amountEmployees}</h2>
            <h2>Премию получат: {riseEmployees}</h2>
        </div>
    )
}

export default AppInfo