# Data Visualization Project

## Data

For my final data visualization project, I will be presenting information on minimum wage and cost of living throughout the United States. I am using two formatted datasets to create these visualizations.

1. A modified dataset initially derived from one provided on [Kaggle](https://www.kaggle.com/lislejoem/us-minimum-wage-by-state-from-1968-to-2017) that provides minimum wage data for all 50 states as well as the 5 U.S owned territories since 1968. This dataset can be found [here](https://gist.github.com/apetit2/212a7cd715f8ba34eb637d014fffb12f). 
2. A modified dataset initially derived from one provided by the U.S Housing and Urban Development Department. This dataset provides average rent costs since the early 2000s. This data is provided free of charge at this [location](https://www.huduser.gov/portal/datasets/50per.html#null). This dataset can be found [here](https://gist.github.com/apetit2/aaa39169ab48ff313cfb2bfe12486fef).

---

## Prototypes
All prototypes for this project can be found on github pages in the provided link below:

* [Final Project](https://apetit2.github.io/datavis-final/#/minimum-wage)
* [Final Project Video](https://youtu.be/1XQubWy6P_E)

---

## Demos

![Min. Wage Geospatial/Line Chart Demo](./video/geospatial-line-demo.gif)*figure 1: Minimum Wage Geospatial Chart and Line Chart Interaction*
![Min. Wage Scatter Plot Demo](./video/scatterplot-demo.gif)*figure 2: Minimum Wage Scatter Plot Interaction*

---

### Min. Wage Geospatial Chart
Since I am comparing minimum wage values throughout the country, I thought it would make sense to produce a geospatial chart that easily compares highest and lowest minimum wages for a given year. I have used color saturation to distinguish states with higher minimum wage (intenser shades of blue) from those with lower minimum wages (less intense shades of blue). I also opted to include a slider to show minimum wage trends throughout the years (1968-2020). Because of this inclusion, however, I chose to represent all dollar amounts shown in 2020 dollars. This makes it a bit more accurate to compare data between multiple years since inflation has consistently trended upwards and would skewer results otherwise. To further highlight minimum wage trends by year, I included an auto increment switch. When toggled on, the visualization will increment by year every half second. Lastly, because color isn't great at representing distinct quantitative data, I have included a tooltip to show the exact effective minimum wage for each state. This tooltip will show when hovering over any state on the map. Clicking on any state will bring up specific minimum wage data for that state formatted in a line chart adjacent to the geospatial chat. A gif showing off the visualizations capabilities is included below.

![Min. Wage Geospatial Chart](./img/geospatial.png)*figure 3: Minimum Wage Geospatial Chart*

### Min. Wage Line Chart
Another prototype I created for this project is a highly configurable line chart that can be used to show minimum wage rates for each distinctive state or all collectively. This chart has additional menu drop downs for choosing which data appears on the x and y axes. For instance, one could choose to map actual minimum wage rather than effective minimum wage (wage accounting for inflation) against year if they so desired. With this being said, however, the most reasonable selections are probably the defaults, whereas the x axis represents year and the y axis represents effective minimum wage in 2020 dollars. I have also added a tooltip to this chart to further clarify the information represented.
![Min. Wage Line Chart (Single)](./img/single-state-line.png)*figure 4: Minimum Wage Line Chart (Single)*
![Min. Wage Line Chart (All)](./img/all-states-line.png)*figure 5: Minimum Wage Line Chart (All)*

### Min. Wage vs. Rent as a Percent of Salary Scatter Plot
Another prototype I created for this project is a highly configurable scatter plot that can be used to show minimum wage rates for each state plotted against rent as a percent of a person's salary. There is a red line on the chart that highlights what most financial advisors believe is the highest percent of a person's salary that they should spend on rent, 30% of their gross salary. In addition, a red gradient appears over all states where that minimum wage would require a higher percentage of gross salary than the 30% recommended to cover rent costs. Currently there is a slider that can be used to cycle through years: 2001-2020. Like the geospatial chart prototype, the year can be auto incremented by toggling on the auto-increment switch. Moreover, a tooltip provides additional information by hovering over a circle in the chart (each circle represents a unique territory or state). There is also a drop down to allow choosing between different rent types (ie. studio, 1BR apartment, 2BR apartment, 3BR apartment, and 4BR apartments).
![Min. Wage vs. Rent Cost Scatter Plot](./img/scatter-plot.png)*figure 6: Minimum Wage VS. Rent Cost Scatter Plot*

---

## Questions & Tasks
 * In which states has effective minimum wage decreased over the past 60 or so years? Has it decreased in any states? Has it increased in any states? Has it remained stagnant?
 * Which states, if any, have increased minimum wage to meet increases in inflation?
 * Is minimum wage for a given state enough to meet the living costs associated with that state?
 * Is there a correlation between higher wages and higher costs of living?

 ---

## Sketches

### Line Chart
![Simple Line Chart Sketch](./img/single-line-graph-sketch.jpeg)*figure 7: Simple Line Chart Sketch*

![Multi-Line Chart Sketch](./img/multi-line-graph-sketch.jpeg)*figure 8: Multi-Line Chart Sketch*

The above sketches, highlight two of the initial line chart views that I considered creating for this project. In the *Simple Line Chart Sketch*, the idea was to have a single state's effective minimum wage filtered out and compared with the federal minimum wage. In the *Multi-Line Chart Sketch*, the idea was similar, but would have compared all states to the federal minimum wage. A final prototype can be found above that uses parts of these sketches as inspiration (figure 4 + figure 5). 

### Scatter Plot

![Scatter Plot Sketch](./img/scatter-plot-sketch.jpeg)*figure 9: Scatter Plot Sketch*

The above sketch, depicts a potential interactive scatter plot that I considered creating for this project. It combines data taken from the Kaggle dataset and the ones found on the HUD's website. Here, the X axis represents cost of living, and the y axis represents minimum wage for a given year. Each data point represents a state or territory. A final prototype can be found above that uses parts of this sketch as inspiration (figure 6). 

### Geospatial Chart

![Geospatial Sketch](./img/geospatial-sketch.jpeg)*figure 10: Geospatial Chart*

The above sketch depicts the initial mock of the geospatial chart I have since created (figure 1). 

---

### Interactions
* Geospatial Chart will include:
  * Tooltips when hovering over states
  * Toggle switch to auto increment years
  * Slider to manually choose which year displays
  * Pressing on state navigates to line chart for selected state
* Line Chart(s) will include
  * Tooltips when hovering over lines
  * Drop down to toggle between different states
  * Some additional filtering (possibly to hide/show federal minimum wage line)
* Scatter Plot will include
  * Tooltips when hovering over circle (state representation)
  * Toggle switch to auto increment years

--- 

### Schedule of Deliverables

* Week of October 13th:
  * ~~Finalize geospatial chart (10/12)~~
    * ~~Clean up title, description, and any lingering bugs~~
  * ~~Refactor existing code base to be cleaner and easier to follow (10/12)~~
    * ~~Include comments where applicable~~
    * ~~Ensure all existing charts, graphs, plots, etc. are reusable~~
  * ~~Begin parsing and formatting HUD datasets (10/16)~~
    * ~~The HUD divvies up their average rent information into CSV files by year.~~
    * ~~They also record average rent for each county in the United States.~~
    * ~~To process, going to need to fetch every CSV file, find the average rent price per state from the list of counties, and then combine all average rent prices per state by year into a single CSV file.~~
* ~~Week of October 20th:~~
  * ~~Finish any remaining data formatting for the HUD datasets (10/18)~~
    * ~~Create a new gist to host the parsed and formatted CSV~~
    * ~~Load the CSV into my existing D3/React project~~
  * ~~Perform any needed updates to the existing line chart (10/19)~~
    * ~~Add interactions (ie. tooltip)~~
    * ~~Add Legend~~
    * ~~Clean up title, description, and any lingering bugs~~
  * ~~Begin work on Minimum Wage V. Cost of Living scatter plot (10/23)~~
    * ~~Could make use of my existing scatter plot component~~
    * ~~If making use of this scatter plot, need to ensure that the HUD dataset is combined with the Kaggle dataset~~
* ~~Week of (10/27)~~
  * ~~Finish any remaining work on the Minimum Wage V. Cost of Living scatter plot (10/25)~~
  * ~~Begin work on adding animations to charts (10/30)~~
    * ~~Using react's virtual DOM to render svg's makes it difficult to make use of d3 built-in animations~~
    * ~~Could use react-move, or react-motion, but both require some additional optimization on some of the charts I made to prevent unnecessary re-renders~~
* ~~Week of (11/3)~~
  * ~~Finish work on animations (11/3)~~
  * ~~Code clean up (11/5)~~
  * ~~Text clean up (11/5)~~
* Week of (11/10)
  * Unit Tests (11/13)
* ~~Week of (11/17)~~
  * ~~Work on any remaining tasks that weren't finished in above time line (11/20)~~
* ~~Week of (11/24)~~
  * ~~Work on any remaining tasks that weren't finished in above time line (11/27)~~

---
