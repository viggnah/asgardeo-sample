//Setup Asgardeo Auth React SDK
export const AsgardeoConfig = {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    //clientID: "sfWONkMbVmfqIaKEASDPawhty9Ia",
    clientID:"06295R0VxPo3tx_6kyh6znPbmo8a",
    baseUrl: "https://api.asgardeo.io/t/pamodorg",
    scope: ["openid", "groups", "profile"]
};

//Loyalty Service Host and Port
export const Hosts = {
   //Loyalty: "http://localhost:8080"
   Loyalty: "https://c28959d1-6d47-494e-9314-92f88143b490-dev.e1-eu-north-azure.choreoapis.dev/drrd/loyaltyapi/1.0.0"
};
