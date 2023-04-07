import React, {Fragment} from 'react';
import {Theme, colors} from '../../lib/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  name: string;
  title: string;
  focused: boolean;
}

export const CustomTabbarIcon = ({title, name, focused}: Props) => (
  <Fragment>
    <MaterialCommunityIcons
      color={focused ? colors.primary : colors.inverseBlack80}
      name={name}
      size={Theme.sizes.icon3}
    />
  </Fragment>
);
