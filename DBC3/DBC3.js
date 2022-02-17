const renderGameBaseBorders = (borderWidth) => {
    const body = document.getElementById("body")
    // body.style.overflow = "hidden"


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

margin.style.display = "flex"
margin.style.flexDirection = "column"
margin.style.justifyContent = "space-between"
margin.style.alignItems = "center"

game.style.backgroundImage = "url('./DBC2images/dbc3background.png')"
game.style.backgroundSize = "cover"

const Power = document.createElement("h1")
Power.innerHTML = "Power:"
Power.style.color = "white"
Power.style.alignSelf = "start"
Power.style.flex ="1 1"

const BaseAura = document.createElement("img")
BaseAura.src = "./DBC2images/auras/baseaura.png"
BaseAura.style.flex = "1 1"
BaseAura.style.position ="relative"

BaseAura.style.visibility = false

const BaseGoku = document.createElement("img")
BaseGoku.src = "./DBC2images/transformations/basegoku.png"
BaseGoku.style.flex = "1 1"
// BaseGoku.style.width =" 400px"




const ShowAura = ()=>{
    console.log("ClickedGoku")
    // BaseAura.style.visibility = true;
    
    // BaseAura.style.visibility = false;
}


BaseGoku.addEventListener("click", ShowAura)

margin.append(Power)

margin.append(BaseGoku)
margin.append(BaseAura)


BaseAura.style.width = "52%"
BaseGoku.style.width = "32%"