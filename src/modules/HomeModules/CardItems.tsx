import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
interface listItem {
  listItem: any;
}
const CardItems: React.FC<listItem> = ({listItem}) => {
  console.log(listItem);
  return (
    <View style={styles.columnContainer}>
      <View style={styles.imageControl}>
        <Image
          source={{
            uri: `${listItem?.relatedImage}`,
          }}
          style={styles.columnImage}
        />
      </View>
      <Text style={styles.iconCaption} numberOfLines={1}>
        {listItem?.departmentName}
      </Text>
      <Text style={styles.iconCaptionCount} numberOfLines={1}>
        {listItem?.doctorsCount} doctors
      </Text>
    </View>
  );
};

export default CardItems;

const styles = StyleSheet.create({
  columnContainer: {
    height: 180,
    width: 130,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  imageControl: {
    width: 100,
    height: 90,
    overflow: 'hidden',
  },
  columnImage: {
    width: '100%',
    height: '110%',
    resizeMode: 'contain',
  },
  iconCaption: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  iconCaptionCount: {
    fontSize: 18,
    color: 'black',
    opacity: 0.7,
  },
});
