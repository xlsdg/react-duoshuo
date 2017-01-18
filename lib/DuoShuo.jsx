import React from 'react';
import ReactDOM from 'react-dom';

class DuoShuo extends React.Component {
  constructor(props) {
    // console.log('constructor', props);
    super(props);
    this.state = {};
    this._init = this._init.bind(this);
    this._inject = this._inject.bind(this);
  }
  _inject() {
    const that = this;
    // console.log('_inject');
    if (!window.duoshuoQuery || !window.duoshuoQuery.short_name) {
      window.duoshuoQuery = {
        short_name: that.props.domain
      };
    } else if (window.duoshuoQuery.short_name !== that.props.domain) {
      window.duoshuoQuery.short_name = that.props.domain;
    }

    if (!window.DUOSHUO) {
      const ds = document.createElement('script');
      ds.type = 'text/javascript';
      ds.async = true;
      ds.charset = 'utf-8';
      if (ds.readyState) {
        ds.onreadystatechange = function() {
          if (ds.readyState === 'loaded' || ds.readyState === 'complete') {
            ds.onreadystatechange = null;
            that._init();
          }
        };
      } else {
        ds.onload = function() {
          ds.onload = null;
          that._init();
        };
      }
      ds.src = `${document.location.protocol}//static.duoshuo.com/embed.js?_t=${(new Date()).getTime()}`;
      that.dom = ds;
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ds, s);
    } else {
      that._init();
    }
  }
  _init() {
    const that = this;
    // console.log('_init');
    if (window.DUOSHUO && window.DUOSHUO.EmbedThread) {
      that.props.onReady();
      // window.DUOSHUO.EmbedThread(ReactDOM.findDOMNode(that));
    }
  }
  componentWillMount() {
    const that = this;
    // console.log('componentWillMount', that.props, that.state);
    if (that.props.domain) {
      that._inject();
    }
  }
  componentDidMount() {
    const that = this;
    // console.log('componentDidMount', that.props, that.state);
    if (that.props.thread) {
      that._init();
    }
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
    if (that.props.thread) {
      that._init();
    }
  }
  componentWillUnmount() {
    // const that = this;
    // console.log('componentWillUnmount', that.props, that.state);
  }
  render() {
    const that = this;
    // console.log('render');
    return (
      <div
        className="ds-thread"
        data-thread-key={that.props.thread}
        data-title={that.props.title}
        data-url={that.props.url}
        data-author-key={that.props.author}
      ></div>
    );
  }
}

DuoShuo.propTypes = {
  domain: React.PropTypes.string.isRequired,
  thread: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  url: React.PropTypes.string,
  author: React.PropTypes.string,
  onReady: React.PropTypes.func
};

DuoShuo.defaultProps = {
  title: window.document.title,
  url: window.location.href,
  onReady: function() {}
};

export default DuoShuo;
