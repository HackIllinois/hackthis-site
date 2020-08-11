import mentalHealth from 'assets/resources/document-previews/Mental Health Resource Guide.png';
import general from 'assets/resources/document-previews/General Resources UIUC.png';
import covid19 from 'assets/resources/document-previews/COVID-19 Tips.png';
import dataScience from 'assets/resources/document-previews/Data Science Challenge.png';
import webDev from 'assets/resources/document-previews/Web Dev Challenge.png';
import sharkTank from 'assets/resources/document-previews/Shark Tank Challenge.png';
import hackerGuide from 'assets/resources/document-previews/Hacker Guide.png';
import fridayEvent from 'assets/resources/document-previews/Friday Event Form.png';

export default [
  {
    "name": "General", 
    "resources": [
      {
        "title": "Hacker Guide",
        "link": "https://go.hackillinois.org/hacker-guide",
        "preview": hackerGuide,
      },
      {
        "title": "Friday Event Form",
        "link": "https://go.hackillinois.org/mini-event-poll",
        "preview": fridayEvent,
      },
    ]
  },
  {
    "name": "Health and Wellness",
    "resources": [
      {
        "title": "Mental Health Guide",
        "link": "https://drive.google.com/file/d/1acxZXKaN95iAw7y-fwZcaSfori7Sftvu/view?usp=sharing",
        "preview": mentalHealth
      },
      {
        "title": "General Resources at UIUC",
        "link": "https://drive.google.com/file/d/14FyfOnwRq184-VeLD0fozHveVcQO0uF0/view?usp=sharing",
        "preview": general
      },
      {
        "title": "COVID-19 Tips",
        "link": "https://drive.google.com/file/d/1TrtfkqasJqPvmigxeA7dJqjrlU8xheJc/view?usp=sharing",
        "preview": covid19
      }
    ]
  },
  {
    "name": "Challenges",
    "resources": [
      {
        "title": "Web Dev Challenge",
        "link": "https://go.hackillinois.org/web-dev-challenge",
        "preview": webDev,
      },
      {
        "title": "Data Science Challenge",
        "link": "https://go.hackillinois.org/data-science-challenge",
        "preview": dataScience,
      },
      {
        "title": "Shark Tank Challenge",
        "link": "https://go.hackillinois.org/shark-tank-challenge",
        "preview": sharkTank,
      }
    ]
  },
];