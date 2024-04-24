import React from 'react';
import { StyleSheet } from 'react-native';
import { CornerDownLeft } from '@tamagui/lucide-icons'
import { RoundedButton } from './RoundedButton';

export function BackRoundedButton({ onPressAction } : { onPressAction: () => void }) {
  return (
    <RoundedButton
        position={styles.buttonPosition}
        icon={<CornerDownLeft size={24} />}
        onPress={() => { onPressAction() }}
    />
  )
}

const styles = StyleSheet.create({
    buttonPosition: {
        position: 'absolute',
        bottom: 20,
        right: 72,
    }
})