import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '../store/actions/profileActions';

const RegisterScreen = (props) => {
    const {navigation} = props;

    const globalProfileData = useSelector(store => store.profileReducer)

    const dispatch = useDispatch()

    // log data waktu globalProfileData keganti
    useEffect(() => {
        console.log(globalProfileData);
    }, [globalProfileData]) 

    // set global variable 
    useEffect(() => {
        dispatch(createProfile({
            username: 'newUsername',
            email: 'newEmail',
            password: 'newPassword' 
        }))
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>
               <View style={styles.inputContainer}>
                  <Input
                      title="Username"
                      placeholder="Username"
                  />
                  <Input
                      title="Email"
                      placeholder="Email"
                  />
                  <Input
                      title="Password"
                      placeholder="Password"
                  />
              </View>
              <Button
                  text="Register"
              />
              <View style={styles.textContainer}>
                 <Text style={styles.text}>
                     Already have an account?
                 </Text>
                 <TouchableOpacity
                    onPress={
                       () => navigation.navigate('Login')
                    }
                 >
                     <Text style={styles.loginText}>
                        Login
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
        flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems: 'center'
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
    loginText: {
        color: '#1A5B0A',
        fontSize: 16
    }
});

export default RegisterScreen;