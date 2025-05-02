import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Resultado({ route, navigation }) {
    
    /*Réver contra*/
    const { consumoMedio, classificacao } = route.params;
    return (
        <View style={styles.container}>

            <Text style={styles.desempenho}>
                DESEMPENHO
            </Text>

            <View style={styles.areaTexto}>
                <Text style={styles.resultadoTexto}>
                    O consumo médio é:
                </Text>
                <Text style={styles.resultadoTexto}>{consumoMedio} km/L</Text>
            </View>

            <View style={styles.areaTexto}>
                <Text style={styles.resultadoTexto}>
                    Classificação:
                </Text>
                <View style={styles.fundoTextoClassificacao}>
                <Text style={styles.resultadoClassificacao}>
                    {classificacao}
                </Text>
                </View>
            </View>

                  <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TelaInicial', { reset: true })}>
                    <Text style={styles.btnText}>CALCULAR NOVAMENTE</Text>
                  </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1B2A',
        alignItems: 'center',
    },
    resultadoTexto: {
        fontFamily: 'LexendDeca_400Regular',
        color: '#778DA9',
        fontSize: 24,
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: '#415A77',
        width: 300,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontFamily: 'LexendDeca_700Bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#F1F1F1',
    },
    desempenho: {
        fontFamily: 'LexendDeca_400Regular',
        color: '#F1F1F1',
        fontSize: 35,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 100
    },
    areaTexto: {
        marginTop: 10,
        marginBottom: 50,
        backgroundColor: '#1B263B',
        borderRadius: 5,
        width: 300,
        height: 150,
    },
    resultadoClassificacao: {
        fontFamily: 'LexendDeca_700Bold',
        textAlign: 'center',
        color: '#F1F1F1',
        fontSize: 28,
    },
    fundoTextoClassificacao: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#415A77',
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 7,
    },
});
/*
https://ge.globo.com/futebol/futebol-internacional/noticia/fifa-reconhece-titulos-mundiais-de-flamengo-gremio-santos-e-sao-paulo.ghtml
*/
