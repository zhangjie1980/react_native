/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import Api from './api.js';

//应用程序注册
AppRegistry.registerComponent('Api', () => Api);