/* global chrome */

import React, {Component} from 'react';

class Link extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (chrome && chrome.tabs) {
      e.preventDefault();
      e.stopPropagation();

      chrome.tabs.create({
        url: this.props.url,
        active: !e.getModifierState('Meta'),
      });
    }
  }

  render() {
    const {url, children, style, className} = this.props;
    return (
      <a
        href={url}
        className={className}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export default Link;
