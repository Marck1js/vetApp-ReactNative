import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {fechaToString} from '../assets';

const ExpandCard = ({item, setShowExpand}) => {
  let {paciente, propietario, emailPropietario, telefono, fecha, sintomas} =
    item;

  return (
    <Pressable style={styles.contenedor} onPress={() => setShowExpand(false)}>
      <View style={styles.contenido}>
        <View style={styles.field}>
          <Text style={styles.leftField}>Paciente:</Text>
          <Text style={styles.rightField}>{paciente}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.leftField}>Propietario:</Text>
          <Text style={styles.rightField}>{propietario}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.fechaField}>{fechaToString(fecha)}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.leftField}>Email:</Text>
          <Text style={styles.rightField}>{emailPropietario}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.leftField}>Telefono:</Text>
          <Text style={styles.rightField}>{telefono}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.sintomas}>{sintomas}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpandCard;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#e8daef',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  contenido: {
    marginHorizontal: 4,
    backgroundColor: '#fff',
    flex: 1,
  },
  field: {
    backgroundColor: '#fff',

    paddingHorizontal: 10,
    // backgroundColor: 'red',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  leftField: {
    color: '#4a235a',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
    textTransform: 'uppercase',
    paddingLeft: 5,
  },
  rightField: {
    color: '#000',
    paddingRight: 5,
    alignSelf: 'flex-end',
    fontSize: 20,
    fontWeight: '800',
    paddingBottom: 5,
    textTransform: 'uppercase'
  },
  fechaField: {
    fontSize: 20,
    color: '#5b2c6f',
    fontWeight: '500',
    alignSelf: 'center',
    flex: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  sintomas: {
    color: '#000',
    fontSize: 16,
    flex: 1,
    alignSelf: 'center',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight:'500'
  },
});
