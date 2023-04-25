export default async function handler(request, res) {

  console.log(request.query.search);

const weekdescription = [
  {
      "weeknumber": "1",
      "timetocomplete": "4 ",
      "headline": "Something idk",
      "description": "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.",
      "videoreadingquiztitle": "9 videos (Total 55 min). 3 reading, 1 quiz"
  },
  {
    "weeknumber": "2",
    "timetocomplete": "3 ",
    "headline": "Prompt 2",
    "description": "Do this.",
    "videoreadingquiztitle": "8 videos (Total 55 min). 5 reading, 2 quiz"
},

];
res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
res.json(weekdescription);
}
