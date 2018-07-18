// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getNationalEmploymentHoursAndEarnings(seasonalAdjustmentCode: String, superSectorCode: String, industryCode: String, dataTypeCode: String): RootQuery
    getNationalEmploymentHoursAndEarningsSIS(seasonalAdjustmentCode: String, industryCode: String, dataTypeCode: String): RootQuery
    getStateAndAreaEmploymentHoursAndEarnings(seasonalAdjustmentCode: String, superSectorCode: String, industryCode: String, dataTypeCode: String): RootQuery
    getStateAndAreaEmploymentHoursAndEarningsSIS(seasonalAdjustmentCode: String, industryCode: String, dataTypeCode: String): RootQuery
  }

  type RootQuery {
    status: String
    responseTime: Int
    message: [MessageElement]
    Results: Result
  }

  type MessageElement {
    name: String
  }

  type Result {
    series: [SeriesElement]
  }

  type SeriesElement {
    seriesID: String
    data: [DataElement]
  }

  type DataElement {
    year: String
    period: String
    periodName: String
    latest: Boolean
    value: String
    footnotes: [Footnote]
  }

  type Footnote {
    code: String
    text: String
  }
`;


// Exports
export default TYPEDEFS;