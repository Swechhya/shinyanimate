.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(prefix = "assets",directoryPath = system.file("assets",package="shinyanimate"))

  shiny::tagList(
    shiny::singleton(
      shiny::tags$head(shiny::tags$link(rel="stylesheet",href="assets/animate.min.css"))
    ),
    shiny::singleton(
      shiny::tags$script(src="assets/addClass.js")
    ),
    shiny::singleton(
      shiny::tags$script(src="assets/scrollAnimation.js")
    )
  )


}
