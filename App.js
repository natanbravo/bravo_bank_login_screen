import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Switch,
  TextInput,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [limite, setLimite] = useState(500);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [estudante, setEstudante] = useState(false);

  const [sexo, setSexo] = useState(0);
  const [sexos, setSexos] = useState([
    {sexoNome: 'Masculino', id: 1},
    {sexoNome: 'Feminino', id: 2},
    {sexoNome: 'Outro', id: 3},
  ]);

  let itemSexo = sexos.map((v, k) => {
    return <Picker.Item value={k} key={k} label={v.sexoNome} />;
  });

  function enviarDados() {
    if (nome === '' || idade === '') {
      return alert('Preencha os dados corretamente !');
    }
    alert(
      'CONTA ABERTA COM SUCESSO !! \n\n' +
        'Nome: ' +
        nome +
        '\n\n' +
        'Idade: ' +
        idade +
        '\n\n' +
        'Sexo: ' +
        sexos[sexo].sexoNome +
        '\n\n' +
        'Limite Da Conta: ' +
        limite.toFixed(2) +
        '\n\n' +
        'Conta Estudante: ' +
        (estudante ? 'SIM' : 'NÃO'),
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView>
            <StatusBar barStyle={'light-content'} backgroundColor={'#121212'} />
            <Image source={require('./src/logo.png')} style={styles.logo} />

            <TextInput
              style={styles.nome}
              placeholder="Nome"
              placeholderTextColor={'#fff'}
              onChangeText={texto => setNome(texto)}
            />
            <TextInput
              style={styles.idade}
              placeholder="Idade"
              placeholderTextColor={'#fff'}
              keyboardType={'number-pad'}
              onChangeText={texto => setIdade(texto)}
            />

            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                dropdownIconColor={'#fff'}
                selectedValue={sexo}
                onValueChange={itemValue => setSexo(itemValue)}>
                {itemSexo}
              </Picker>
            </View>

            <View style={styles.limiteContainer}>
              <Text style={styles.limite}>Limite Desejado</Text>
              <Slider
                minimumValue={0}
                maximumValue={5000}
                minimumTrackTintColor="#00ff00"
                maximumTrackTintColor="#ffd900"
                thumbTintColor="#ccc"
                onValueChange={aumentarLimite => setLimite(aumentarLimite)}
              />
              <Text style={styles.limite}>R$ {limite.toFixed(0)}</Text>
            </View>

            <View style={styles.estudanteContainer}>
              <Text style={styles.estudante}>Estudante ?</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={estudante ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={changeValue => setEstudante(changeValue)}
                value={estudante}
              />
            </View>

            <View style={styles.buttonView}>
              <Button
               style={styles.button}
                title="ABRIR CONTA"
                color={'#ffc000'}
                onPress={enviarDados}
              />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  logo: {
    width: 120,
    height: 120,
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    color: '#ffd900',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  nome: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#202020',
    borderRadius: 10 / 2,
    padding: 10,
    color: '#f4f4f4',
  },
  idade: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#202020',
    borderRadius: 10 / 2,
    padding: 10,
    color: '#f4f4f4',
  },
  picker: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 18,
  },
  pickerContainer: {
    backgroundColor: '#202020',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10 / 2,
  },
  limite: {
    color: '#fff',
    marginVertical: 15,
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  limiteContainer: {
    backgroundColor: '#202020',
    marginHorizontal: 20,
    borderRadius: 10 / 2,
  },
  estudante: {
    color: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  estudanteContainer: {
    backgroundColor: '#202020',
    marginVertical: 15,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10 / 2,
  },
  buttonView: {
    marginHorizontal: 70,
    
  },
  button:{
    color: '#121212'
  }
});
