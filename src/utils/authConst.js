export const IDENTITY_CONFIG = {
  // authority: process.env.REACT_APP_AUTH_URL, //(string): The URL of the OIDC provider.
  client_id: process.env.REACT_APP_IDENTITY_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URL,
};


// export const METADATA_OIDC = {
//   issuer: "https://identityserver",
//   jwks_uri: process.env.REACT_APP_AUTH_URL + "/.well-known/openid-configuration/jwks",
//   authorization_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/authorize",
//   token_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/token",
//   userinfo_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/userinfo",
//   end_session_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/endsession",
//   check_session_iframe: process.env.REACT_APP_AUTH_URL + "/connect/checksession",
//   revocation_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/revocation",
//   introspection_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/introspect"
// };