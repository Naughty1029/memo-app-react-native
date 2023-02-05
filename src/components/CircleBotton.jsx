import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shape, string } from 'prop-types';

export default function CircleBotton(props) {
  const { children, style } = props;
  return (
    <View style={[styles.circleBotton, style]}>
      <Text style={styles.circleBottonLabel}>{children}</Text>
    </View>
  );
}

CircleBotton.propTypes = {
  children: string.isRequired,
  style: shape(),
};

CircleBotton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleBotton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleBottonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
