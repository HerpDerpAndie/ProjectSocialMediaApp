import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/profileActions';

const LoginScreen = (props) => {
    const { navigation } = props;

    const dispatch = useDispatch()

    const globalProfileData = useSelector(store => store.profileReducer)

    const [isPassVisible, setIsPassVisible] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const checkData = () => {
        if (username === '' || password === '') {
            alert('Please Fill all Fields')
        } else if (username.toLowerCase() === globalProfileData.username.toLowerCase() &&
            password === globalProfileData.password) {
            Alert.alert(
                'Login Succesful',
                'Welcome ' + globalProfileData.username,
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            // navigation.navigate('Start') --> ganti global variable
                            dispatch(login(true))
                        }
                    }
                ]
            )
        } else {
            alert('Wrong username or password')
        }

        setUsername('')
        setPassword('')
    }

    // get global variable username, password, email
    useEffect(() => {
        console.log('GLOBAL STATE ON LOGIN PAGE');
        console.log(globalProfileData);
    }, [globalProfileData]);

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={
                            require('../../assets/login.png')
                        }
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        title="Username"
                        placeholder="Username"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <Input
                        title="Password"
                        placeholder="Password"
                        isPassword={true}
                        secureTextEntry={isPassVisible ? false : true}
                        iconName={isPassVisible ? 'eye-off' : 'eye'}
                        onPress={() => setIsPassVisible(!isPassVisible)}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Button
                    text='Login'
                    onPress = {() => checkData()}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={
                        () => navigation.navigate('Register')
                    }>
                        <Text style={styles.registerText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1
    },
    mainContainer: {
        backgroundColor: '#E6E6FA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        marginTop: 32,
        marginBottom: 16
    },
    image: {
        width: 180,
        height: 180
    },
    inputContainer: {
        padding: 16,
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    text: {
        fontSize: 16
    },
    registerText: {
        color: '#1A5B0A',
        fontSize: 16
    }
});

export default LoginScreen;