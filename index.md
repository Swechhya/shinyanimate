# shinyanimate

[![version](http://www.r-pkg.org/badges/version/shinyanimate)](https://CRAN.R-project.org/package=shinyanimate)
[![CRAN_Download_Badge](http://cranlogs.r-pkg.org/badges/grand-total/shinyanimate)](http://cran.r-project.org/package=shinyanimate)

shinyanimate package is an R wrapper for [animate.css](https://daneden.github.io/animate.css/). It allows user to easily add animations to any UI element in shiny app using the elements id.

## Installation

To install the stable CRAN version:

```r
install.packages("shinyanimate")
```

To install the latest development version from GitHub:

```r
library(devtools)
install_github('Swechhya/shinyanimate')
```

## Usage

### Add animation after event is observed

```r
library(shiny)
library(shinyanimate)
ui <- fluidPage(
  withAnim(),
  div( id = 'shinyLogo', tags$img(src= "http://hexb.in/hexagons/shiny.png", width = "100px", height = "100px")),
  actionButton(inputId = "button", label = "Animate")
)
server <- function(input, output, session) {
  observeEvent(input$button,{
    startAnim(session, 'shinyLogo', 'shakeX')
  })
}
shinyApp(ui, server)
```

![](images/addAnim.gif)

### Add animation on mouse hover

```r
library(shiny)
library(shinyanimate)
ui <- fluidPage(
  withAnim(),
  div( id = 'shinyLogo', tags$img(src= "http://hexb.in/hexagons/shiny.png", width = "100px", height = "100px"))
)
server <- function(input, output, session) {
  observe(addHoverAnim(session, 'shinyLogo', 'pulse'))
}
shinyApp(ui, server)
```

![](images/hoverAnim.gif)

### Add animation when the element comes into view after scrolling

```r
library(shiny)
library(shinyanimate)
ui <- fluidPage(
    withAnim(),
    tags$h1('Scroll below to see an animation'),
    br(), br(), br(), br(), br(), br(), br(),
    br(), br(), br(), br(), br(), br(), br(),
    div( id = 'shinyLogo', tags$img(src= "http://hexb.in/hexagons/shiny.png", width = "100px", height = "100px"))
)
server <- function(input, output, session) {
    observe(addScrollAnim(session, 'shinyLogo', 'bounceInRight'))
}
shinyApp(ui, server)
```

![](images/scrollAnim.gif)
\
\
\
\

## Available Animations

### Attention seekers

#### bounce

![](images/bounce.gif)

#### flash

![](images/flash.gif)

#### pulse

![](images/pulse.gif)

#### rubberBand

![](images/rubberBand.gif)

#### shakeX

![](images/shakeX.gif)

#### shakeY

![](images/shakeY.gif)

#### headShake

![](images/headShake.gif)

#### swing

![](images/swing.gif)

#### tada

![](images/tada.gif)

#### wobble

![](images/wobble.gif)

#### jello

![](images/jello.gif)

#### heartBeat

![](images/heartBeat.gif)

### Back entrances

#### backInDown

![](images/backInDown.gif)

#### backInLeft

![](images/backInLeft.gif)

#### backInRight

![](images/backInRight.gif)

#### backInUp

![](images/backInUp.gif)

### Back exits

#### backOutDown

![](images/backOutDown.gif)

#### backOutLeft

![](images/backOutLeft.gif)

#### backOutRight

![](images/backOutRight.gif)

#### backOutUp

![](images/backOutUp.gif)

### Bouncing entrances

#### bounceIn

![](images/bounceIn.gif)

#### bounceInDown

![](images/bounceInDown.gif)

#### bounceInLeft

![](images/bounceInLeft.gif)

#### bounceInRight

![](images/bounceInRight.gif)

#### bounceInUp

![](images/bounceInUp.gif)

### Bouncing exits

#### bounceOut

![](images/bounceOut.gif)

#### bounceOutDown

![](images/bounceOutDown.gif)

#### bounceOutLeft

![](images/bounceOutLeft.gif)

#### bounceOutRight

![](images/bounceOutRight.gif)

#### bounceOutUp

![](images/bounceOutUp.gif)

### Fading entrances

#### fadeIn

![](images/fadeIn.gif)

#### fadeInDown

![](images/fadeInDown.gif)

#### fadeInDownBig

![](images/fadeInDownBig.gif)

#### fadeInLeft

![](images/fadeInLeft.gif)

#### fadeInLeftBig

![](images/fadeInLeftBig.gif)

#### fadeInRight

![](images/fadeInRight.gif)

#### fadeInRightBig

![](images/fadeInRightBig.gif)

#### fadeInUp

![](images/fadeInUp.gif)

#### fadeInUpBig

![](images/fadeInUpBig.gif)

#### fadeInTopLeft

![](images/fadeInTopLeft.gif)

#### fadeInTopRight

![](images/fadeInTopRight.gif)

#### fadeInBottomLeft

![](images/fadeInBottomLeft.gif)

#### fadeInBottomRight

![](images/fadeInBottomRight.gif)

### Fading exits

#### fadeOut

![](images/fadeOut.gif)

#### fadeOutDown

![](images/fadeOutDown.gif)

#### fadeOutDownBig

![](images/fadeOutDownBig.gif)

#### fadeOutLeft

![](images/fadeOutLeft.gif)

#### fadeOutLeftBig

![](images/fadeOutLeftBig.gif)

#### fadeOutRight

![](images/fadeOutRight.gif)

#### fadeOutRightBig

![](images/fadeOutRightBig.gif)

#### fadeOutUp

![](images/fadeOutUp.gif)

#### fadeOutUpBig

![](images/fadeOutUpBig.gif)

#### fadeOutTopLeft

![](images/fadeOutTopLeft.gif)

#### fadeOutTopRight

![](images/fadeOutTopRight.gif)

#### fadeOutBottomRight

![](images/fadeOutBottomRight.gif)

#### fadeOutBottomLeft

![](images/fadeOutBottomLeft.gif)

### Flippers

#### flip

![](images/flip.gif)

#### flipInX

![](images/flipInX.gif)

#### flipInY

![](images/flipInY.gif)

#### flipOutX

![](images/flipOutX.gif)

#### flipOutY

![](images/flipOutY.gif)

### Lightspeed

#### lightSpeedInRight

![](images/lightSpeedInRight.gif)

#### lightSpeedInLeft

![](images/lightSpeedInLeft.gif)

#### lightSpeedOutRight

![](images/lightSpeedOutRight.gif)

#### lightSpeedOutLeft

![](images/lightSpeedOutLeft.gif)

### Rotating entrances

#### rotateIn

![](images/rotateIn.gif)

#### rotateInDownLeft

![](images/rotateInDownLeft.gif)

#### rotateInDownRight

![](images/rotateInDownRight.gif)

#### rotateInUpLeft

![](images/rotateInUpLeft.gif)

#### rotateInUpRight

![](images/rotateInUpRight.gif)

### Rotating exits

#### rotateOut

![](images/rotateOut.gif)

#### rotateOutDownLeft

![](images/rotateOutDownLeft.gif)

#### rotateOutDownRight

![](images/rotateOutDownLeft.gif)

#### rotateOutUpLeft

![](images/rotateOutUpLeft.gif)

#### rotateOutUpRight

![](images/rotateOutUpRight.gif)

### Specials

#### hinge

![](images/hinge.gif)

#### jackInTheBox

![](images/jackInTheBox.gif)

#### rollIn

![](images/rollIn.gif)

#### rollOut

![](images/rollOut.gif)

### Zooming entrances

#### zoomIn

![](images/zoomIn.gif)

#### zoomInDown

![](images/zoomInDown.gif)

#### zoomInLeft

![](images/zoomInLeft.gif)

#### zoomInRight

![](images/zoomInRight.gif)

#### zoomInUp

![](images/zoomInUp.gif)

### Zooming exits

#### zoomOut

![](images/zoomOut.gif)

#### zoomOutDown

![](images/zoomOutDown.gif)

#### zoomOutLeft

![](images/zoomOutLeft.gif)

#### zoomOutRight

![](images/zoomOutRight.gif)

#### zoomOutUp

![](images/zoomOutUp.gif)

### Sliding entrances

#### slideInDown

![](images/slideInDown.gif)

#### slideInLeft

![](images/slideInLeft.gif)

#### slideInRight

![](images/slideInRight.gif)

#### slideInUp

![](images/slideInUp.gif)

### Sliding exits

#### slideOutDown

![](images/slideOutDown.gif)

#### slideOutLeft

![](images/slideOutLeft.gif)

#### slideOutRight

![](images/slideOutRight.gif)

#### slideOutUp

![](images/slideOutUp.gif)
