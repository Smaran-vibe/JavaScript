console.log("Card initiazilizing...")

const cardData = [
    {
        title: "Introduction to Backend | Zoro Web development Course Tutorial #1",
        cName: "Lost Developer",
        views: 1500000,
        monthsold: 6,
        duration: "5:32:00",
        thumbnail: "https://i.ytimg.com/vi/XsJXo6jgLa4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBagHPh2laoO1QIGh1GFAmarNlLAw"
    },
    {
        title: "How to solve the problem of person trying to code in JS",
        cName: "East Blue",
        views: 1900000,
        monthsold: 6,
        duration: "5:32:00",
        thumbnail: "https://i.ytimg.com/an_webp/F6rLBOI_9UE/mqdefault_6s.webp?du=3000&sqp=CKOM088G&rs=AOn4CLASjEKijNMbt0l3ayb45UwOWLP58A"
    },
    {
        title: "How to solve the problem of person trying to solve the problem in JS",
        cName: "Grand Line",
        views: 9600000,
        monthsold: 6,
        duration: "5:32:00",
        thumbnail: "https://i.ytimg.com/vi/mQwdNHusFLU/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFsgWyhbMA8=&rs=AOn4CLB0ZJUrmc1mfXBlp9wiPs78Mv9Jaw"
    },



]
cardData.forEach (data => {
    createCard(data.title,data.cName,data.views,data.monthsold,data.duration,data.thumbnail);
})

function createCard(title, cName, views, monthsold, duration, thumbnail) {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class ="capsule">
    <img src = ${thumbnail} alt ="" style="width:100%; height:100%; border-radius:10px;">
    <span class = "duration">
     ${duration} </span>
   
     </div>

    <div class = "content"> 

  <h3> ${title} </h3>
  <p>${cName} • ${formatViews(views)} • ${monthsold} months ago </p> 

    </div>
  
    `

    document.querySelector(".container").appendChild(card);




}

createCard("Introduction to Backend | Zoro Web development Course Tutorial #1", "Lost Developer", 3000000, "3", "10:00", "https://i.ytimg.com/an_webp/S6aT56O-40c/mqdefault_6s.webp?du=3000&sqp=CPuM088G&rs=AOn4CLDy6bSvTYfa3pUl9L9xNl3eFSBF-Q")

function formatViews(views) {
    if (typeof views !== "number") return "0";
    const suffixes = [
        { value: 1e9, symbol: 'B' },
        { value: 1e6, symbol: 'M' },
        { value: 1e3, symbol: 'K' }
    ];

    for (let suffix of suffixes) {
        if (views >= suffix.value) {
            return (views / suffix.value).toFixed(1)
                .replace(".0", "") + suffix.symbol;
        }
    }
    return views.toString();
}