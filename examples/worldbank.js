WB = CSV("http://server.com/WorldBank.csv");
// Static transformation to get unique year value table.
years = uniqueData(WB, "year");
// Dynamic transformation based on currently selected year.
current_year = selectedData(years, "year");
// dependent / sequential computation
WBr = selectedData(WB, "region");
WBry = selectedData(WBr, "year");
WBryc = selectedData(WBry, "country");
WBrc = selectedData(WBr, "country");
WBrc60 = staticSubset(WBrc, "year", 1960);
// independent / parallel computation
WB60 = staticSubset(WB, "year", 1960);
WBrc60 = selectedData(WB60, "country", "region");
WBrc = selectedData(WB, "country", "region");
WBry = selectedData(WB, "year", "region");
WBryc = selectedData(WB, "year", "region", "country");
// Automatic specification of data set to use for rendering scales?
geom_point(aes(
  x=life.expectancy,
  y=fertility.rate),
  data=WBry)
