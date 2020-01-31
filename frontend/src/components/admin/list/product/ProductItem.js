import React, {Fragment} from 'react'

export default function ProductItem({item}) {
    return (
        <Fragment>
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.genre}</td>
            <td>{item.material}</td>
            <td>$ {item.price}</td>
            </tr>
        </Fragment>
    )
}
