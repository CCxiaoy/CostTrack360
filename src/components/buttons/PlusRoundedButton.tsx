import React from 'react';
import { StyleSheet } from 'react-native';
import { Plus } from '@tamagui/lucide-icons'
import RoundedButton from './RoundedButton';

export default function PlusRoundedButton() {
  return (
    <RoundedButton
        position={styles.buttonPosition}
        icon={<Plus size={24} />}
        onPress={() => console.log('Plus button pressed')}
    />
  )
}

const styles = StyleSheet.create({
    buttonPosition: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})