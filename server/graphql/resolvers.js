// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {


    // EMPLOYMENT & UNEMPLOYMENT
    // Series ID: CEU0800000003
    // Prefix: CE
    getNationalEmploymentHoursAndEarnings: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CE${args.seasonalAdjustmentCode}${args.superSectorCode}${args.industryCode}${args.dataTypeCode}`);
      return response.json();
    },
    // Series ID: EES10140001
    // Prefix: EE
    getNationalEmploymentHoursAndEarningsSIS: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/EE${args.seasonalAdjustmentCode}${args.industryCode}${args.dataTypeCode}`);
      return response.json();
    },
    // Series ID: SMU19197802023800001
    // Prefix: SM
    getStateAndAreaEmploymentHoursAndEarnings: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/SM${args.seasonalAdjustmentCode}${args.stateCode}${args.areaCode}${args.superSectorCode}${args.industryCode}${args.dataTypeCode}`);
      return response.json();
    },
    // Series ID: SAS0800002000011
    // Prefix: SA
    getStateAndAreaEmploymentHoursAndEarningsSIS: async (parent, args) => {
      const response = await
      fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/SA${args.seasonalAdjustmentCode}${args.industryCode}${args.dataTypeCode}`);
      return response.json();
    },









    // // Series ID: ENU04013105111150
    // // Prefix: EN
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


    // // SPENDING & TIME USE
    // // Series ID: TUU10101AA01011987
    // getAmericanTimeUseSurvey: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/TUU10101AA01011987`);
    //   return response.json();
    // },
    // // Series ID: CXUMENBOYSLB0101M
    // getConsumerExpenditureSurvey: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CXUMENBOYSLB0101M`);
    //   return response.json();
    // },


    // // INFLATION & PRICES
    // // Series ID: APU000070111
    // getAveragePriceData: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/APU000070111`);
    //   return response.json();
    // },
    // // Series ID: CUUR0000SA0L1E
    // getConsumerPriceIndexAllUrbanConsumers: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CUUR0000SA0L1E`);
    //   return response.json();
    // },
    // // Series ID: CWSR0000SA111211
    // getConsumerPriceIndexUrbanWageEarnersAndClericalWorkers: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CWSR0000SA111211`);
    //   return response.json();
    // },
    // // Series ID: MUSR0000SA111211
    // getConsumerPriceIndexAllUrbanConsumersOldSeries: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/MUSR0000SA111211`);
    //   return response.json();
    // },
    // // Series ID: MWSR0000SA111211
    // getConsumerPriceIndexUrbanWageEarnersAndClericalWorkersOldSeries: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/MWSR0000SA111211`);
    //   return response.json();
    // },
    // // Series ID: LIUR0000SL00019
    // getDepartmentStoreInventoryPriceIndex: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/LIUR0000SL00019`);
    //   return response.json();
    // },
    // // Series ID: SUUR0000SA0
    // getChainedCPIAllUrbanConsumers: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/SUUR0000SA0`);
    //   return response.json();
    // },
    // // Series ID: PCU22112222112241
    // getProducerPriceIndexIndustryDataCurrentSeries: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/PCU22112222112241`);
    //   return response.json();
    // },
    // // Series ID: NDU1051111051112345
    // getProducerPriceIndexIndustryDataDiscontinuedSeriesNAICS: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/NDU1051111051112345`);
    //   return response.json();
    // },
    // // Series ID: 12345678901234567890
    // getProducerPriceIndexIndustryDataDiscontinuedSeriesSIC: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/12345678901234567890`);
    //   return response.json();
    // },
    // // Series ID: WPUIP32610012
    // getProducerPriceIndexCommodityDataCurrentSeries: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/WPUIP32610012`);
    //   return response.json();
    // },
    // // Series ID: WDU062201
    // getProducerPriceIndexCommodityDataDiscontinuedSeries: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/WDU062201`);
    //   return response.json();
    // },


    // // PAY & BENEFITS
    // // Series ID: WSUB00 
    // getWorkStoppageData: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/WSUB00`);
    //   return response.json();
    // },
    // // Series ID: EBU401KINC0000ML
    // getEmployeeBenefitsSurvey: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/EBU401KINC0000ML`);
    //   return response.json();
    // },
    // // Series ID: ECS10001I
    // getEmploymentCostIndexSIC: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/ECS10001I`);
    //   return response.json();
    // },
    // // Series ID: CCU010000100000P
    // getEmployerCostForCompensation: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CCU010000100000P`);
    //   return response.json();
    // },
    // // Series ID: NCU5306633300003
    // getNationalCompensationSurvey: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/NCU5306633300003`);
    //   return response.json();
    // },
    // // Series ID: NBU10000000000000028007
    // getNationalCompensationSurveyBenefitsBeginningWith2010: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/NBU10000000000000028007`);
    //   return response.json();
    // },
    // // Series ID: WMU40000011020000004130992500
    // getModeledWageEstimates: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/WMU40000011020000004130992500`);
    //   return response.json();
    // },


    // // PRODUCTIVITY
    // // Series ID: PRS85006032
    // getMajorSectorProductivityAndCosts: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/PRS85006032`);
    //   return response.json();
    // },
    // // Series ID: MPU4900012
    // getMajorSectorMultifactorProductivity: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/MPU4900012`);
    //   return response.json();
    // },
    // // Series ID: IPUBN212___W000
    // getIndustryProductivity: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/IPUBN212___W000`);
    //   return response.json();
    // },


    // // WORKPLACE INJURIES
    // // Series ID: ISU00X00000060N00
    // getOccupationalInjuriesAndIllnessesIndustry2014Forward: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/ISU00X00000060N00`);
    //   return response.json();
    // },
    // // Series ID: FWU00X00000080M70
    // getCensusOfFatalOccupationalInjuries2011Forward: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/FWU00X00000080M70`);
    //   return response.json();
    // },
    // // Series ID: FIU00X00000080N00
    // getCensusOfFatalOccupationalInjuries2003To2010: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/FIU00X00000080N00`);
    //   return response.json();
    // },
    // // Series ID: CFU00000080
    // getCensusOfFatalOccupationalInjuries1992To2002: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CFU00000080`);
    //   return response.json();
    // },
    // // Series ID: CSUSDX031XXX6E000
    // getNonFatalCasesInvolvingDaysAwayFromWorkSelectedCharacteristics2011Forward: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CSUSDX031XXX6E000`);
    //   return response.json();
    // },
    // // Series ID: CHUSDX031XXX6E000
    // getNonFatalCasesInvolvingDaysAwayFromWorkSelectedCharacteristics2003To2010: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CHUSDX031XXX6E000`);
    //   return response.json();
    // },
    // // Series ID: HCU0012123N
    // getNonfatalCasesInvolvingDaysAwayFromWorkSelectedCharacteristics2002: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/HCU0012123N`);
    //   return response.json();
    // },
    // // Series ID: CDUDMM10073
    // getNonfatalCasesInvolvingDaysAwayFromWorkSelectedCharacteristics1992To2001: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/CDUDMM10073`);
    //   return response.json();
    // },
    // // Series ID: HSU09020018
    // getOccupationalInjuriesAndIllnessesPre1989: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/HSU09020018`);
    //   return response.json();
    // },
    // // Series ID: SHU00000034
    // getOccupationalInjuriesAndIllnesses1989To2001: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/SHU00000034`);
    //   return response.json();
    // },
    // // Series ID: SIU00000001
    // getOccupationalInjuriesAndIllnesses2002: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/SIU00000001`);
    //   return response.json();
    // },
    // // Series ID: IIU00X00000060N00
    // getOccupationalInjuriesAndIllnesses2003To2013: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/IIU00X00000060N00`);
    //   return response.json();
    // },


    // // OCCUPATIONAL
    // // Series ID: ORUV1000000000001029
    // getOccupationalRequirementsSurvey: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/ORUV1000000000001029`);
    //   return response.json();
    // },


    // // INTERNATIONAL
    // // Series ID: EIUCOCANMANU
    // getImporExportPriceIndexes: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.bls.gov/publicAPI/v2/timeseries/data/EIUCOCANMANU`);
    //   return response.json();
    // } 
  }
};

// Exports
export default RESOLVERS;