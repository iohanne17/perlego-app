import React from 'react'
import {
  ActivityIndicator,
  ViewStyle,
} from 'react-native'

import { colors } from '../../theme/colors'

interface Props {
  style?: ViewStyle,
}

export const Loader = ({ style }: Props) => (
  <ActivityIndicator
    color={colors.onBackgroundLabel}
    style={style}
  />
)
