import React, { useState } from 'react';
import { View, Picker } from 'react-native';

const Size = ['Below 10x10 cm2', '10x10 - 30x30 cm2', '30x30 - 70x70 cm2', '70x70-150x150 cm2', '>150x150 cm2'];

const SizeDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(Size[0]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {Size.map((Size, index) => (
          <Picker.Item label={Size} value={Size} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default SizeDropdown;
