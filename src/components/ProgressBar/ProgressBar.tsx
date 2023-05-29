import React from 'react';
import { View } from 'react-native';

export function ProgressBar({ currentValue, color }: { currentValue: number, color: string }) {
  const maxValue = 200;
  const progressPercentage = (currentValue / maxValue) * 100;

  return (
    <View style={{ width: '60%', height: 7, backgroundColor: 'gray', borderRadius: 4, overflow: 'hidden' }}>
      <View style={{ width: `${progressPercentage}%`, height: '100%', backgroundColor: color }} />
    </View>
  );
}
