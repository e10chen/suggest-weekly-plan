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
  },
  {
    "headline": "Introduction to Python",
    "description": "Programming now has relevance well beyond just Computer Science. In this module and throughout this course, you will learn not only about programming using Python, but also how to use those skills to solve real, complex problems in future classes, at work, or elsewhere. To ensure this, copious amounts of examples are included, with explanations, throughout the course. You are strongly encouraged not only trace through them, but also experiment with (run, alter, break) them on your own. The assignments are linked to the respective module. Putting time in here will give you the opportunity to solve actual scientific problems and challenge you in a way that that will not only help you make use of the skills we will discuss in lecture, but also to leave you with that oh-so-satisfying feeling of having conquered the challenge when you are done!.",
    "videos": [
  {
      "Title": "Introduction to Python",
      "Duration": 15
  },
  {
    "Title": "Working with SymPy",
    "Duration": 8
  }],
    "readings": [
      {
        "Title": "Options for Using Python",
        "Duration": 10
      },
      {
        "Title": "Data Types and Variables in Python",
        "Duration": 10
      },
      {
        "Title": "Operators and Expressions in Python",
        "Duration": 10
      },
      {
        "Title": "SymPy Basics",
        "Duration": 10
      }
    ],
    "quizzes": [
      {
        "Title": "Introduction to Python and SymPy",
        "Duration": 30
      }]
  },
  {
    "headline": "Functions",
    "description": "Functions arise whenever one quantity depends on another. Mathematically speaking, a function is a rule that assigns to each element x in a set D (called the domain) exactly one element, called f(x), in a set called the range. Because we continually make theories about dependencies between quantities in nature and society, functions are important tools in the construction of mathematical models. In this module, we will learn the theory of functions, see many examples and their graphs, as well as apply these functions. We will learn how to implement these functions in Python as well.",
    "videos": [
  {
      "Title": "Theory: Functions",
      "Duration": 13
  },
  {
    "Title": "Theory: More about Functions",
    "Duration": 18
  },
  {
    "Title": "Theory: Graphing and Composition",
    "Duration": 12
  },
  {
    "Title": "Python: Graphing Functions",
    "Duration": 7
  },
  {
    "Title": "Python: Interactive Quadratic Calculator",
    "Duration": 9
  },
  {
    "Title": "Theory: Exponential Functions",
    "Duration": 21
  },
  {
    "Title": "Theory: Logarithmic Functions",
    "Duration": 14
  },
  {
    "Title": "Theory: The Natural Logarithm",
    "Duration": 16
  },
  {
    "Title": "Python: Exponentials and Logarithms",
    "Duration": 8
  }
],
    "readings": [
      {
        "Title": "Functions and Linear Functions",
        "Duration": 10
      },
      {
        "Title": "Functions in Python",
        "Duration": 10
      },
      {
        "Title": "Sample Problems - Introduction to Functions",
        "Duration": 10
      },
      {
        "Title": "Exponential and Logarithmic Functions",
        "Duration": 10
      },
      {
        "Title": "Exponents and Logarithms in SymPy",
        "Duration": 10
      },
      {
        "Title": "Solving Equations in SymPy",
        "Duration": 10
      },
      {
        "Title": "Sample Problems - Exponential and Logarithmic Functions",
        "Duration": 10
      }],
    "quizzes": [
      {
        "Title": "Introduction to Functions",
        "Duration": 30
      },
      {
        "Title": "Exponential and Logarithmic Functions",
        "Duration": 30
      }]
  },
  {
    "headline": "Rates of Change and the Derivative",
    "description": "Calculus is the science of measuring change. Early in its history, its tools were developed to solve problems involving the position, velocity, and acceleration of moving objects. Prior to the development of calculus, there was no way to express this change in a variable. In this section, we introduce the notion of limits to develop the derivative of a function. The derivative, commonly denoted as f'(x), will measure the instantaneous rate of change of a function at a certain point x = a. This number f'(a), when defined, will be graphically represented as the slope of the tangent line to a curve. We will see in this module how to find limits and derivatives both analytically and using Python.",
    "videos": [
  {
      "Title": "Theory: Introduction to Limits",
      "Duration": 19
  },
  {
    "Title": "Theory: Limits Involving Infinity",
    "Duration": 16
  },
  {
    "Title": "Theory: One-Sided Limits",
    "Duration": 14
  },
  {
    "Title": "Examples to Find Limits",
    "Duration": 16
  },
  {
    "Title": "Python: Finding Limits",
    "Duration": 7
  },
  {
    "Title": "Theory: Derivatives",
    "Duration": 17
  },
  {
    "Title": "Examples: Finding Derivatives using Limits",
    "Duration": 16
  },
  {
    "Title": "Theory: Using Limits to Find the Slope of the Tangent Line",
    "Duration": 13
  },
  {
    "Title": "Theory: Higher Derivatives",
    "Duration": 15
  },
  {
    "Title": "Theory: The Derivative as a Function",
    "Duration": 15
  },
  {
    "Title": "Python: Finding Derivatives using Sympy",
    "Duration": 8
  }
],
    "readings": [
      {
        "Title": "Lists and Tuples in Python",
        "Duration": 10
      },
      {
        "Title": "Limits and Rates of Change",
        "Duration": 10
      },
      {
        "Title": "Limits and Rates of Change in SymPy",
        "Duration": 10
      },
      {
        "Title": "Sample Problems - Limits and Rates of Change",
        "Duration": 10
      },
      {
        "Title": "The Derivative",
        "Duration": 10
      },
      {
        "Title": "Derivatives in SymPy",
        "Duration": 10
      },
      {
        "Title": "Sample Problems - The Derivative",
        "Duration": 10
      }],
    "quizzes": [
      {
        "Title": "Limits and Rates of Change",
        "Duration": 30
      },
      {
        "Title": "The Derivative",
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
