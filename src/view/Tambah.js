import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import { styles } from '../class/styles'
import { addData } from '../store/actions/data.action'
import {useDispatch} from 'react-redux'

const Tambah = ({navigation}) => {
  const [tombol, settombol] = useState(false)
  const dispatch = useDispatch()
  const submit = (values) => {
      settombol(true);
      setTimeout(() => {
        dispatch(addData(values));
        navigation.replace("Mahasiswa")
      }, 3000 )
    }

  return (
    <View style={styles.container}>
      <Text style={[styles.h2, styles.pt3]}>Tambah Data Mahasiswa</Text>
      <Formik
          initialValues={{ nama: '', nim: '', email: '', telp: '', jurusan: '' }}
          onSubmit={values => submit(values)} 
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <ScrollView style={[styles.pt3]}>
            <View>
              <View style={[styles.textInput]}>
              <TextInput
                placeholder={"Nama Mahasiswa"}
                onChangeText={handleChange('nama')}
                onBlur={handleBlur('nama')}
                value={values.nama}
                />
                </View>
              <View style={[styles.textInput]}>
              <TextInput
                placeholder={"NIM Mahasiswa"}
                onChangeText={handleChange('nim')}
                keyboardType='numeric'
                onBlur={handleBlur('nim')}
                value={values.nim}
                />
                </View>
              <View style={[styles.textInput]}>
              <TextInput
                placeholder={"Email Mahasiswa"}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                />
                </View>
              <View style={[styles.textInput]}>
              <TextInput
                placeholder={"Telp Mahasiswa"}
                onChangeText={handleChange('telp')}
                onBlur={handleBlur('telp')}
                value={values.telp}
                />
                </View>
              <View style={[styles.textInput]}>
              <TextInput
                placeholder={"Jurusan"}
                onChangeText={handleChange('jurusan')}
                onBlur={handleBlur('jurusan')}
                value={values.jurusan}
                />
                </View>
              <Button onPress={handleSubmit} disabled={tombol} title="Submit" />
            </View>
            </ScrollView>
          )}
        </Formik>
    </View>
  )
}

export default Tambah