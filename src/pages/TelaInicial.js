import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
    const [quilometragem, setQuilometragem] = useState('');
    const [litros, setLitros] = useState('');

    const navigation = useNavigation();  

    const calcularConsumo = () => {
      let classificacao = '' ;
    
      if (quilometragem && litros) {
        const consumoMedio = (parseFloat(quilometragem) / parseFloat(litros)).toFixed(2);
    
        if (consumoMedio > 12) {
          classificacao = 'A';
        } else if (consumoMedio > 10 && consumoMedio <= 12) {
          classificacao = 'B';
        } else if (consumoMedio > 8 && consumoMedio <= 10) {
          classificacao = 'C';
        } else if (consumoMedio > 4 && consumoMedio <= 8) {
          classificacao = 'D';
        } else if (consumoMedio > 0 && consumoMedio <= 4) {
          classificacao = 'E';
        }
    
        navigation.navigate('Resultado', { consumoMedio, classificacao });
      } else {
        alert('Por favor, insira todos os valores.');
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.capa}>
        <Text style={styles.capaTexto}>ROD</Text>
        <Image
        source={require('../../src/images/velocimetro.png')}
        style={{width: 60, height: 60}}
        />
        <Text style={styles.capaTexto}>METRO</Text>
      </View>

      <View>
        <Text style={styles.textoPergunta}>INSIRA A QUILOMETRAGEM PERCORRIDA: (EM KM)</Text>
        <TextInput
        style={styles.textoInput}
        value={quilometragem}
        onChangeText={setQuilometragem}
        placeholder='Quilometragem:'
        placeholderTextColor={'#778DA9'}
        keyboardType='numeric'
        />
      </View>

      <View>
        <Text style={styles.textoPergunta}>INSIRA A QUANTIDADE DE LITROS CONSUMIDOS:</Text>
        <TextInput
        style={styles.textoInput}
        value={litros}
        onChangeText={setLitros}
        placeholder='Litros'
        placeholderTextColor={'#778DA9'}
        keyboardType='numeric'
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={calcularConsumo}>
        <Text style={styles.btnText}>CALCULAR CONSUMO MÉDIO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#0D1B2A',
  },
  capa: {
    marginTop: 120,
    marginBottom: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  capaTexto: {
    fontSize: 35,
    color: '#F1F1F1',
    marginHorizontal: 10,
    fontFamily: 'LexendDeca_400Regular',
  },
  textoPergunta: {
    fontFamily: 'LexendDeca_400Regular',
    color: '#778DA9',
    maxWidth: 300,
    fontSize: 18,
    textAlign: 'center',
  },
  textoInput: {
    marginTop: 10,
    marginBottom: 50,
    backgroundColor: '#1B263B',
    borderRadius: 3,
    width: 300,
    height: 40,
    color: '#F1F1F1',
    fontFamily: 'LexendDeca_400Regular',
    paddingLeft: 20,
  },
  btn: {
    backgroundColor: '#415A77',
    width: 320,
    height: 60,
    borderRadius: 25,
  },
  btnText: {
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'LexendDeca_700Bold',
    fontSize: 18,
    color: '#F1F1F1',
  }
});
/*
Aqui nessa terra todos já sabem
Que amargura é do lado vermelho
Por todos os anos sempre vão lembrar
Do GREnal que pediram arrego
As tuas bandeiras já fomos buscar
E a principal tu perdeu no aterro
Dizia portão 7 e nunca mais vai ver
Porque tá com a barra do Grêmio

Oh tricolor
Tricolor
Tricolor
Grêmio!
*/
