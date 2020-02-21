import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component {
    render() {
        return (
            // <div>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile" width='70' height='70' /></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                    <TableCell>
                        <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} />
                    </TableCell>
                </TableRow>
            // </div>
        )
    }
}

//다른 컴포넌트에서 사용가능하게 함
export default Customer;