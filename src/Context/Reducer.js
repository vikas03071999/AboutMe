export const ActiveClassReducer = (state,action) => {
    switch(action.type){
        case "ACTIVATE_HOME": return{
            activeClass: "Home"
        }
        case "ACTIVATE_ABOUT": return{
            activeClass: "About"
        }
        case "ACTIVATE_WHATIDO": return{
            activeClass: "What I Do"
        }
        case "ACTIVATE_RESUME": return{
            activeClass: "Resume"
        }
        case "ACTIVATE_PORTFOLIO": return{
            activeClass: "Portfolio"
        }
        case "ACTIVATE_CONTACT": return{
            activeClass: "Contact"
        }
        default: {
            return state
        }
    }
}