const renderGameBaseBorders = (borderWidth) => {
    const body = document.getElementById("body")
    
    const game = document.createElement("div")
    game.style.height = "100vh"
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

game.style.backgroundImage = "url('./DBC2images/dbc2background.png')"
game.style.backgroundSize = "cover"

const Power = document.createElement("h1")
Power.innerHTML = "Power"
Power.style.color = "white"


margin.style.display = "flex"
margin.style.flexDirection = "column"
margin.style.justifyContent = "space-between"
margin.style.alignItems = "center"

const BaseGoku = document.createElement("img")
BaseGoku.src = "./DBC2images/transformations/basegoku.png"
BaseGoku.height = 625
BaseGoku.width = 450

const BaseAura = document.createElement("img")
BaseAura.src = "./DBC2images/auras/baseaura.png"
BaseAura.height = 625
BaseAura.width = 450

margin.append(Power)
margin.append(BaseGoku)
margin.append(BaseAura)