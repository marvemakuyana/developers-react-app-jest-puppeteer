import React from 'react';

const DevTable = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.devs.map((dev, index) => {
                        return(
                            <tr key={index}>
                                <td id={ `name${index}` }>{dev.name}</td>
                                <td id={ `role${index}` }>{dev.role}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default DevTable;