#' Set up Shiny app to use animation
#'
#' This function needs to be added in the UI if to want to add animation to your UI elements using shinyanimation.
#' @export
#' @examples
#' \dontrun{withAnim()}
#' @seealso \code{\link{startAnim}}
withAnim <- function(){
  shiny::tagList(
    shiny::singleton(
      shiny::tags$head(shiny::tags$link(rel="stylesheet",href="assets/animate.min.css"))
    ),
    shiny::singleton(
      shiny::tags$script(src="assets/addClass.js")
    )
  )
}

#'Start an animation
#'
#' Start an animation of the UI element.
#' @export
#' @param session The session object passed to function given to shinyServer.
#' @param id the id of the UI element for which you want to add animation.
#' @param type The type of animation to use, valid values correspond to the types in \url{https://daneden.github.io/animate.css/}
#' @examples
#' \dontrun{
#'library(shiny)
#'library(shinyanimate)
#'ui <- fluidPage(
#'  withAnim(),
#'  tags$div(id = 'title', h1('ANIMATION')),
#'  actionButton(inputId = "button", label = "Animate")
#')
#'server <- function(input, output, session) {
#'  observeEvent(input$button,{
#'    startAnim(session, 'title', 'bounce')
#'  })
#'}
#'shinyApp(ui, server)
#'}
#'@seealso \code{\link{withAnim}}
#'
startAnim <- function(session, id, type = NULL){
  session$sendCustomMessage(
    type = "addClass",
    message = list(ele = id, name = type))
}
