import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../class/styles';
import { removeData } from '../store/actions/data.action';

const Mahasiswa = ({navigation}) => {
    const DATAS = useSelector(state => state.data);
    const [tombol, settombol] = useState(false)
    const dispatch = useDispatch()


  return (
    <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={ () => { 
                    navigation.push("Tambah")
                    }}>
                <Text style={styles.buttonText}>Tambah Data Mahasiswa</Text>
            </TouchableOpacity>
        <Text style={[styles.pt3, styles.h2]}>Data Mahasiswa</Text>
        {DATAS.datas.nim != null ?
        <View style={styles.card}>
            <Text>NIM : {DATAS.datas.nim}</Text>
            <Text>Nama : {DATAS.datas.nama}</Text>
            <Text>Email : {DATAS.datas.email}</Text>
            <Text>Telp : {DATAS.datas.telp}</Text>
            <Text>Jurusan : {DATAS.datas.jurusan}</Text>
            <View style={styles.container} >
            <TouchableOpacity style={[styles.buttonDell]}
            disabled={tombol} 
            onPress={
                () => {
                    settombol(true);
                    setTimeout(() => {
                        dispatch(removeData())
                    }, 3000);
                }
            }
            >
                <Text style={styles.buttonText}>Hapus</Text>
            </TouchableOpacity>
            </View>
        </View>
        : '' }
    </View>
  )
}

export default Mahasiswa