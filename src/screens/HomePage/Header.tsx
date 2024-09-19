import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors';
import {BellIcon} from '../../assets/images/svg';

type Props = {};

const Header = (props: Props) => {
  let name = 'Dipprokash';

  return (
    <View style={styles.mainContainer}>
      <View style={{gap: 6}}>
        <Text style={styles.titleTestStyle}>Hi, {name}</Text>
        <Text style={styles.subTitleStyle}>Find your lesson today!</Text>
      </View>
      {/* Notification */}
      <View style={styles.bellIconView}>
        <BellIcon color={'gray'} width={25} height={25} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleTestStyle: {
    fontFamily: 'NunitoRegular',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitleStyle: {
    fontFamily: 'NunitoRegular',
    fontWeight: '600',
    fontSize: 20,
    color: 'darkgray',
  },
  bellIconView: {
    padding: 10,
    backgroundColor: Colors.bgColor,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
