import React from 'react';

export default class Showcontent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content || '',
      showText: this.props.showText || false,
    };
    this.showMain = (content) => {
      this.setState({
        content,
        showText: true,
      });
    };

    this.hide = () => {
      this.setState({
        showText: false,
      });
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  render() {
    const style = {
      display: this.state.showText ? 'block' : 'none',
    };
    return (
      <div className="my-box" style={style} >
        <div className="my-box-tit">Alert</div>
        <div>{this.state.content}</div>
        <div className="my-box-footer">
          <button onClick={this.hide}>确定</button>
        </div>
      </div>
    );
  }
}

Showcontent.propTypes = {
  showText: React.PropTypes.bool.isRequired,
  content: React.PropTypes.string.isRequired,
};

Showcontent.defaultProps = {
  showText: false,
  content: 'http://hu-huan.blog.163.com/',
};
