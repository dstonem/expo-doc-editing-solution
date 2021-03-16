import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { FONT_FAMILY } from '../styles/fonts';

const CustomButton = ({
  onPress,
  label,
  icon = false,
  isActive = false,
  alwaysTouchable = false,
  containerStyle = {},
  ...props
}) => {
  const btnBackgroundColor = isActive ? 'transparent' : COLORS.paleGrey;
  const btnLabelColor = isActive ? COLORS.white : COLORS.darkGrey;

  const btn = (
    <TouchableOpacity
      onPress={onPress}
      disabled={!isActive || alwaysTouchable ? !alwaysTouchable : false}
      style={[styles.btn, { backgroundColor: btnBackgroundColor }]}
    >
      {icon ? (
        <View style={styles.btnIconView}>
          <Image
            source={icon}
            style={{
              width: 24,
              height: 24,
              marginLeft: 24,
              tintColor: btnLabelColor
            }}
            tintColo={btnLabelColor}
          />
          <Text
            style={[
              styles.label,
              {
                color: btnLabelColor,
                flexGrow: 1,
                marginRight: 24,
                fontFamily: FONT_FAMILY.MEDIUM
              }
            ]}
          >
            {label}
          </Text>
        </View>
      ) : (
        <Text style={[styles.label, { color: btnLabelColor }]}>{label}</Text>
      )}
    </TouchableOpacity>
  );

  return isActive ? (
    <View style={[props.style, containerStyle]}>
      <LinearGradient
        colors={[COLORS.plottrOrange, COLORS.mediumPurple]}
        start={{ y: 0.0, x: 0.0 }}
        end={{ y: 0.0, x: 1.0 }}
        style={{
          borderRadius: 14
        }}
      >
        {btn}
      </LinearGradient>
    </View>
  ) : (
    <View style={[props.style, containerStyle]}>{btn}</View>
  );
};

CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.number,
  isActive: PropTypes.bool,
  alwaysTouchable: PropTypes.bool,
  containerStyle: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.object)
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'transparent',
    borderRadius: 14,
    paddingVertical: 14,
    width: '100%'
  },
  label: {
    fontFamily: FONT_FAMILY.HEAVY,
    fontSize: 16,
    textAlign: 'center'
  },
  btnIconView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
