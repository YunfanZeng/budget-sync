import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={{backgroundColor: 'blue', flex: 0.25, justifyContent: 'flex-start', borderRadius: 10, margin:2}}>
            <Text>Hi Yunfan!</Text>
        </View>
    );
}

export default Header