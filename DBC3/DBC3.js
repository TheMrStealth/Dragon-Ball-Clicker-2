margin.style.display = "flex"
margin.style.flexDirection = "column"
margin.style.justifyContent = "space-between"
margin.style.alignItems = "center"

game.style.backgroundImage = "url('./DBC2images/dbc3background.png')"
game.style.backgroundSize = "cover"

let Power = 0
let SBVisibility = 0
let GAVisibility = 0

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
BaseAura.style.zIndex = "1"

BaseAura.style.visibility = false

const Goku = document.createElement("img")
Goku.src = "./DBC2images/transformations/basegoku.png"
Goku.style.width = "65vh"
Goku.style.height = "85vh"
Goku.style.zIndex = "2"

const ShopButton = document.createElement("img")
ShopButton.src ="./DBC2images/shopitems/ShopLogo.png"
ShopButton.style.position = "sticky"
ShopButton.style.width = "30vh"
ShopButton.style.left = "100rem"
ShopButton.style.bottom = "-3rem"


KaiokenIcon = document.createElement("img")
KaiokenIcon.src = "./DBC2images/shopitems/purchasetransformations/KaiokenIcon.gif"
KaiokenIcon.style.width = "20vh"
KaiokenIcon.style.position = "absolute"
KaiokenIcon.style.right = "90%"
KaiokenIcon.style.bottom = "30%"

KaiokenText = document.createElement("h1")
KaiokenText.innerHTML = "Kaioken"
KaiokenText.style.color = "white"
KaiokenText.style.position = "absolute"
KaiokenText.style.left = "2.5%"
KaiokenText.style.top = "67%"

ShopBackground = document.createElement("img")
ShopBackground.src = "./DBC2images/shopitems/ShopBackground.jpg"
ShopBackground.style.position = "absolute"
ShopBackground.style.width = "65vh"
ShopBackground.style.height = "80vh"
ShopBackground.style.visibility = "hidden"
ShopBackground.style.top = "8%"

GreatApeButton = document.createElement("img")
GreatApeButton.src = "./DBC2images/shopitems/purchasetransformations/GreatApeButton.jpg"
GreatApeButton.style.width = "20vh"
GreatApeButton.style.zIndex = "8"
GreatApeButton.style.position = "absolute"
GreatApeButton.style.left = "36%"
GreatApeButton.style.top = "11%"
GreatApeButton.style.visibility = "hidden"


const ShowAura = ()=>{
    Power++
    PowerTextNumber.innerHTML = Power

    BaseAura.style.visibility = "visible"

    setTimeout(() => {
        BaseAura.style.visibility = "hidden"
    }, 100);

}

const Upgrade = ()=>{
    
    if (SBVisibility == 0) {
        // console.log(SBVisibility)
        ShopBackground.style.visibility = "visible"
        SBVisibility++
    } else {
        ShopBackground.style.visibility = "hidden"
        SBVisibility--
    }

    if (GAVisibility == 0) {
        GreatApeButton.style.visibility = "visible"
        GAVisibility++
    } else {
        GreatApeButton.style.visibility = "hidden"
        GAVisibility--
    }

}

const GoGreatApe = ()=>{
    if (Power > 249) {
        Goku.src = "./DBC2images/transformations/gokugreatape.png"
        console.log("GoGreatApe")
    }   
}

Goku.addEventListener("click", ShowAura)
ShopButton.addEventListener("click", Upgrade)
GreatApeButton.addEventListener("click", GoGreatApe)

margin.append(PowerDiv)

innercharacter.append(Goku)
character.append(BaseAura)
margin.append(character)
character.append(innercharacter)
body.append(ShopButton)
margin.append(KaiokenIcon)
margin.append(KaiokenText)
margin.append(ShopBackground)
margin.append(GreatApeButton)


// BaseAura.style.width = "52%"
// BaseGoku.style.width = "32%"