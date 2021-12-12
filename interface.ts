interface player{
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClub?: string, 
}

const messy: player = {
    name:'L- Messy',
    club: 'Bercelona',
    salary: 12000,
    wife:'Katrina Kaif',
    previousClub: 'Real - Madrid',
}

const rubel: player ={
    name: 'Rubel-Hossain',
    club: 'Kolabagan',
    salary: 1200,
    wife: 'Un-Happy',
    previousClub: 'happy'
}


interface Employ {
    name:string,
    age: number,
    salary: number,       
    }

   interface Developer extends Employ {
       language:string,
       codeEditor: string,
       typeSpeed: number,
   } 

   const zuku: Developer = {
        name:'Mark-Zukerburg',
        age: 32,
        salary: 60000000,

        language: 'javascript',
        codeEditor:'Vs - Code',
        typeSpeed : 39
   };