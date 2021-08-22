const state = {friends : []};
export function manageFriends(state, action) {
  //your code here
  
  switch (action.type){
    case "friends/add" :
      return {friends : [...state.friends,action.payload]};
      case "friends/remove" :
        let updatedFriends = state.friends.filter((item)=> item.id != action.payload)
        return {friends : updatedFriends}
        default : return state
  }
}
manageFriends(state,{
  type: "friends/add",
  payload: {
    name: "Chrome Boi",
    homewtown: "NYC",
    id: 1
  }
} )
manageFriends(state,{
  type: "friends/remove",
  payload: 1,
} )