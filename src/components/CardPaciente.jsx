import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {fechaToString} from '../assets';
const CardPaciente = ({item}) => {
  let {paciente, propietario, emailPropietario, telefono, fecha, sintomas} =
    item;

  return (
    <View style={styles.contenedor}>
      <Pressable onPress={() => {
        console.log('Show Data')
      }}>
        <View style={styles.viewText}>
          <Text style={[styles.text, styles.textLeft]}>Paciente:</Text>
          <Text style={[styles.text, styles.textRight]}>{paciente}</Text>
        </View>

        {/* <View style={styles.viewText}>
        <Text style={[styles.text, styles.textLeft]}>Propietario</Text>
        <Text style={[styles.text, styles.textRight]}>{propietario}</Text>
      </View> */}

        {/* <View style={styles.viewText}>
        <Text style={[styles.text, styles.textLeft]}>Email</Text>
        <Text style={[styles.text, styles.textRight]}>{emailPropietario}</Text>
      </View> */}

        {/* <View style={styles.viewText}>
        <Text style={[styles.text, styles.textLeft]}>Telefono</Text>
        <Text style={[styles.text, styles.textRight]}>{telefono}</Text>
      </View> */}

        <View style={styles.viewText}>
          <Text style={[styles.textRight, styles.textFecha]}>
            {fechaToString(fecha)}
          </Text>
        </View>

        {/* <View style={[styles.viewText, styles.viewTextSintomas]}>
        <Text style={[styles.text, styles.textLeftSintomas]}>Sintoma</Text>
        <Text style={[styles.text, styles.textRight]}>{sintomas}</Text>
      </View> */}
      </Pressable>

      <View style={styles.crudOptions}>
        <Pressable style={[styles.crudPressable, styles.crudPressableEdit]}>
          <Text style={styles.crudText}>Editar</Text>
        </Pressable>

        <Pressable style={[styles.crudPressable, styles.crudPressableDelete]}>
          <Text style={styles.crudText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardPaciente;

const styles = StyleSheet.create({
  contenedor: {
    // marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#d1d1d1',
  },
  viewText: {
    marginVertical: 1,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTextSintomas: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    // paddingVertical: 5,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 0,
  },
  textLeft: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    paddingLeft: 2,
  },
  textLeftSintomas: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
    paddingLeft: 5,
    alignSelf: 'flex-start',
  },
  textRight: {
    fontSize: 20,
    paddingRight: 5,
    fontWeight: '800',
    color: '#000',
    textTransform: 'capitalize',
  },
  textFecha: {
    marginTop: 3,
    fontWeight: 400,
    color: '#6d28d9',
    textAlign: 'right',
  },
  crudOptions: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  crudPressable: {
    paddingHorizontal: 30,
    paddingVertical: 7,
    // backgroundColor: 'red',
  },
  crudPressableEdit: {
    backgroundColor: 'orange',
  },
  crudPressableDelete: {
    backgroundColor: 'red',
  },
  crudText: {
    fontSize: 18,
    fontWeight: 400,
    color: '#fff',
  },
});
