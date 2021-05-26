import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ empName: '', adhaarNum: '', panNum: '', phone: '', email: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Your Name'
              onChangeText={props.handleChange('empName')}
              onBlur={props.handleBlur('empName')} 
              value={props.values.empName}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.empName && props.errors.empName}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='ADHAAR NUMBER'
              onChangeText={props.handleChange('adhaarNum')}
              onBlur={props.handleBlur('adhaarNum')}
              value={props.values.adhaarNum}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.adhaarNum && props.errors.adhaarNum}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='PAN'
              onChangeText={props.handleChange('panNum')}
              onBlur={props.handleBlur('panNum')} 
              value={props.values.panNum}
              
            />
            <Text style={globalStyles.errorText}>{props.touched.panNum && props.errors.panNum}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Mobile'
              onChangeText={props.handleChange('phone')}
              onBlur={props.handleBlur('phone')}
              value={props.values.phone}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.phone && props.errors.phone}</Text>


            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.phone}
              
            />
            <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
            
            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>
    
  );
}