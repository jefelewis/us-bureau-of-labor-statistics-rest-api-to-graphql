// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getNationalEmploymentHoursAndEarnings(id: String): RootQuery
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