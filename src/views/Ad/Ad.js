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
    return (
      <div
        style={{ height: '2000px', position: 'absolute' }}
        ref={anchor => { this.myAnchor = anchor }}
      />
    )
  }
}

export default Ad;
