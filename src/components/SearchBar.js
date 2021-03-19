import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    ActivityIndicator,
    TextInput,
    Text,
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Platform
} from 'react-native';

import Icon from './Icon';
import { Colors } from '../constants';
import { searchMusei } from '../constants/Api';
import { GilroyBold, GilroyRegular } from './StyledText';

const SearchBar = ({
    route,
    navigation,
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [musei, setMusei] = useState([]);
    const [jona, setJona] = useState(false);
    useEffect(() => {
        setLoading(true)
        if (searchTerm) {
            searchMusei(searchTerm).then(json => {
                setLoading(false);
                setMusei(json);
                setModalVisible(true);
            });
        } else {
            setLoading(false)
        }
    }, [jona]);
    const handleNewsPressed = (item) => {
        setModalVisible(!modalVisible);
        navigation.navigate('Modal', { params: item })
    }
    return (
        <>
            <View style={styles.container}>
                {loading && (
                    <ActivityIndicator size="large" color={Colors.black} style={{ position: "absolute", top: 10, alignSelf: "center" }} />
                )}
                <View style={styles.box}>
                    <Icon name={'search-web'} color={Colors.black} size={25} style={{ marginLeft: 15 }} />
                    {searchTerm.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchTerm("")} style={{ zIndex: 9, position: "absolute", right: 20, width: 20, height: 20 }}>
                            <Icon type={"SimpleLineIcons"} name={"close"} color={Colors.black} size={20} />
                        </TouchableOpacity>
                    )}
                    <TextInput
                        style={[styles.text, { flex: 1 }]}
                        underlineColorAndroid="transparent"
                        placeholder={"Cerca Musei"}
                        value={searchTerm}
                        onChangeText={(value) => setSearchTerm(value)}
                        onEndEditing={() => setJona(!jona)}
                    />
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{
                    ...StyleSheet.absoluteFill,
                    backgroundColor: Colors.black,
                    opacity: 0.75,
                }} />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {musei.length > 0 && (
                            <>
                                <GilroyBold style={[styles.modalText]}>Risultati della ricerca:</GilroyBold>
                                <ScrollView style={{
                                    // minHeight: 300,
                                    maxHeight: 500,
                                    borderTopWidth: 0.77,
                                    borderTopColor: Colors.black,
                                }}>
                                    {musei.map(item => {
                                        return (
                                            <TouchableOpacity key={item.id} style={styles.rowTitle} onPress={() => handleNewsPressed(item)}>
                                                <GilroyRegular style={{ flex: 1, maxWidth: 180, paddingVertical: 10 }}>{item.titolo}</GilroyRegular>
                                                <GilroyRegular style={{ marginRight: 5 }}>{">"}</GilroyRegular>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </>
                        )}
                        {musei.length <= 0 && (
                            <>
                                <Text style={{ textAlign: "center", fontSize: 85, marginBottom: 20 }}>😮</Text>
                                <GilroyRegular style={{ color: Colors.black, textAlign: "center" }}>{"Ci dispiace ma non troviamo musei con i parametri richiesti.\nTi preghiamo di riprovare."}</GilroyRegular>
                            </>
                        )}
                        <TouchableOpacity
                            style={[styles.openButton, {
                                zIndex: 99
                            }]}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Icon type={"SimpleLineIcons"} name={"close"} color={Colors.black} size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 35,
        marginRight: 20,
        marginVertical: 10,
        backgroundColor: Colors.purewhite,
        borderRadius: 8,
        // height: 55,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 25
        },
        shadowOpacity: 0.08,
        shadowRadius: 20.00, //16
        elevation: 24,
    },
    box: {
        // backgroundColor: "red",
        marginVertical: Platform.OS === "ios" ? 15 : 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
    },
    text: {
        marginLeft: 10,
        fontSize: 14,
        color: Colors.grey,
        fontFamily: 'Gilroy-Regular'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        minWidth: 350,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        position: "absolute",
        width: 40,
        height: 40,
        margin: 10,
        // top: -70,
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "800"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "left",
        fontFamily: 'Gilroy-Regular',
    },
    rowTitle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderBottomWidth: 0.77,
        borderBottomColor: Colors.black,
        marginBottom: 10,
        minHeight: 50
    }
})

export default SearchBar;
