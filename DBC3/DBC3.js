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


const character = document.createElement("div")
character.style.zIndex = "0"
character.style.position = "absolute"
character.style.bottom = "0%"
character.style.left = "29.5%"
// character.style.width = "800px"
// character.style.height = "800px"

const innercharacter = document.createElement("div")
innercharacter.style.position = "absolute"
innercharacter.style.bottom = "6%"
innercharacter.style.left = "11%"

const BaseAura = document.createElement("img")
BaseAura.src = "./DBC2images/auras/baseaura.png"
BaseAura.style.width = "75vh"
BaseAura.style.height = "95vh"
BaseAura.style.visibility = "hidden"

BaseAura.style.visibility = false

const BaseGoku = document.createElement("img")
BaseGoku.src = "./DBC2images/transformations/basegoku.png"
BaseGoku.style.width = "65vh"
BaseGoku.style.height = "85vh"



const ShowAura = ()=>{
    console.log("ClickedGoku")
    BaseAura.style.visibility = "visible";

    setTimeout(() => {
        BaseAura.style.visibility = "hidden";
    }, 100);

}


BaseGoku.addEventListener("click", ShowAura)

margin.append(Power)

innercharacter.append(BaseGoku)
character.append(BaseAura)
margin.append(character)
character.append(innercharacter)


// BaseAura.style.width = "52%"
// BaseGoku.style.width = "32%"