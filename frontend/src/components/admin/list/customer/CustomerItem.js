import React, {Fragment} from 'react'

export default function CustomerItem({item}) {
    return (
        <Fragment>
            <tr>
            <td>{item.dni}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.genre}</td>
            <td>{item.phone_no}</td>
            </tr>
        </Fragment>
    )
}
