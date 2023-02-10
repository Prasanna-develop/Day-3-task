1.JSON iterate over all for loops(for,for in,for of,forEach);

//for loop method
var a=[{"name":"prasanna","age":"22"},{"name":"shritharan","age":"19"}]
       
for(var i=0;i<a.length;i++){
    console.log(a[i].name,a[i].age)
}

//for in loop method
var employ={
    "name":"prasanna",
    "age" :"22",
    "gender":"male",
}

for(var b in employ){
console.log(b,employ[b]);
}

//for of lopp method
var cities=["chennai","madurai","coimbatore","tiruchy"]
for(var c of cities){
    console.log(c);
}

//for each loop method
var number=[1,2,3,4,5]
number.forEach(function(number){
console.log(number);
});

2.My resume data in JSON format

var prasanna = {
        "name":"prasanna",
        "email":"prasanna10141619@gmail.com",
        "location":{
            "address":"2/179,Mela Theru,Thenur,Samayanallur via,Madurai district",
            "state":"Tamil Nadu",
            "postal code":"625402",
            "country":"india"
        },
    "Work":[{
        "name":"Madurai distict minor millet former producr com ltd",
        "position":"CEO",
        "startDate":"19-02-2020",
        "endDate":"19-02-2022",
}],
"eduction":[{
    "institution":"GUVI",
    "area":"Full stack developer",
}],
"skills":[{
    "name":"Web Development",
    "keywords":["HTML","CSS","JAVASCRIPT"],
}],
"Language":[{
    "language":"English,Tamil",
}],
}
console.log(prasanna);

3.Read about the difference between window,screen,document in javascript

window: The window object represents the current web browser window, and it's the global object in the browser's JavaScript environment.

document: The document object represents the HTML document currently being displayed in the web browser window.

screen: The screen object represents the user's screen and provides information about the screen's size, color depth, and other properties.
