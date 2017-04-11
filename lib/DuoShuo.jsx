import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class DuoShuo extends React.Component {
  constructor(props) {
    // console.log('constructor', props);
    super(props);
    this.state = {
      dom: null,
      script: null
    };
    this._init = this._init.bind(this);
    this._ready = this._ready.bind(this);
    this._destroy = this._destroy.bind(this);
  }
  componentWillMount() {
    // const that = this;
    // console.log('componentWillMount', that.props, that.state);
  }
  componentDidMount() {
    const that = this;
    // console.log('componentDidMount', that.props, that.state);
    that._init();
  }
  componentWillReceiveProps(nextProps) {
    // const that = this;
    // console.log('componentWillReceiveProps', that.props, nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    const that = this;
    // console.log('shouldComponentUpdate', that.props, nextProps, that.state, nextState);
    return nextProps.thread !== that.props.thread;
  }
  componentWillUpdate(nextProps, nextState) {
    // const that = this;
    // console.log('componentWillUpdate', that.props, nextProps, that.state, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    const that = this;
    // console.log('componentDidUpdate', prevProps, that.props, prevState, that.state);
    that._ready(true);
  }
  componentWillUnmount() {
    const that = this;
    // console.log('componentWillUnmount', that.props, that.state);
    that._destroy();
  }
  _init() {
    const that = this;
    // console.log('_init');
    if (!window.duoshuoQuery || !window.duoshuoQuery.short_name) {
      window.duoshuoQuery = {
        short_name: that.props.domain
      };
    } else if (window.duoshuoQuery.short_name !== that.props.domain) {
      window.duoshuoQuery.short_name = that.props.domain;
    }

    if (window.DUOSHUO) {
      return that._ready(true);
    }

    const ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    ds.charset = 'utf-8';
    if (ds.readyState) {
      ds.onreadystatechange = function() {
        if (ds.readyState === 'loaded' || ds.readyState === 'complete') {
          ds.onreadystatechange = null;
          that._ready(false);
        }
      };
    } else {
      ds.onload = function() {
        ds.onload = null;
        that._ready(false);
      };
    }
    ds.src = `${document.location.protocol}//static.duoshuo.com/embed.js?_t=${(new Date()).getTime()}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ds, s);
    that.setState({
      script: ds
    });
  }
  _ready(isForceUpdate) {
    const that = this;
    // console.log('_ready');
    if (window.DUOSHUO && window.DUOSHUO.EmbedThread) {
      if (that.state.dom) {
        that.state.dom.parentNode.removeChild(that.state.dom);
        that.setState({
          dom: null
        });
      }
      const container = window.document.createElement('div');
      container.className = 'ds-thread';
      container.setAttribute('data-thread-key', that.props.thread);
      container.setAttribute('data-title', window.document.title);
      container.setAttribute('data-url', window.location.href);
      that.props.author && container.setAttribute('data-author-key', that.props.author);
      that.props.image && container.setAttribute('data-image', that.props.image);
      that.props.position && container.setAttribute('data-form-position', that.props.position);
      that.props.limit && container.setAttribute('data-limit', that.props.limit);
      that.props.order && container.setAttribute('data-order', that.props.order);
      if (isForceUpdate) {
        window.DUOSHUO.EmbedThread(container);
      }
      ReactDOM.findDOMNode(that).append(container);
      that.setState({
        dom: container
      });
      that.props.onReady && that.props.onReady();
    }
  }
  _destroy() {
    const that = this;
    // that.state.script.parentNode.removeChild(that.state.script);
    that.setState({
      script: null
    });
  }
  render() {
    const that = this;
    // console.log('render');
    return (
      <div
        className="i-duo-shuo"
        key={that.props.thread}
      ></div>
    );
  }
}

DuoShuo.propTypes = {
  domain: PropTypes.string.isRequired,
  thread: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.string,
  limit: PropTypes.number,
  order: PropTypes.string,
  onReady: PropTypes.func
};

DuoShuo.defaultProps = {
  onReady: function() {}
};

export default DuoShuo;
