export function managePresents(state, action) {
  // your code heer
  state = {numberOfPresents : 0}
  switch (action.type){
    case "presents/increase" :
      return {numberOfPresents : state.numberOfPresents + 1};
      default : return state;
  }
}

managePresents({numberOfPresents:0},{
  type: "presents/increase",
} )
