import React, {memo, useState} from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

const Formulario = ({showModal, setShowModal, pacientes, setPacientes}) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [emailPropietario, setEmailPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  // Handles

  const handleCita = () => {
    if (
      [paciente, propietario, emailPropietario, fecha, sintomas].includes('')
    ) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'Ok'}]);

      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      paciente,
      propietario,
      emailPropietario,
      telefono,
      fecha,
      sintomas,
    };

    setPacientes([...pacientes, nuevoPaciente]);
    // -Setear formulario a vacio
    setPaciente('');
    setPropietario('');
    setEmailPropietario('');
    setFecha(new Date());
    setTelefono('');
    setSintomas('');

    Alert.alert('Exito', 'Paciente Creado Exitosamente', [
      {
        text: 'OK',
        onPress: () => {
          setShowModal(false);
        },
      },
    ]);
  };

  return (
    <Modal animationType="slide" visible={showModal}>
      <SafeAreaView style={styles.contenedor}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.cancelar}
            onLongPress={() => setShowModal(!showModal)}>
            <Text style={styles.cancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              keyboardType="default"
              value={paciente}
              onChangeText={text => setPaciente(text)}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              keyboardType="default"
              value={propietario}
              onChangeText={text => setPropietario(text)}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={emailPropietario}
              onChangeText={text => setEmailPropietario(text)}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono Propietario"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={text => setTelefono(text)}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>

            <View style={styles.datePicker}>
              <DatePicker
                date={fecha}
                fadeToColor="none"
                textColor="#fff"
                locale="es"
                onDateChange={date => setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Sintomas paciente"
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={text => setSintomas(text)}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <Pressable style={styles.agregar} onPress={() => handleCita()}>
            <Text style={styles.cancelarTexto}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#fff',
    marginTop: 15,
    marginBottom: 2,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 100,
    marginBottom: 20,
  },
  datePicker: {
    width: '100%',
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginVertical: 20,
    display: 'flex',
    alignItems: 'center',
  },
  cancelar: {
    marginVertical: 10,
    marginHorizontal: 50,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  cancelarTexto: {
    fontWeight: '600',
    paddingVertical: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  agregar: {
    marginVertical: 10,
    marginHorizontal: 50,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});

export default Formulario;
