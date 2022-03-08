const renderGameBaseBorders = (borderWidth) => {
    const body = document.getElementById("body")
    // body.style.overflow = "hidden"s


    const game = document.createElement("div")
    game.style.height = "100vh"
    game.style.width = "100%"
    game.style.margin = 0
    
    const margin = document.createElement("div")
    if(borderWidth){
        margin.style.borderStyle = "solid"
        margin.style.borderWidth = `${borderWidth}px`
    }
    
    game.append(margin)
    body.append(game)

    if(borderWidth){
        margin.style.height = `${game.clientHeight - (borderWidth*2)}px`
    }

    return {game, margin}
}

const {game, margin} = renderGameBaseBorders(0)