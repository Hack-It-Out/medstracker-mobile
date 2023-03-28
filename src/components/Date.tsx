/* eslint-disable prettier/prettier */
import React from 'react';
import moment from 'moment';
import {View, Text, StyleSheet} from 'react-native';

interface Day {
  dayOfWeek: string;
  dayOfMonth: string;
  isToday: boolean;
}

const Date: React.FC = () => {
  const today = moment().format('dddd, MMMM Do YYYY');
  const weekStart = moment()
    .startOf('week')
    .startOf('day')
    .format('YYYY-MM-DD');
  const weekEnd = moment().endOf('week').endOf('day').format('YYYY-MM-DD');

  const days: Day[] = [];
  const currentDate = moment(weekStart);
  while (currentDate <= moment(weekEnd)) {
    days.push({
      dayOfWeek: currentDate.format('ddd'),
      dayOfMonth: currentDate.format('D'),
      isToday: currentDate.isSame(moment(), 'day'),
    });
    currentDate.add(1, 'days');
  }

  return (
    <View className="">
      <View className="bg-primary flex-row justify-between items-center text-white px-5 py-4 rounded-md">
        {/* Display week days and corresponding dates in number */}
        {days.map((day, index) => (
          <View key={index} className="text-white space-y-3">
            <Text style={[styles.dayOfWeek, day.isToday && styles.today]}>
              {day.dayOfWeek}
            </Text>
            <Text style={[styles.dayOfMonth, day.isToday && styles.today]}>
              {day.dayOfMonth}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.currentDate}>
        <Text style={styles.todayDate}>{today}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  day: {
    alignItems: 'center',
  },
  dayOfWeek: {
    fontSize: 14,
    color: '#fff',
  },
  dayOfMonth: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  today: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  currentDate: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  todayDate: {
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Date;
