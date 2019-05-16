import React, { Component } from 'react';
import bucket from './AdJsBucketSingleton';
import defaultOptions from './defaultAdOptions';

class Ad extends Component {
  constructor(props) {
    super(props);
    this.defaultOptions = defaultOptions;
  }

  componentDidMount() {
    this.getAd();
  }

  getAd = () => {
    const { options: optionOverrides } = this.props;
    const options = { ...this.defaultOptions, ...optionOverrides };
    bucket.createAd(this.myAnchor, options);
    return null;
  }

  render() {
    const styles = {
        background: `repeating-linear-gradient(
          45deg,
          #606dbc,
          #606dbc 10px,
          #465298 10px,
          #465298 20px
        )`,
      height: '2000px',
      position: 'absolute'
    };
    return (
      <div
        style={styles}
        ref={anchor => { this.myAnchor = anchor }}
      />
    )
  }
}

export default Ad;
