import React from 'react';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/aws-exports';
import { StatusBar } from 'expo-status-bar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';


const client = new ApolloClient({
  uri: amplifyconfig.aws_appsync_graphqlEndpoint,
  headers: {
    'x-api-key': amplifyconfig.aws_appsync_apiKey,
  },
  cache: new InMemoryCache(),
});

Amplify.configure(amplifyconfig);

export default function App() {
  return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar translucent hidden backgroundColor="transparent" />
          <Routes />
        </NavigationContainer>
      </ApolloProvider>
  );
}
