import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Formulario, CardPaciente} from './src/components';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text_ad}>
          Administrador de citas {''}
          <Text style={styles.text_vet}>Veterinaria</Text>
        </Text>
      </View>

      <Pressable
        onPress={() => setShowModal(!showModal)}
        style={styles.pressNuevaCita}>
        <Text style={styles.nuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noHayPacientes}>No hay pacientes</Text>
      ) : (
        /* El FlatList esta optimizado para mapear arrays
         *  en React Native
         */
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pacientes}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <CardPaciente item={item} />;
          }}
        />
      )}

      <Formulario
        setShowModal={setShowModal}
        showModal={showModal}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </SafeAreaView>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f4f6',
    flex: 1,
  },
  view: {
    height: 'auto',
    justifyContent: 'center',
  },
  text_ad: {
    textAlign: 'center',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  text_vet: {
    color: 'rebeccapurple',
    fontWeight: '900',
    letterSpacing: 1,
  },
  pressNuevaCita: {
    backgroundColor: '#6d28d9',
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  nuevaCita: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noHayPacientes: {
    borderRadius: 10,
    paddingVertical: 10,
    textAlign: 'center',
    marginHorizontal: 50,
    marginVertical: 20,
    borderColor: '#6d28d9',
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#6d28d9',
  },
});

