import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Checkbox from "expo-checkbox";

export const SignIn: React.FC = () => {
  return (
    <View style={styles.contentBase}>
      <View style={styles.contentCenter}>
        <Text style={styles.title}>Teste</Text>
        <Text style={styles.subtitle}>Teste</Text>

        <View style={styles.form}>
          <TextInput placeholder="email" style={styles.emailInput} />
          <TextInput placeholder="password" style={styles.passwordInput} />
          <View style={styles.checkboxContainer}>
            <Checkbox />
            <Text>Manter conectado</Text>
          </View>
          <TouchableOpacity style={styles.signinButton}>
            <Text>Entrar</Text>
          </TouchableOpacity>

          <Text>Não tem uma conta ainda?</Text>
          <TouchableOpacity style={styles.signupButton}>
            <Text>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBase: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentCenter: {
    width: "80%",
    height: "80%",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "300",
  },
  form: {},
  emailInput: {
    padding: 10,
  },
  passwordInput: {
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signinButton: {
    padding: 10,
    backgroundColor: "blue",
  },
  signupButton: {
    padding: 10,
    borderColor: "blue",
    borderWidth: 1,
  },
});
