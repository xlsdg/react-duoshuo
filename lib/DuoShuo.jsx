import React from 'react';
import ReactDOM from 'react-dom';

export default class DuoShuo extends React.Component {
  static propTypes = {
    thread: React.PropTypes.string,
    title: React.PropTypes.string,
    url: React.PropTypes.string
  }
  static defaultProps = {
    thread: '',
    title: '',
    url: ''
  }
  constructor(props) {
    super(props);
  }
  _freshDOM() {
    try {
      DUOSHUO.EmbedThread(ReactDOM.findDOMNode(this));
    } catch (e) {
      DUOSHUO.EmbedThread(ReactDOM.findDOMNode(this));
    }
  }
  componentDidMount() {
    this._freshDOM();
  }
  componentDidUpdate() {
    this._freshDOM();
  }
  render() {
    return (
      <div
        className="ds-thread"
        data-thread-key={this.props.thread}
        data-title={this.props.title}
        data-url={this.props.url}
      />
    );
  }
}
