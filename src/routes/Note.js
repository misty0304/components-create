import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Showcontent from '../components/Showcontent';

function Note({ dispatch, note }) {
  const {
    showText,
  } = note;
  const saveHandler = () => {
    dispatch({
      type: 'note/query',
      payload: {
        id: 2,
      },
    });
  };
  return (
    <div >
      <Button type="primary" onClick={saveHandler}>显示</Button>
      <Showcontent showText={showText} />
    </div>
  );
}

export default connect(({ note }) => ({ note }))(Note);
