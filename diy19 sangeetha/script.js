let x=10;
let y=20;
if(x>y){
    console.log('x is grater than y');
}else
    console.log('y is greater than x');

    let z='one';
    switch(z){
        case 'one':
            console.log('hello from case one');
            break;
        case 'two':
            console.log( 'hello from case two');
            break;
        case 'three':
            console.log( 'hello from case three');
        default:
            console.log('none of the case is satisfied');        
    }
    let k=1;
    let sum=0;
    while(k<=10){
    sum=sum+10;
    k+=1;
}
   console.log(sum);
   for(let i=0;i<5; i++){
    console.log('welcome to edureka');
   }


const newobj = [{
    
        id:1,
        order: 'below 500',
        'order percentage': '10,05',
        reasturant: ' hotel lakshmi',
    },

    {
    
        id:2,
        order: ' 500-1000',
        'order percentage': '14.57',
        reasturant: 'hotel lakshmi',
    },
    {
    
        id:3,
        order: '1000-1500',
        'order percentage': '15.08',
        reasturant: 'hotel lakshmi',
    },
    {
    
        id:4,
        order: ' 1500-2000',
        'order percentage': '22.11',
        reasturant: 'hotel lakshmi',
    },
    {
    
        id:5,
        order: ' 2000-2500',
        'order percentage': '30.19',
        reasturant: 'hotel lakshmi',
    }
];
for(let obj of newobj) {
    console.log(obj['order percentage']);
}
