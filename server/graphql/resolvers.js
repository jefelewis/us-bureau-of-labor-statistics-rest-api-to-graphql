// Imports: Axios
import axios from 'axios';



// GraphQL: Resolvers
const RESOLVERS = {
  Query: {


    // EMPLOYMENT & UNEMPLOYMENT
    // Series ID: CEU0800000003
    // Prefix: CE
    getNationalEmploymentHoursAndEarnings: (parent, args) => {
      return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CE${args.seasonalAdjustmentCode}${args.superSectorCode}${args.industryCode}${args.dataTypeCode}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Series ID: EES10140001
    // Prefix: EE
    getNationalEmploymentHoursAndEarningsSIS: (parent, args) => {
      return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/EE${args.seasonalAdjustmentCode}${args.industryCode}${args.dataTypeCode}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Series ID: SMU19197802023800001
    // Prefix: SM
    getStateAndAreaEmploymentHoursAndEarnings: (parent, args) => {
      return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/SM${args.seasonalAdjustmentCode}${args.stateCode}${args.areaCode}${args.superSectorCode}${args.industryCode}${args.dataTypeCode}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Series ID: SAS0800002000011
    // Prefix: SA
    getStateAndAreaEmploymentHoursAndEarningsSIS: (parent, args) => {
      return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/SA${args.seasonalAdjustmentCode}${args.industryCode}${args.dataTypeCode}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
  //   // Series ID: ENU04013105111150
  //   // Prefix: EN
  //    getStateAndCountyEmploymentAndWagesFromQuarterlyCensusOfEmploymentAndWages: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/ENU04013105111150`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //   },
  //   // Series ID: EWU040131050A0115
  //   getStateAndCountyEmploymentAndWagesFromQuarterlyCensusOfEmploymentAndWages1997To2000SIC: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/EWU040131050A0115`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: OEUN000000011100011000001
  //   getOccupationalEmploymentStatistics: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/OEUN000000011100011000001`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: BDS0000000000000000110101LQ5
  //   getBusinessEmploymentDynamics: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/BDS0000000000000000110101LQ5`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: LAUCN281070000000003
  //   getLocalAreaUnemploymentStatistics: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/LAUCN281070000000003`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: GPU00200000R0328
  //   getGeographicProfile: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/GPU00200000R0328`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: MLUMS00NN0001003
  //   getMassLayoffStatistics: async (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/MLUMS00NN0001003`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: 12345678901234567890
  //   getJobOpeningsAndLaborTurnoverSurvey: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/12345678901234567890`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: JLU00000000HIL
  //   getJobOpeningsAndLaborTurnoverSurveySIC: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/JLU00000000HIL`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: GGUQO100000000000050010L
  //   getGreenGoodsandServices: async (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/GGUQO100000000000050010L`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // SPENDING & TIME USE
  //   // Series ID: TUU10101AA01011987
  //   getAmericanTimeUseSurvey: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/TUU10101AA01011987`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: CXUMENBOYSLB0101M
  //   getConsumerExpenditureSurvey: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CXUMENBOYSLB0101M`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },




  //   // INFLATION & PRICES
  //   // Series ID: APU000070111
  //   getAveragePriceData: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/APU000070111`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: CUUR0000SA0L1E
  //   getConsumerPriceIndexAllUrbanConsumers: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CUUR0000SA0L1E`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: CWSR0000SA111211
  //   getConsumerPriceIndexUrbanWageEarnersAndClericalWorkers: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CWSR0000SA111211`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: MUSR0000SA111211
  //   getConsumerPriceIndexAllUrbanConsumersOldSeries: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/MUSR0000SA111211`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: MWSR0000SA111211
  //   getConsumerPriceIndexUrbanWageEarnersAndClericalWorkersOldSeries: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/MWSR0000SA111211`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: LIUR0000SL00019
  //   getDepartmentStoreInventoryPriceIndex: (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/LIUR0000SL00019`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: SUUR0000SA0
  //   getChainedCPIAllUrbanConsumers: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/SUUR0000SA0`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: PCU22112222112241
  //   getProducerPriceIndexIndustryDataCurrentSeries: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/PCU22112222112241`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: NDU1051111051112345
  //   getProducerPriceIndexIndustryDataDiscontinuedSeriesNAICS: (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/NDU1051111051112345`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: 12345678901234567890
  //   getProducerPriceIndexIndustryDataDiscontinuedSeriesSIC: (parent, args) => {   
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/12345678901234567890`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: WPUIP32610012
  //   getProducerPriceIndexCommodityDataCurrentSeries: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/WPUIP32610012`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: WDU062201
  //   getProducerPriceIndexCommodityDataDiscontinuedSeries: async (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/WDU062201`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },


      

  //   // PAY & BENEFITS
  //   // Series ID: WSUB00 
  //   getWorkStoppageData: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/WSUB00`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: EBU401KINC0000ML
  //   getEmployeeBenefitsSurvey: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/EBU401KINC0000ML`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: ECS10001I
  //   getEmploymentCostIndexSIC: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/ECS10001I`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: CCU010000100000P
  //   getEmployerCostForCompensation: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CCU010000100000P`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: NCU5306633300003
  //   getNationalCompensationSurvey: (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/NCU5306633300003`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: NBU10000000000000028007
  //   getNationalCompensationSurveyBenefitsBeginningWith2010: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/NBU10000000000000028007`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: WMU40000011020000004130992500
  //   getModeledWageEstimates: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/WMU40000011020000004130992500`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },




  //   // PRODUCTIVITY
  //   // Series ID: PRS85006032
  //   getMajorSectorProductivityAndCosts: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/PRS85006032`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: MPU4900012
  //   getMajorSectorMultifactorProductivity: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/MPU4900012`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: IPUBN212___W000
  //   getIndustryProductivity: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/IPUBN212___W000`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },


  //   // // WORKPLACE INJURIES
  //   // Series ID: ISU00X00000060N00
  //   getOccupationalInjuriesAndIllnessesIndustry2014Forward: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/ISU00X00000060N00`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: FWU00X00000080M70
  //   getCensusOfFatalOccupationalInjuries2011Forward: (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/FWU00X00000080M70`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: FIU00X00000080N00
  //   getCensusOfFatalOccupationalInjuries2003To2010: (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/FIU00X00000080N00`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: CFU00000080
  //   getCensusOfFatalOccupationalInjuries1992To2002: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CFU00000080`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: CSUSDX031XXX6E000
  //   getNonFatalCasesInvolvingDaysAwayFromWorkSelectedCharacteristics2011Forward: (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CSUSDX031XXX6E000`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: CHUSDX031XXX6E000
  //   getNonFatalCasesInvolvingDaysAwayFromWorkSelectedCharacteristics2003To2010: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CHUSDX031XXX6E000`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: HCU0012123N
  //   getNonfatalCasesInvolvingDaysAwayFromWorkSelectedCharacteristics2002: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/HCU0012123N`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: CDUDMM10073
  //   getNonfatalCasesInvolvingDaysAwayFromWorkSelectedCharacteristics1992To2001: (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/CDUDMM10073`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: HSU09020018
  //   getOccupationalInjuriesAndIllnessesPre1989: (parent, args) => {    
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/HSU09020018`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: SHU00000034
  //   getOccupationalInjuriesAndIllnesses1989To2001: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/SHU00000034`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: SIU00000001
  //   getOccupationalInjuriesAndIllnesses2002: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/SIU00000001`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },
  //   // Series ID: IIU00X00000060N00
  //   getOccupationalInjuriesAndIllnesses2003To2013: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/IIU00X00000060N00`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },




  //   // // OCCUPATIONAL
  //   // Series ID: ORUV1000000000001029
  //   getOccupationalRequirementsSurvey: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/ORUV1000000000001029`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     },




  //   // INTERNATIONAL
  //   // Series ID: EIUCOCANMANU
  //   getImporExportPriceIndexes: (parent, args) => {
  //     return axios.get(`https://api.bls.gov/publicAPI/v2/timeseries/data/EIUCOCANMANU`)
  //     .then((response) => response.data)
  //     .catch((error) => console.log(error))
  //     } 
  }
};

// Exports
export default RESOLVERS;