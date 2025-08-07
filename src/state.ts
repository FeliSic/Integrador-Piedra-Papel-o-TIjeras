const savedPoints = JSON.parse(localStorage.getItem('Puntos') || '{}')
export const state = {
  data:{
    Points: savedPoints,
  },
  listeners: [],
  getState(){
    return this.data
  },
  setState(newState){
    this.data = newState
    this.listeners.forEach(callback => callback(this.data))
  },
    subscribe(callback){
    this.listeners.push(callback)
  }
}