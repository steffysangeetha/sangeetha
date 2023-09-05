
class EmployeeData
{
    emp1=
    {
        name:'Rahul',
        empid:3567,
        mailid:'mailme@gmail.com',
        Address:
        {
            'City Name':'Vijayavada',
            District:'Krishna District',
            Pin:526894,
        },
      hobbies:['Netflix','Tennis','Coding']
    };

    emp2=
    {
        name:'Ravi',
        empid:9867,
        mailid:'ravimail@gmail.com',
        Address:
        {
            'City Name':'Guntur',
            District:'Prakasham District',
            Pin:685479,
        },
      hobbies:['Reading','Swimming','Baking']
    };

    emp3=
    {
        name:'Santhosh',
        empid:8876,
        mailid:'sathoshmail@gmail.com',
        Address:
        {
            'City Name':'Warangal',
            District:'Hannamkonda District',
            Pin:996587,
        },
      hobbies:['Gym','Reading novels']
    };

    emp4=
    {
        name:'Surya',
        empid:3469,
        mailid:'suryamail@gmail.com',
        Address:
        {
            'City Name':'Nazamabed',
            District:'Nazamabad District',
            Pin:648597,
        },
      hobbies:['Badmiton','E-sports','Netflix']
    };

    emp5=
    {
        name:'Kiran',
        empid:8864,
        mailid:'kiranmail@gmail.com',
        Address:
        {
            'City Name':'Karimnagar',
            District:'Karimnagar District',
            Pin:666954,
        },
      hobbies:['Gaming','Cooking','Music']
    };
}

let empData =new EmployeeData();

 const body = document.querySelector('#body');
console.log(body);

const mainbox=document.createElement('div');
mainbox.className='mainbox';

body.appendChild(mainbox);

Object.keys(empData).map((emp,index)=>{
 const empbox=document.createElement('div');
 empbox.className=`emp ${index +1}`;

 const h2=document.createElement('h2');
 h2.innerHTML=`Name: ${empData[emp].name}`;

 const h3=document.createElement('h3');
 h3.innerHTML=`Employee Id: ${empData[emp].empid}`;

 const addBox=document.createElement('div');
 addBox.className='addressBox';

 const h32=document.createElement('h3');
 h32.innerHTML='Address:'

 addBox.appendChild(h32);

 // Object.keys(empData[emp].Address).map((add)=>
 Object.keys(empData[emp].Address).map((add,i) =>
  {
 
    const addcomp=document.createElement('p');
    addcomp.innerHTML=`<b>${add}:</b> ${Object.values(empData[emp].Address)[i]}`;
    addBox.appendChild(addcomp);
  });
 const hobbies=document.createElement('p');
 const hobheading=document.createElement('span');
 hobheading.innerHTML=`<strong> Hobbies: </strong>`;

 hobbies.appendChild(hobheading);

 empData[emp].hobbies.map((hobby,index)=>
 {
    const hobbiesLength=empData[emp].hobbies.length;
    const eachhobby=document.createElement('span')

    if(index + 1 !== hobbiesLength)
    {
        eachhobby.innerHTML=`${hobby},`;
    }
    else
    {
        eachhobby.innerHTML=`${hobby}`;
    }
    hobbies.appendChild(eachhobby);
 });

 empbox.appendChild(h2);
 empbox.appendChild(h3);
 empbox.appendChild(addBox);
 empbox.appendChild(hobbies);
 mainbox.appendChild(empbox);
});

console.log(Object.keys(empData));