import React from 'react';
import ReactDOM from 'react-dom';

class DuoShuo extends React.Component {
  constructor(props) {
    // console.log('constructor', props);
    super(props);
    this.state = {};
    this._init = this._init.bind(this);
  }
  _init() {
    // console.log('_init');
    let that = this;
    window.DUOSHUO.EmbedThread(ReactDOM.findDOMNode(that));
  }
  componentWillMount() {
    // console.log('componentWillMount');
  }
  componentDidMount() {
    // console.log('componentDidMount');
    if (this.props.thread) {
      this._init();
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate', nextProps, nextState);
    return nextProps.thread !== this.props.thread;
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate', prevProps, prevState);
    if (this.props.thread) {
      this._init();
    }
  }
  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }
  render() {
    // console.log('render');
    return (
      <div
        key="duo-shuo"
        className="ds-thread"
        data-thread-key={this.props.thread}
        data-title={this.props.title}
        data-url={this.props.url}
      ></div>
    );
  }
}

DuoShuo.propTypes = {
    thread: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
};

DuoShuo.defaultProps = {
};

export default DuoShuo;
