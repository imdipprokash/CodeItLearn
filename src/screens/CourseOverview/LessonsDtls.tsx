import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import {ArrowRight, PlayIcon} from '../../assets/images/svg';

type Props = {};

const LessonsDtls = (props: Props) => {
  const [state, setActiveItem] = useState<any>('lessons');

  const data = [{id: 1}, {id: 2}, {id: 3}];

  const lessonComponent = () => {
    return data?.map(item => (
      <View
        key={item.id}
        style={[
          styles.tabViewStyle,
          {justifyContent: 'space-between', flex: 1, marginBottom: 10},
        ]}>
        <View
          style={[
            styles.tabViewStyle,
            {justifyContent: 'space-between', gap: 10},
          ]}>
          <View
            style={{
              backgroundColor: '#4393F4',
              padding: 6,
              borderRadius: 9999,
            }}>
            <PlayIcon width={35} height={35} color="white" />
          </View>
          <View>
            <Text style={styles.headerTextStyle}>Introduction to figma</Text>
            <Text style={styles.subHeadingText}>04.28 min</Text>
          </View>
        </View>

        <View>
          <ArrowRight width={20} height={20} color="#4393F4" />
        </View>
      </View>
    ));
  };
  return (
    <View>
      <View style={styles.tabViewStyle}>
        <TouchableOpacity
          style={styles.tabItemStyle}
          onPress={() => setActiveItem('lessons')}>
          <View
            style={{
              borderBottomWidth: state === 'lessons' ? 2 : 0, // This creates the underline
              borderBottomColor:
                state === 'lessons' ? Colors.activeColor : Colors.inActiveColor, // Color of the underline
              paddingBottom: 5,
            }}>
            <Text
              style={[
                styles.itemTextStyle,
                {
                  color:
                    state === 'lessons'
                      ? Colors.activeColor
                      : Colors.inActiveColor,
                },
              ]}>
              Lessons
            </Text>
          </View>
        </TouchableOpacity>
        <View />
        <TouchableOpacity onPress={() => setActiveItem('description')}>
          <View
            style={{
              borderBottomWidth: state === 'description' ? 2 : 0, // This creates the underline
              borderBottomColor:
                state === 'description'
                  ? Colors.activeColor
                  : Colors.inActiveColor, // Color of the underline
              paddingBottom: 5,
            }}>
            <Text
              style={[
                styles.itemTextStyle,
                {
                  color:
                    state === 'description'
                      ? Colors.activeColor
                      : Colors.inActiveColor,
                },
              ]}>
              Description
            </Text>
          </View>
        </TouchableOpacity>
        <View />
      </View>

      {/*  */}
      {state === 'lessons' ? (
        lessonComponent()
      ) : (
        <View>
          <Text>Hlw</Text>
        </View>
      )}
    </View>
  );
};

export default LessonsDtls;

const styles = StyleSheet.create({
  tabViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  tabItemStyle: {
    padding: 10,
  },
  itemTextStyle: {
    color: Colors.activeColor,
    fontSize: 20,
    fontWeight: '600',
  },
  headerTextStyle: {
    marginTop: 10,
    fontFamily: 'NunitoRegular',
    fontSize: 20,
    fontWeight: '700',
  },
  subHeadingText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
});
