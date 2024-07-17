// @ts-nocheck
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IconAddPoint, IconAddSaldo, IconSatuan, IconSetrika, IconEkspress, IconVip, IconKarpet, IconKiloan } from '../../assets';
import { backgroundColor,  } from '../../utils/constant';

const ButtonIcon = ({ title, type }: { title: string; type: string },) => {
  
  const Icon = ({ title }: { title: string }) => {
    if (title === 'Add Saldo') return <Image source={IconAddSaldo} />;
    if (title === 'Add Point') return <Image source={IconAddPoint} />;
    if (title === 'Kiloan') return <Image source={IconKiloan} />;
    if (title === 'Satuan') return <Image source={IconSatuan} />;
    if (title === 'Vip') return <Image source={IconVip} />;
    if (title === 'Karpet') return <Image source={IconKarpet} />;
    if (title === 'Setrika') return <Image source={IconSetrika} />;
    if (title === 'Ekspress') return <Image source={IconEkspress} />;
  
    return <Image source={IconAddSaldo} />
  };

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.icon(type)}>
        <Icon title={title}/>
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  icon: (type) => ({
    backgroundColor: backgroundColor,
    padding: type == 'layanan' ? 12 : 7 ,
    borderRadius:5,
  }),
  
  text: (type) => ({
      fontSize: type == 'layanan' ? 14 : 10,
      textAlign: 'center',
  }),

  container: (type) => ({
    marginBottom: 12,
    marginRight: type == 'layanan' ? 15 : 10,
  })
});
