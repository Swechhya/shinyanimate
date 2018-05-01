# shinyanimate
Add animation animation to elements in Shiny.

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
