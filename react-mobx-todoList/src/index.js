/* global window document:true*/

import React from 'react'
import { render } from 'react-dom'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

import App from './containers/App';

class TodoList {
  @observable todoList = []
}

const store = new TodoList()

render(
  <App todoList={store} />,
  document.getElementById('root'),
)
