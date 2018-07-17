// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // Series ID: CEU0800000003
    getNationalEmploymentHoursAndEarnings: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0800000003`);
      return response.json();
    },
    // Series ID: EES10140001
    getNationalEmploymentHoursAndEarningsSIS: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/EES10140001`);
      return response.json();
    },
    // Series ID: SMU19197802023800001
    getStateAndAreaEmploymentHoursAndEarnings: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/SMU19197802023800001`);
      return response.json();
    },
    // Series ID: SAS0800002000011
    getStateAndAreaEmploymentHoursAndEarningsSIS: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/SAS0800002000011`);
      return response.json();
    },
    // // Series ID: ENU04013105111150
    //  getStateAndCountyEmploymentAndWagesFromQuarterlyCensusOfEmploymentAndWages: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/ENU04013105111150`);
    //   return response.json();
    // },
    // // Series ID: EWU040131050A0115
    // getStateAndCountyEmploymentAndWagesFromQuarterlyCensusOfEmploymentAndWages1997To2000SIC: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/EWU040131050A0115`);
    //   return response.json();
    // },
    // // Series ID: OEUN000000011100011000001
    // getOccupationalEmploymentStatistics: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/OEUN000000011100011000001`);
    //   return response.json();
    // },
    // // Series ID: BDS0000000000000000110101LQ5
    // getBusinessEmploymentDynamics: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/BDS0000000000000000110101LQ5`);
    //   return response.json();
    // },
    // // Series ID: LAUCN281070000000003
    // getLocalAreaUnemploymentStatistics: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/LAUCN281070000000003`);
    //   return response.json();
    // },
    // // Series ID: GPU00200000R0328
    // getGeographicProfile: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/GPU00200000R0328`);
    //   return response.json();
    // },
    // // Series ID: MLUMS00NN0001003
    // getMassLayoffStatistics: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/MLUMS00NN0001003`);
    //   return response.json();
    // },
    // // Series ID: 12345678901234567890
    // getJobOpeningsAndLaborTurnoverSurvey: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/12345678901234567890`);
    //   return response.json();
    // },
    // // Series ID: JLU00000000HIL
    // getJobOpeningsAndLaborTurnoverSurveySIC: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/JLU00000000HIL`);
    //   return response.json();
    // },
    // // Series ID: GGUQO100000000000050010L
    // getGreenGoodsandServices: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/GGUQO100000000000050010L`);
    //   return response.json();
    // },
    // function: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/SERIESID`);
    //   return response.json();
    // },
  }
};

// Exports
export default RESOLVERS;