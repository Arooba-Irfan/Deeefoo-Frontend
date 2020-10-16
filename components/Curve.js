import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Appbar } from 'react-native-paper';

export default function Curve() {

  return (
    <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.Content title="Title" subtitle="Subtitle" />
    </Appbar.Header>
  );
};

