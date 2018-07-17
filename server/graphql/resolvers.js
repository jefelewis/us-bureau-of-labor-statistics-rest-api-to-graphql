// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // Series ID: CEU0800000003
    getNationalEmploymentHoursAndEarnings: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
      return response.json();
    }
    // // Series ID: ENU2000010010
    // getQuarterlyCensusOfEmploymentAndWages: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
    //   return response.json();
    // },


    // // Series ID: CEU0800000003
    // getNationalEmploymentHoursAndEarnings: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
    //   return response.json();
    // },
    // // Series ID: EES10140001
    // getNationalEmploymentHoursAndEarningsSIS: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
    //   return response.json();
    // },
    // // Series ID: SMU19197802023800001
    // getStateAndAreaEmploymentHoursAndEarnings: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
    //   return response.json();
    // },
    // // Series ID: SAS0800002000011
    // getStateAndAreaEmploymentHoursAndEarningsSIS: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
    //   return response.json();
    // },
    // // Series ID: ENU04013105111150
    // getStateAndCountyEmploymentAndWagesFromQuarterlyCensusOfEmploymentAndWages: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
    //   return response.json();
    // },
    // // Series ID: EWU040131050A0115
    // getStateAndCountyEmploymentAndWagesFromQuarterlyCensusOfEmploymentAndWagesSIS: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
    //   return response.json();
    // },



    // // Series ID: LAUCN281070000000003
    // getLocalAreaUnemploymentStatistics: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/${args.id}`);
    //   return response.json();
    // }
  }
};

// Exports
export default RESOLVERS;