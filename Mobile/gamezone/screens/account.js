import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import FlatButton from '../shared/button.js';
import * as yup from 'yup';


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

export default function Account() {
  const [pran, setPran] = useState("765765765675")
  const [phone, setPhone] = useState("8987634872")
  const [email, setEmail] = useState("hgfhgf@khjghj.com")
  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ empFName: '', empLName: '', adhaarNum: '', panNum: '', phone: '', email: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
            <Text  style={globalStyles.titleText}> PRAN: {pran} </Text>
            <Text  style={globalStyles.titleText}> Mobile: {phone} </Text>
            <Text  style={globalStyles.titleText}> Email: {email} </Text>

            <TextInput
              style={globalStyles.input}
              placeholder='First Name'
              onChangeText={props.handleChange('empFName')}
              onBlur={props.handleBlur('empFName')} 
              value={props.values.empFName}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            {/* <Text style={globalStyles.errorText}>{props.touched.empName && props.errors.empName}</Text> */}

            <TextInput
              style={globalStyles.input}
              placeholder='Last Name'
              onChangeText={props.handleChange('empLName')}
              onBlur={props.handleBlur('empLName')} 
              value={props.values.empLName}
            />


            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='ADHAAR NUMBER'
              onChangeText={props.handleChange('adhaarNum')}
              onBlur={props.handleBlur('adhaarNum')}
              value={props.values.adhaarNum}
              keyboardType='numeric'
            />
            {/* <Text style={globalStyles.errorText}>{props.touched.adhaarNum && props.errors.adhaarNum}</Text> */}

            {/* <Text style={globalStyles.errorText}>{props.touched.panNum && props.errors.panNum}</Text> */}

            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>
  );
}