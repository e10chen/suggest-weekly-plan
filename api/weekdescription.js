export default async function handler(request, res) {

const weekdescription = [
  {
    "headline": "Introduction to Cyber Security",
    "description":
      "This module provides exposure to basic cyber security concepts including some simple, foundational attack methods.",
    "videos": [
      {
        "Title": "Introduction: What You Will Learn from This Course on Cyber Security",
        "Duration": 1
      },
      {
        "Title": "Assignments and Reading",
        "Duration": 2
      },
      {
        "Title": "Hacking an Old-Fashioned Soda Machine",
        "Duration": 4
    },
    {
        "Title": "Simple Worm Program",
        "Duration": 4
    },
    {
      "Title": "Trojan Horse Login Program",
      "Duration": 7
    },
    {
    "Title": "Malicious Compiler Program",
    "Duration": 8
    },
    {
      "Title": "Typical Unix Kernel Attack",
      "Duration": 6
    },
    {
      "Title": "Explaining Interview Series",
      "Duration": 1
    }],
    "readings": [
      {
          "Title": "Required: Smashing the Stack for FUn and Profit, Aleph One",
          "Duration": 30
      },
      {
        "Title": "Required: Reflections on Trusting Trust, Ken Thompson",
        "Duration": 30
      },
      {
        "Title": "DEF CON 23",
        "Duration": 46
      },
      {
      "Title": "Kevin Mitnick | Talks at Google",
      "Duration": 52
      },
      {
        "Title": "Suggested: Introudction to Cyber Security (CH. 1-2)",
        "Duration": 30
      },
      {
        "Title": "Suggested: TCP/IP Illustration Volume 1 (2nd Ed.), (CH. 1-2)",
        "Duration": 30
      }
    ],
    "quizzes": [
      {
            "Title": "Module 1 Quiz",
            "Duration": 30
      }]
  },
  {
    "headline": "Understanding Basic Security Frameworks",
    "description": "This module introduces some fundamental frameworks, models, and approaches to cyber security including the CIA model.",
    "videos": [
      {
      "Title": "Assignments and Reading",
      "Duration": 2
      },
      {
      "Title": "Purpose of Cyber Security",
      "Duration": 4
      },
      {
        "Title": "Adversay Types",
        "Duration": 7
      },
      {
        "Title": "Vulnerability Types",
        "Duration": 5
      },
      {
        "Title": "Threat Types",
        "Duration": 5
      },
      {
        "Title": "Confidentiality Threat",
        "Duration": 6
      },
      {
        "Title": "Integrity Threat",
        "Duration": 6
      },
      {
        "Title": "Availability Threat",
        "Duration": 5
      },
      {
        "Title": "Fraud Threat",
        "Duration": 5
      },
      {
        "Title": "Testing for Vultnerabilities",
        "Duration": 4
      },
      {
        "Title": "Attacks",
        "Duration": 4
      },
      {
        "Title": "Brute Force vs. Hueristic Attacks",
        "Duration": 3
      },
      {
        "Title": "Crytanalysis",
        "Duration": 5
      },
      {
        "Title": "Crytanalyzing Caesar Cipher",
        "Duration": 4
      },
    ],
    "readings": [
      {
        "Title": "Required: “Why Cryptosystems Fail,” Ross Anderson",
        "Duration": 30
      },
      {
        "Title": "Required: “There Be Dragons,” Steve Bellovin",
        "Duration": 30
      },
      {
        "Title": "Suggested: Introduction to Cyber Security, (Ch. 3 - 4)",
        "Duration": 30
      },
      {
        "Title": "Suggested: TCP/IP Illustrated Volume 1 (2nd Ed.), (Ch. 3 - 4)",
        "Duration": 30
      }
      ],
      "quizzes": [
      {
          "Title": "Matching Quiz",
          "Duration": 30
      },
      {
          "Title": "Further Consideration - Fraud",
          "Duration": 30
      },
      {
        "Title": "Module 2 Quiz",
        "Duration": 30
      },
    ]
  },
  {
    "headline": "Examining Cyber Threats More Closely",
    "description": "This module covers some of the more intense attacks over the past decade including worms and DDOS attacks.",
    "videos": [
      {
      "Title": "Assignments and Reading",
      "Duration": 3
      },
      {
        "Title": "SQL/ Slammer Worm of 2003",
        "Duration": 4
      },
      {
        "Title": "Nachi Worm of 2003",
        "Duration": 9
      },
      {
        "Title": "Botnet Design",
        "Duration": 12
      },
      {
        "Title": "Botnet Arithmetic",
        "Duration": 10
      },
      {
        "Title": "Welcome Elad Yoran",
        "Duration": 11
      },
      {
        "Title": "Assets and Infrastructure",
        "Duration": 8
      },
      {
        "Title": "Calculating Risk",
        "Duration": 8
      },
      {
        "Title": "Making Security and Cost Decisions Based on Risk",
        "Duration": 5
      },
      {
        "Title": "Threat Trees and Completeness of Analysis",
        "Duration": 6
      }
    ],
    "readings": [
      {
        "Title": "Required: “Hackers Remotely Kill a Jeep on the Highway with Me in It,” Andy Greenberg, Wired Magazine",
        "Duration": 10
      },
      {
       "Title": "Required: “A Hacker's Evolution: Austin's HD Moore Grew Up with Cybersecurity Industry,” 512 Tech",
        "Duration": 10
      },
      {
      "Title": "Suggested: Introduction to Cyber Security (Ch. 5 - 6)",
      "Duration": 30
      },
      {
        "Title": "Suggested: TCP/IP Illustrated Volume 1 (2nd Edition), (Ch. 5 - 6)",
        "Duration": 30
      },
    ],
    "quizzes": [
      {
        "Title": "Further Consideration - Threat Tress",
        "Duration": 30
      },
      {
        "Title": "Module 3 Quiz",
        "Duration": 30
      }]
  },
  {
    "headline": "Introducing Security Risk Analysis",
    "description": "This module introduces basic engineering and analysis methods for managing cyber security risk to valued assets.",
    "videos": [{
      "Title": "Assignments and Reading",
      "Duration": 3
      },
      {
        "Title": "Mapping Assets to Threats",
        "Duration": 7
      },
      {
        "Title": "Estimating Risk for Threat-Asset Pairs",
        "Duration": 5
      },
      {
        "Title": "Example Case Study Matrix (Part 1)",
        "Duration": 8
      },
      {
        "Title": "Example Case Study Matrix (Part 2)",
        "Duration": 9
      },
      {
        "Title": "Example Case Study Matrix (Part 3)",
        "Duration": 7
      },
      {
        "Title": "Mapping Assets, Threats, Vulnerabilities, and Attacks",
        "Duration": 5
      },
      {
        "Title": "Welcome Nasir Memon",
        "Duration": 14
      },
     ],
    "readings": [
      {
        "Title": "Required: “A Man-in-the-Middle Attack on UMTS,” Meyer and Wetzel",
        "Duration": 10
      },
      {
        "Title": "Required: “Are Computer Hacker Break-Ins Ethical?” Eugene Spafford",
        "Duration": 10
      },
      {
        "Title": "Suggested: Introduction to Cyber Security, (Ch. 7 - 8)",
        "Duration": 30
      },
      {
        "Title": "Suggested: TCP/IP Illustrated Volume 1 (2nd Ed.), (Ch. 7 - 8)",
        "Duration": 30
      },
      {
        "Title": "Project Description",
        "Duration": 10
      },
      {
        "Title": "Adiitional Self-Learning Opportunities",
        "Duration": 10
      }
    ],
    "quizzes": [
      {
          "Title": "Module 4 Quiz",
          "Duration": 30
      },
      {
          "Title": "Final Quiz - What level of security risk do you estimate for the following threat-asset matrix entries for the ACME Software Company",
          "Duration": 30
      }]
  },
  {
    "headline": "Welcome and Course Overview",
    "description": "Checkout our marquee speaker. She's the Chief Privacy Officer at Coca Cola.",
    "videos": [{
        "Title": "Welcome to 'Cybersecurity and Its Ten Domains'",
        "Duration": 1
    },
    {
      "Title": "The Importance of Cybersecurity",
      "Duration": 1
    }],
    "readings": [
      {
        "Title": "Welcome to the Course",
        "Duration": 10
      },
      {
        "Title": "Meet the Instructor",
        "Duration": 10
      },
      {
        "Title": "Course Objectives",
        "Duration": 10
      }],
    "quizzes": [
      {
       "Title": "Test Your Existing Knowledge",
        "Duration": 30
      }]
  },
  {
    "headline": "Introduction to Security, Access Control, and Software Development Security",
    "description": "In this module we cover some of the fundamentals of security that will assist you throughout the course. We will then introduce you to two domains of cyber security: access control and software development security. Focus will be on areas such as confidentiality, integrity, and availability, as well secure software development techniques.",
    "videos": [
  {
      "Title": "Module Overview",
      "Duration": 1
  },
  {
    "Title": "Introduction to Security",
    "Duration": 3
  },
  {
    "Title": "Access Control",
    "Duration": 2
  },
  {
  "Title": "Software Development Security",
  "Duration": 3
  }],
    "readings": [
      {
        "Title": "Module Readings",
        "Duration": 190
      }],
    "quizzes": [
      {
        "Title": "Introduction to Security, Access Control, and Software Development Security Quiz",
        "Duration": 30
      }]
  },
  {
    "headline": "Business Continuity and Disaster Recovery Planning and Cryptography",
    "description": "In this module we are going to delve a little deeper into cyber security by covering business continuity and disaster recovery planning and cryptography. Learners will be exposed to what a disruptive event is and how the federal government through agencies such as FEMA handles disasters. We will also covers encryption and decryption and the various techniques used.",
    "videos": [
  {
      "Title": "Module Overview",
      "Duration": 1
  },
  {
    "Title": "Business Continuity and Disaster Recovery Planning",
    "Duration": 2
  },
  {
    "Title": "Cryptography",
    "Duration": 1
  }],
    "readings": [
      {
        "Title": "Module Readings",
        "Duration": 240
      }],
    "quizzes": [
      {
        "Title": "Business Continuity and Disaster Recovery Planning and Cryptography Quiz",
        "Duration": 30
      }]
  },
  {
    "headline": "Information Security Governance and Risk Management & Legal, Regulations, Investigations, and Compliance",
    "description": "In this module we are going to cover some of the non-technical topics associated to cyber security: Information security governance and risk management and legal, regulations, investigations, and compliance. It is important to realize, that non-technical does not mean easy, or not important. In fact, I would like to argue that they are more important that the technical side of cyber security.",
    "videos": [
  {
      "Title": "Module Overview",
      "Duration": 1
  },
  {
    "Title": "Information Security Governance and Risk Management",
    "Duration": 1
  },
  {
    "Title": "Legal, Regulations, Investigations, and Compliance",
    "Duration": 2
  }],
    "readings": [
      {
        "Title": "Module Readings",
        "Duration": 240
      }],
    "quizzes": [
      {
        "Title": "Information Security Governance and Risk Management & Legal, Regulations, Investigations, and Compliance Quiz",
        "Duration": 30
      }]
  }
];

res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
res.json(weekdescription);
}
