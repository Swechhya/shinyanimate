# shinyanimate
shinyanimate package is an R wrapper for [animate.css](https://daneden.github.io/animate.css/). It allows user to easily add animations to any UI element in shiny app using the elements id.

## Installation

You can install it from `github` using the `devtools` package.

```r
library(devtools)
install_github('Swechhya/shinyanimate')
```

## Example code
```r
library(shiny)
library(shinyanimate)
ui <- fluidPage(
 withAnim(),
 tags$div(id = 'title', h1('ANIMATION')),
 actionButton(inputId = "button", label = "Animate")
)
server <- function(input, output, session) {
 observeEvent(input$button,{
   startAnim(session, 'title', 'bounce')
 })
}
shinyApp(ui, server)
```
