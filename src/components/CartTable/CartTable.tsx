import Table from "react-bootstrap/Table"
import ButtonAdd from "../../components/Buttons/Buttons"
import { EditIcon } from "../../components/Icons/Icons"

const CartTable = () => {
	return (
		<>
			<Table responsive="sm" borderless>
				<thead className="table-head">
					<tr>
						<th>№</th>
						<th>Название</th>
						<th>Адрес</th>
						<th>Действие</th>
					</tr>
				</thead>
				<tbody className="table-body">
					<tr>
						<td>12345</td>
						<td>Дипломная работа</td>
						<td>http://www.work5.ru/services</td>
						<td colSpan={2} className='table-body__row'>
							<ButtonAdd text="Редактировать" className="btn-add" icon={<EditIcon name="icon-edit" size="41" fill="white" />} />
							<ButtonAdd text="Редактировать" className="btn-add-gray" icon={<EditIcon name="icon-cancel" size="30" fill="white" />} />

						</td>
					</tr>
					<tr>
						<td>12345</td>
						<td>Дипломная работа</td>
						<td>http://www.work5.ru/services</td>
						<td colSpan={2} className='table-body__row'>
							<ButtonAdd text="Редактировать" className="btn-add" icon={<EditIcon name="icon-edit" size="41" fill="white" />} />
							<ButtonAdd text="Редактировать" className="btn-add-gray" icon={<EditIcon name="icon-cancel" size="30" fill="white" />} />
						</td>
					</tr>

				</tbody>
			</Table>
		</>
	)
}

export default CartTable

