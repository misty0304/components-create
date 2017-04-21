import React from 'react';
import { Router, Route } from 'dva/router';
import Note from './routes/Note';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Note} />
    </Router>
  );
}

export default RouterConfig;
