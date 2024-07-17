import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { primary_color } from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldoInfo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo: </Text>
          <Text style={styles.valueSaldo}>Rp. 100.000 </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Antar point: </Text>
          <Text style={styles.valuePoint}>100 Points </Text>
        </View>
      </View>
      <View style={styles.buttonAction}>
        <ButtonIcon title="Add Saldo" />
        <Gap width={10} />
        <ButtonIcon title="Add Point" />
      </View>
    </View>

  );
};
export default Saldo;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  container : {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginTop: -windowHeight * 0.05,
    flexDirection: 'row',
    // gap:20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saldoInfo : {
    width: '60%',
  },
  buttonAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  labelSaldo: {
    fontSize:20,
  },
  valueSaldo: {
    fontSize:20,
  },
  labelPoint: {
    fontSize:12,
  },
  valuePoint: {
    fontSize:12,
    color: primary_color,
  },
})