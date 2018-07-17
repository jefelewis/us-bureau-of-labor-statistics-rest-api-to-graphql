{
  getNationalEmploymentHoursAndEarnings(id: "CEU0800000003"){
    status
    responseTime
    Results {
      series {
        seriesID
        data {
          year
          period
          periodName
          latest
          value
          footnotes {
            code
            text
          }
        }
      }
    }
  }
}