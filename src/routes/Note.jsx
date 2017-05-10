import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button } from 'antd';
import Showcontent from '../components/Showcontent';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.saveHandler = () => {
      this.box.showMain('Save successfully');
      this.props.dispatch({
        type: 'note/query',
        payload: {
          id: 2,
        },
      });
    };
  }

  componentDidMount() {
    //另一个知识点：findDOMNode()获取组件真实DOM
    console.log(ReactDOM.findDOMNode(this.box));
  }

  render() {
    return (
      <div >
        <Button type="primary" onClick={this.saveHandler.bind(this)}>显示</Button>
        <Showcontent ref={(box) => { this.box = box; }} showText={this.props.note.showText} />
      </div>
    );
  }
}

export default connect(({ note }) => ({ note }))(Note);
