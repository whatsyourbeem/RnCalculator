import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const [result, setResult] = useState(0);
    const func = useRef();



    
    return (
        <View style={{ height: '100%', padding: 10, backgroundColor: 'black' }}>
            <View style={{
                height: '25%',
                alignItems: 'flex-end',
                justifyContent: 'flex-end' // 맞춤 방식 설정
                }}>
                <Text style={{ color: 'white',
                padding:10,
            fontSize: 80 }}>
                    800
                </Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'column', // 가로로 정렬
                justifyContent: 'space-around' // 맞춤 방식 설정

            }}>
                <View style={{
                    flexDirection: 'row', // 가로로 정렬
                    justifyContent: 'space-around' // 맞춤 방식 설정
                }}>
                    <TouchableOpacity style={styles.lightgrayButton}><Text style={{fontSize:30, color:'black'}}>C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.lightgrayButton}><Text style={{fontSize:30, color:'black'}}>+/-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.lightgrayButton}><Text style={{fontSize:30, color:'black'}}>%</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeButton}><Text style={{fontSize:30, color:'white'}}>÷</Text></TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', // 가로로 정렬
                    justifyContent: 'space-around' // 맞춤 방식 설정
                }}>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>9</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeButton}><Text style={{fontSize:30, color:'white'}}>X</Text></TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', // 가로로 정렬
                    justifyContent: 'space-around' // 맞춤 방식 설정
                }}>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeButton}><Text style={{fontSize:30, color:'white'}}>-</Text></TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', // 가로로 정렬
                    justifyContent: 'space-around' // 맞춤 방식 설정
                }}>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeButton}><Text style={{fontSize:30, color:'white'}}>+</Text></TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', // 가로로 정렬
                    justifyContent: 'space-around' // 맞춤 방식 설정
                }}>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}> </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.grayButton}><Text style={{fontSize:30, color:'white'}}>.</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeButton}><Text style={{fontSize:30, color:'white'}}>=</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orangeButton: {
        width: 70,
        height: 70,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    grayButton: {
        width: 70,
        height: 70,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dimgray',
    },
    lightgrayButton: {
        width: 70,
        height: 70,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
});

export default App;