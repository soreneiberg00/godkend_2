import React, { useState } from 'react';
import { View, Picker, Button } from 'react-native';

export const Categories = ['Painting', 'Sculpture', 'Picture', 'Vase', 'Other'];

const CategoryDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(Categories[0]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {Categories.map((Categories, index) => (
          <Picker.Item label={Categories} value={Categories} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default CategoryDropdown;
