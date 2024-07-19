import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    // Replace with actual login authentication logic
    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Login Successful', 'Welcome!');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  const handleSignUp = () => {
    // Replace with actual signup authentication logic
    if (password !== confirmPassword) {
      Alert.alert('Signup Failed', 'Passwords do not match.');
    } else {
      Alert.alert('Signup Successful', 'Account created!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      )}
      <Button
        title={isLogin ? 'Login' : 'Sign Up'}
        onPress={isLogin ? handleLogin : handleSignUp}
      />
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.toggleText}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  toggleText: {
    marginTop: 16,
    color: '#007BFF',
    textAlign: 'center',
  },
});
