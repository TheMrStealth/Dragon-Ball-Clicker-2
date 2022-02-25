margin.style.display = "flex"
margin.style.flexDirection = "column"
margin.style.justifyContent = "space-between"
margin.style.alignItems = "center"

game.style.backgroundImage = "url('./DBC2images/dbc3background.png')"
game.style.backgroundSize = "cover"

let Power = 0

const PowerText = document.createElement("h1")
PowerText.innerHTML = "Power: "
PowerText.style.color = "white"
PowerText.style.flex ="1 1"

const PowerTextNumber = document.createElement("h1")
PowerTextNumber.innerHTML = Power
PowerTextNumber.style.color = "white"
PowerTextNumber.style.flex ="1 1"
// PowerTextNumber.style.left = "1%"

const PowerDiv = document.createElement("div")
PowerDiv.style.alignSelf = "start"
PowerDiv.style.display = "flex"
PowerDiv.style.flex = "1 1"
PowerDiv.style.width = "18vh"

PowerDiv.append(PowerText)
PowerDiv.append(PowerTextNumber)

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
    Power++
    PowerTextNumber.innerHTML = Power
    if (Power > 249) {
        BaseGoku.src = "./DBC2images/transformations/gokugreatape.png"
        console.log("GoGreatApe")
    }
    BaseAura.style.visibility = "visible";

    setTimeout(() => {
        BaseAura.style.visibility = "hidden";
    }, 100);

}


BaseGoku.addEventListener("click", ShowAura)

margin.append(PowerDiv)

innercharacter.append(BaseGoku)
character.append(BaseAura)
margin.append(character)
character.append(innercharacter)


// BaseAura.style.width = "52%"
// BaseGoku.style.width = "32%"