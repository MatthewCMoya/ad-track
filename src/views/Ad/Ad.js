import React, { Component } from 'react';
import bucket from './AdJsBucketSingleton';
import defaultOptions from './defaultAdOptions';

class Ad extends Component {
  constructor(props) {
    super(props);
    this.anchor = null;
  }

  componentDidMount() {
    this.createAd();
  }

  createAd = () => {
    const { options: optionOverrides } = this.props;
    const options = { ...defaultOptions, ...optionOverrides };
    bucket.createAd(this.anchor, options);
  }

  render() {
    const styles = {
      background: `repeating-linear-gradient(45deg, white, black 10px, grey 30px)`,
      height: '2000px',
      position: 'absolute'
    };

    return <div style={styles} ref={anchor => { this.anchor = anchor }} />;
  }
}

export default Ad;
