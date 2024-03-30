import { Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../store/actions/profileActions';

const ProfileScreen = () => {
    const globalData = useSelector(store => store.profileReducer)

    const dispatch = useDispatch()

    const onLogout = () => {
        setIsModalvisible(false)
        dispatch(login(false))
    }

    const [isModalVisible, setIsModalvisible] = useState(false)

    return (
        <ScrollView
            contentContainerStyle={styles.scroll}
        >
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/avatar.png')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        title="Username"
                        editable={false}
                        value={globalData.username}
                    />
                    <Input
                        title="Email"
                        editable={false}
                        value={globalData.email}
                    />
                    <Input
                        title="Password"
                        editable={false}
                        value={globalData.password}
                    />
                </View>
                <Button
                    text="LOGOUT"
                    isLogout={true}
                    onPress={() => setIsModalvisible(true)}
                />
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalvisible(!isModalVisible)
                }}
            >
                <View style={styles.backgroundView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Are you sure want to logout?
                        </Text>
                        <View style={styles.modalButton}>
                            <Button text="Yes"
                                onPress={() => onLogout()}
                            />
                            <Button text="No" 
                                isLogout={true} 
                                onPress={() => setIsModalvisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    imageContainer: {
        margin: 16
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black'
    },
    inputContainer: {
        padding: 16,
        width: '100%'
    },
    backgroundView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    modalView: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        width: '80%'
    },
    modalText: {
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center',
        fontSize: 16,
        color: 'black'
    },
    modalButton: {
        flexDirection: 'row'
    }
});

export default ProfileScreen