{
  getNationalEmploymentHoursAndEarnings(seasonalAdjustmentCode: "S", superSectorCode: "90", industryCode: "90000000", dataTypeCode: "01"){
    status
    responseTime
    message {
      name
    }
    Results {
      series {
        seriesID
        data {
          year
          period
          periodName
          latest
          value
          footnotes{
            code
            text
          }
        }
      }
    }
  }
}