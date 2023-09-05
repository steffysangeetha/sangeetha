


class restaurant_manager{
    restaurantlist=[
      {
        id:1,
        restaurantname:"kfc",
        address:"fairlands",
        city:"salem"
      },
      {
        id:2,
        restaurantname:"domino",
        address:"T nager",
        city:"chennai"
      },
      {
        id:3,
        restaurantname:"burger king",
        address:"five roads",
        city:"salem"
      },
      {
        id:4,
        restaurantname:"subway",
        address:"three roads",
        city:"salem"
      }
    ]
AllRestaurantNames=()=>{
    return this.restaurantlist.map((restaurant)=>restaurant.restaurantname)
}

 bycity=(cityname)=>{
    return this.restaurantlist.filter((restaurant)=>restaurant.city==cityname)
}
}
var santhosh=new  restaurant_manager();
console.log(santhosh.AllRestaurantNames());
console.log(santhosh.bycity('salem'));
console.log("");


var date=new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getTime());
console.log(date.getHours());

console.log("");
//Math objects
console.log(Math.round(23.456));
console.log(Math.ceil(45.145));
console.log(Math.floor(95.950));
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.random());














