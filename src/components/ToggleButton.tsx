import React, {useState} from 'react';
import {Switch, View, Text} from 'react-native';
import {ToggleButtonType} from './Type';

export default ({title}: ToggleButtonType) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View>
      <Switch
        trackColor={{false: '#d3d3d3', true: '#d3d3d3'}}
        thumbColor={isEnabled ? '#4c4c4c' : '#f4f3f4'}
        ios_backgroundColor="#d3d3d3"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {title && <Text> {title} </Text>}
    </View>
  );
};
