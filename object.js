const student={
    name: "Tamim Iqbal",
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Musfiq','Riyad','Mash'],
    movies: [
        {
            name: 'DDLJ',
            year: 2011,
        }
    ],
    act: function(){
        console.log("Acting like Sakib khan");
    },
    car:{
        brand: 'Tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon mask',
            countery: 'USA'
        }
    }
}
//Calling the function which is an Element of an Object
student.act();