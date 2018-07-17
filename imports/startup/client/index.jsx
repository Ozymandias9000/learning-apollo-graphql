import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from '../../ui/App';

const client = new ApolloClient({
  uri: Meteor.absoluteUrl('graphql'),
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('app'));
});
