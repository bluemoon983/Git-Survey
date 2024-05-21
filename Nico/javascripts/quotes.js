const quotes = [
{
    quote : "당신이 한번 포기하기 시작하면 이는 습관이 된다. 결코 포기 하지 말아라.",
    author : "\n마이클 조던",
},
{
    quote : "이겨.",
    author : "\n고졸 사토루",
},
{
    quote : "피할 수 없으면 즐겨라.",
    author : "\n로버트 엘리엇",
}
,
{
    quote : "성공을 위해서는 계획이 필요하다.",
    author : "\n윌리엄 셰익스피어",
}
,
{
    quote : "책은 세계의 보물이며, 후세와 국민들이 상속받기 알맞은 재산이다.",
    author : "\n소로",
}
,
{
    quote : "일찍 일어나는 새가 벌레를 잡는다.",
    author : "\n캠던",
}
,
{
    quote : "친구는 기쁨을 두배로 만들고 슬픔은 반으로 줄인다.",
    author : "\n실러",
}
,
{
    quote : "실패하면 반역, 성공하면 혁명 아닙니까!",
    author : "\n전두광",
}
,
{
    quote : "지나간 슬픔에 새 눈물을 낭비하지 마라.",
    author : "\n에우리피데스",
}
,
{
    quote : "고통 뒤의 즐거움은 달콤하다.",
    author : "\n존 드라이든",
}
,
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;