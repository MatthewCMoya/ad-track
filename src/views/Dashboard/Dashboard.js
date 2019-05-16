import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Ad from '../Ad';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" md="6" lg="4">
            <Ad {...this.props} />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Ad {...this.props} />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Ad {...this.props} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
