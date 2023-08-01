import {TouchableHighlightProps} from 'react-native';

export interface ButtonType extends TouchableHighlightProps {
  title: string;
}

export interface ToggleButtonType {
  title?: string;
}
