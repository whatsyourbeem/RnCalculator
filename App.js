import React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
    return (
        <>
            <Text>
                800
            </Text>
            <View style={{
                flexDirection: 'row', // 가로로 정렬
                justifyContent: 'space-around' // 맞춤 방식 설정
            }}>
                <Button title='C' /><Button title='+/-' /><Button title='%' /><Button title='÷' />
            </View>
            
            <View style={{
                flexDirection: 'row', // 가로로 정렬
                justifyContent: 'space-around' // 맞춤 방식 설정
            }}>
                <Button title='7' /><Button title='8' /><Button title='9' /><Button title='X' />
            </View>
            <View style={{
                flexDirection: 'row', // 가로로 정렬
                justifyContent: 'space-around' // 맞춤 방식 설정
            }}>
                <Button title='4' /><Button title='5' /><Button title='6' /><Button title='-' />
            </View>
            <View style={{
                flexDirection: 'row', // 가로로 정렬
                justifyContent: 'space-around' // 맞춤 방식 설정
            }}>
                <Button title='1' /><Button title='2' /><Button title='3' /><Button title='+' />
            </View>
            <View style={{
                flexDirection: 'row', // 가로로 정렬
                justifyContent: 'space-around' // 맞춤 방식 설정
            }}>
                <Button title='0' /><Button title=' ' /><Button title='.' /><Button title='=' />
            </View>
        </>
    )
};

export default App;