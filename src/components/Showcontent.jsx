import React from 'react';
import { Input } from 'antd';

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
        <Input placeholder="Basic usage" />
        <div className="my-box-tit">博客地址：</div>
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
};

Showcontent.defaultProps = {
  showText: false,
};
