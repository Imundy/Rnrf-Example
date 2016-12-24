/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';

import { appReducer } from './app/reducers';
import Lists from './app/components/lists';
import Everything from './app/components/everything';
import GroceryList from './app/components/groceryList';
import TodoList from './app/components/todoList';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

const Scenes = Actions.create(
    <Scene key='root'>
        <Scene key='lists' tabs={true} hideNavBar type={ActionConst.REPLACE}>
            <Scene key='tab1' title='Add' component={Lists} icon={TabIcon}></Scene>
            <Scene key='tab2' title='Grocery' component={GroceryList} icon={TabIcon}></Scene>
            <Scene key='tab3' title='To Do' component={TodoList} icon={TabIcon}></Scene>
        </Scene>
        <Scene key='everything' component={Everything} hideNavBar type={ActionConst.REPLACE}></Scene>
    </Scene>
);

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer);

export default class RnrfExample extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RnrfExample', () => RnrfExample);
