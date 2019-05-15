import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Ad from '../Ad';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

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
