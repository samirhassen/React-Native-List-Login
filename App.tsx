import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  TextInput, 
  SafeAreaView, 
  Alert,
  Button 
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

const Login = () => {
  Alert.alert(email + ", pwd = " + pwd)
}

  const data = {
    marvel: [
      {
      name: 'Doctor Strange',
      },
      {
      name: 'Spiderman',
      },
      {
      name: 'Green Goblin',
      },
      {
      name: 'Black Panther'
      }
    ],
    DC: [
      'Batman',
      'Superman',
      'Aquaman',
      'Joker'
    ]
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <TextInput
        placeholder='Email'
        onChangeText={(inputValue) => { setEmail(inputValue); console.warn(email);}}
      ></TextInput>

      <TextInput
        placeholder='password'
        secureTextEntry={true}
        onChangeText={(inputValue) => { setPwd(inputValue); console.warn(email);}}
      >
      </TextInput>
      
      <Button
        title='Login'
        onPress={Login}
      />

      <Text>Vi är här</Text>
      <TextInput
      placeholder="Insert text"
      onChange={() => Alert.alert("I'm in")}
      >
      </TextInput>
      <FlatList
      data={data.marvel}
      keyExtractor={item => item.name}
      renderItem={({item}) => 
        <Text style={styles.marvel}>{item.name}</Text>
      }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marvel: {
  }
});
