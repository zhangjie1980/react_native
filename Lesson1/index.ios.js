/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import HelloWorld from './helloworld.js';
import FlexboxFlex from './flexbox.flex.js';
import FlexboxCenter from './flexbox.center.js';
import FlexboxJustifyContent from './flexbox.justifyContent.js';
import FlexboxAlignItems from './flexbox.alignItems.js';
import FlexboxWrap from './flexbox.wrap.js';
import FlexboxAlignSelf from './flexbox.alignSelf.js';
import MarginPadding from './margin.padding.js';

class Lesson1 extends Component {
    
    render() {
        return (
            // <HelloWorld/>,
        
            // <FlexboxFlex/>,
            
            // <FlexboxCenter/>,
            
            // <FlexboxJustifyContent/>
            
            // <FlexboxAlignItems/>
            
            // <FlexboxWrap/>
            
            // <FlexboxAlignSelf/>
            
            <MarginPadding/>
        );
    }
}

AppRegistry.registerComponent('Lesson1', () => Lesson1);
