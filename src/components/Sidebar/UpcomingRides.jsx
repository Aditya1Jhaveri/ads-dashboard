import React, { useState } from 'react'
// import './style.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { data } from './Users'

import Navbar from '../Navigation/Navbar'

// import './style.css';

const UpcomingRides = () => {
  const [expandedRows, setExpandedRows] = useState([])

  const [expandState, setExpandState] = useState({})

  const handleEpandRow = (event, userId) => {
    const currentExpandedRows = expandedRows
    const isRowExpanded = currentExpandedRows.includes(userId)

    let obj = {}
    isRowExpanded ? (obj[userId] = false) : (obj[userId] = true)
    setExpandState(obj)

    const newExpandedRows = isRowExpanded
      ? currentExpandedRows.filter((id) => id !== userId)
      : currentExpandedRows.concat(userId)

    setExpandedRows(newExpandedRows)
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>{/* <h1> Users({data.length})</h1> */}</Col>
        </Row>
        <Row>
          <Col lg={150}>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>e-mail</th>
                  <th>Gender</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <>
                    <tr key={user.id}>
                      <td>{/* <img src={user['photo']} alt="" /> */}</td>
                      <td>{user['first_name']}</td>
                      <td>{user['last_name']}</td>
                      <td>{user['email']}</td>
                      <td>{user['gender']}</td>

                      <td>
                        <Button
                          variant="link"
                          onClick={(event) => handleEpandRow(event, user.id)}
                        >
                          {expandState[user.id] ? 'Hide' : 'Show'}
                        </Button>
                      </td>
                    </tr>
                    <>
                      {expandedRows.includes(user.id) ? (
                        <tr>
                          <td colspan="6">
                            <div
                              style={{
                                backgroundColor: '#343A40',
                                color: 'white',
                                padding: '10px',
                              }}
                            >
                              <h2> Details </h2>
                              <ul>
                                <li>
                                  <span>
                                    <b>Full Name:</b>
                                  </span>{' '}
                                  <span>
                                    {' '}
                                    {user['first_name']} {user['last_name']}{' '}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <b>Company:</b>
                                  </span>{' '}
                                  <span> {user.company} </span>
                                </li>
                                <li>
                                  <span>
                                    <b>Department:</b>
                                  </span>{' '}
                                  <span> {user.department} </span>
                                </li>
                                <li>
                                  <span>
                                    <b>Ip:</b>
                                  </span>{' '}
                                  <span> {user['ip_address']} </span>
                                </li>
                                <li>
                                  <span>
                                    <b>Best Movie:</b>
                                  </span>{' '}
                                  <span> {user.movies} </span>
                                </li>
                                <li>
                                  <span>
                                    <b>About:</b>
                                  </span>{' '}
                                  <span> {user.about} </span>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ) : null}
                    </>
                  </>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UpcomingRides
