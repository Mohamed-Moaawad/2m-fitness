import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShopSection from './ShopSection';
const DashSection = () => {
    return (
        <div className='dash-section'>
            {/* start table */}
            <h3>users</h3>
            <Table striped bordered hover className='my-3'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            {/* end table */}

            {/* start shop */}
            <Row className='mt-5 w-100'>
                <ShopSection />
            </Row>
            {/* end shop */}
        </div>
    )
}

export default DashSection
