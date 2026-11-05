// FAQ content for the central FAQ page, grouped by service category.
// Source: "IWTIW FAQ Content by Page", approved by Dr Jill, 3 November 2026.
//
// Two answers are intentionally HELD OUT of this file pending Dr Jill's decision:
//   1. Virtual Counseling - "How Long Is One Counseling Session?" (session length,
//      three source versions disagree on minutes).
//   2. The TeleVet add-on prescribing clause inside "Add-On Services" (contradicts
//      the TeleVet page answer that vets cannot prescribe). The TeleVet add-on
//      bullet is included WITHOUT the prescribing clause until resolved.
// GLP-1 / Semaglutide content was removed entirely at Dr Jill's request.
//
// Block types supported by the renderer:
//   { type: "p", text, lead? }            paragraph, optional bold lead sentence
//   { type: "ul", items: [str | {b,t}] }  bullet list
//   { type: "ol", items: [str | {b,t}] }  numbered list
//   { type: "table", headers, rows, notes? }

export const faqCategories = [
  {
    id: "general-medicine",
    label: "GENERAL MEDICINE",
    questions: [
      {
        q: "Is iWILL 'til i'mWELL an insurance company?",
        blocks: [
          {
            type: "p",
            lead: "iWILL 'til i'mWELL is not an insurance company.",
            text: "Clinical services are provided by licensed healthcare providers through medical, mental health, and pet care health practices affiliated with iWILL 'til i'mWELL and other network providers. Please note, this plan is not insurance and is not intended to replace health insurance. Additional or different telehealth requirements may apply in certain states.",
          },
        ],
      },
      {
        q: "What is Telemedicine?",
        blocks: [
          {
            type: "p",
            text: "An online doctor visit through iWILL 'til i'mWELL is an affordable and convenient way to address routine medical issues. It allows you to consult with a licensed healthcare provider remotely through secure technology. With iWILL 'til i'mWELL, you can connect face-to-face with a doctor via smartphone, desktop, or telephone - without leaving your home. These virtual visits enable providers to listen, observe, and engage with you to diagnose health concerns and create personalized, effective treatment plans.",
          },
        ],
      },
      {
        q: "What is an Online Doctor Visit?",
        blocks: [
          {
            type: "p",
            text: "An online doctor visit through iWILL 'til i'mWELL allows you to consult with a licensed healthcare provider remotely through secure technology. It is an affordable and convenient way to address routine medical issues. With iWILL 'til i'mWELL, you can connect face-to-face with a doctor via smartphone, desktop, or telephone - without leaving your home. These virtual visits enable providers to listen, observe, and engage with you to diagnose health concerns and create personalized, effective treatment plans.",
          },
        ],
      },
      {
        q: "What Conditions Can Be Treated via Telemedicine?",
        blocks: [
          {
            type: "p",
            text: "Telemedicine is intended for non-emergency medical concerns. If you are experiencing a medical emergency, please call 911 immediately.",
          },
          {
            type: "p",
            lead: "Please Note:",
            text: "Our physicians do not treat newborns or children under two (2) years of age.",
          },
          {
            type: "p",
            text: "Common conditions treated through iWILL 'til i'mWELL include, but are not limited to:",
          },
          {
            type: "ul",
            items: [
              "Allergies",
              "Bronchitis",
              "Cold & Flu Symptoms",
              "Ear Infections",
              "Eye Infections",
              "Fever",
              "Headaches",
              "Heartburn",
              "Nausea & Vomiting",
              "Rashes, Skin Infections, Minor Wounds",
              "Sinus Infections",
              "Sore Throat",
              "Stomachaches & Diarrhea",
              "Upper Respiratory Infections",
              "Urinary Tract Infections (UTIs)",
              "Yeast Infections",
            ],
          },
          {
            type: "p",
            text: "Our care team can help determine if your condition is appropriate for a telemedicine visit.",
          },
        ],
      },
      {
        q: "Can I Add My Spouse and Children to My Account?",
        blocks: [
          {
            type: "p",
            text: "Yes. If you purchased the Family Package, you can add your spouse and children to your account. For privacy and compliance reasons:",
          },
          {
            type: "ul",
            items: [
              "Each adult (18+) must create their own individual account.",
              "Children under 18 can be added to a parent or legal guardian's account.",
            ],
          },
          {
            type: "p",
            lead: "Important Note:",
            text: "If you're having a phone-only (telephonic) visit, stricter regulations may apply. In some states, a video visit may be required to receive a prescription.",
          },
        ],
      },
      {
        q: "Can My Kids See a Doctor Through iWILL 'til i'mWELL?",
        blocks: [
          {
            type: "p",
            text: "Yes! Children under the age of 18 can be added to a parent or legal guardian's iWILL 'til i'mWELL account and are eligible for care.",
          },
          {
            type: "p",
            lead: "Important Note:",
            text: "Children under 2 years of age cannot be treated via telemedicine and should be seen by their pediatrician in person.",
          },
        ],
      },
      {
        q: "What If I Don't Have Health Insurance?",
        blocks: [
          {
            type: "p",
            text: "No insurance? No problem. All of iWILL 'til i'mWELL services are available without health insurance. You can access quality care at an affordable flat rate.",
          },
          {
            type: "p",
            lead: "Important Note:",
            text: "While visits are included with your membership, you are responsible for the cost of any prescriptions or prescription refills, which may vary by pharmacy.",
          },
        ],
      },
      {
        q: "Is My Online Visit Private and Secure?",
        blocks: [
          {
            type: "p",
            text: "Absolutely. At iWILL 'til i'mWELL, protecting your privacy is our top priority. Our platform is designed to be private, secure, and fully HIPAA-compliant, ensuring that your personal health information stays confidential.",
          },
          {
            type: "p",
            text: "We take privacy seriously, and our Code of Ethics guarantees that your sessions are completely confidential.",
          },
        ],
      },
      {
        q: "Do You Provide Telemedicine in Every State?",
        blocks: [
          {
            type: "p",
            text: "Yes. iWILL 'til i'mWELL provides telemedicine and video consultations in all 50 states, in compliance with HIPAA and state-specific telehealth regulations. Some states have unique requirements:",
          },
          {
            type: "ul",
            items: [
              "Arkansas requires the initial consultation to be conducted via video. Follow-up visits may be done by phone if clinically appropriate.",
              "Delaware and Idaho require all telemedicine consultations to be conducted via real-time video. Audio-only visits are not permitted.",
            ],
          },
          {
            type: "p",
            text: "You can also see a doctor while travelling or in another state. Just select your current state under My Location and you will be matched with providers licensed to treat you there. If you are using the app, you can enable mobile geolocation to update your location automatically, making it easy to find care whether you are at home or on the go.",
          },
          {
            type: "p",
            text: "Our platform only connects you with providers licensed in the state where you are located at the time of your visit.",
          },
        ],
      },
      {
        q: "Do You Provide Consults Outside the United States?",
        blocks: [
          {
            type: "p",
            text: "No, iWILL 'til i'mWELL does not currently offer consultations outside the United States. Our services are only available to individuals located within the U.S. at the time of their visit.",
          },
        ],
      },
      {
        q: "What Should I Do If I Am Experiencing a Medical Emergency?",
        blocks: [
          {
            type: "p",
            text: "If you believe you are experiencing a medical emergency, do not use iWILL 'til i'mWELL. Instead, call 911 immediately or go to the nearest emergency room. iWILL 'til i'mWELL is not appropriate for individuals experiencing serious or life-threatening conditions, including but not limited to:",
          },
          {
            type: "ul",
            items: [
              "Seizures",
              "Chest pain",
              "Stroke-like symptoms (e.g., sudden numbness, confusion, difficulty speaking)",
              "Difficulty breathing",
              "Loss of consciousness or severe dizziness",
              "Sudden or severe bleeding",
              "Choking or gagging",
              "Head injuries",
              "Suspected broken bones",
            ],
          },
          {
            type: "p",
            text: "If you are experiencing any of the above symptoms - or have another urgent medical concern - please call 911 or seek emergency medical care right away.",
          },
        ],
      },
      {
        q: "Can Medical Forms (Like Sick Slips) Be Filled Out?",
        blocks: [
          {
            type: "p",
            text: "Yes. Doctors at iWILL 'til i'mWELL can provide basic documentation, such as sick slips and return-to-work or return-to-school notes. These are issued when clinically appropriate, so be sure to request them before your visit ends.",
          },
          {
            type: "p",
            lead: "Please note:",
            text: "Our providers cannot complete more complex forms that require in-person evaluation, including FMLA paperwork, disability forms, and handicap or DMV-related documents. For those, an in-person medical visit is recommended.",
          },
        ],
      },
      {
        q: "How Do You Recruit Your Doctors and What Is the Credentialing Process?",
        blocks: [
          {
            type: "p",
            text: "At iWILL 'til i'mWELL, we recruit licensed physicians by posting job opportunities across multiple states. All applicants must submit the following:",
          },
          {
            type: "ul",
            items: [
              "A current professional license",
              "DEA registration (if applicable)",
              "Curriculum vitae (CV)",
              "Proof of current professional liability insurance (face sheet)",
            ],
          },
          {
            type: "p",
            text: "We follow strict credentialing guidelines based on NCQA (National Committee for Quality Assurance) standards. This includes primary source verification of seven key criteria to ensure legal authority to practice, as well as appropriate training and experience. Our process ensures every provider meets the highest standards of care and professionalism before joining our network.",
          },
        ],
      },
      {
        q: "Can Your Doctors Prescribe Medication?",
        blocks: [
          {
            type: "p",
            text: "Yes. If medically appropriate, iWILL 'til i'mWELL doctors can prescribe medications following your consultation.",
          },
          { type: "p", lead: "Important notes:", text: "" },
          {
            type: "ul",
            items: [
              "Controlled substances (e.g., opioids, medical marijuana), non-therapeutic, or lifestyle medications (e.g., Propecia, Rogaine) will not be prescribed.",
              "Medications like Ambien and others with high abuse potential are also not prescribed through IWTIW.",
              "Under our Virtual Urgent Care Program, maintenance medications for chronic conditions such as high blood pressure, high cholesterol, or diabetes will not be refilled unless the patient has seen their primary care provider within the past 6 months.",
            ],
          },
          {
            type: "p",
            text: "Our goal is to ensure safe, responsible prescribing that supports your overall health and long-term care.",
          },
        ],
      },
      {
        q: "If My Condition Cannot Be Treated Through iWILL 'til i'mWELL, Can I Still Discuss My Condition With a Doctor?",
        blocks: [
          {
            type: "p",
            text: "Yes, in many cases you can still discuss your condition with a doctor, even if it cannot be treated through telemedicine. However, this is at the provider's discretion and will depend on the nature and severity of the issue. If your condition requires in-person evaluation or specialized care, the doctor may recommend follow-up with a local provider or direct you to the appropriate level of care.",
          },
        ],
      },
    ],
  },

  {
    id: "standalone-packages",
    label: "STANDALONE PACKAGES",
    questions: [
      {
        q: "What Are Your Standalone Packages?",
        blocks: [
          { type: "p", text: "We offer the following standalone packages:" },
          {
            type: "ul",
            items: [
              {
                b: "Unlimited Virtual Urgent Care (VUC)",
                t: "- Provides access to urgent medical care, allowing patients to consult with a doctor via video or phone for immediate, non-emergency health concerns. This package also includes: Care Coordination; ability to message a team of expert medical and mental health specialists for further support; available with an individual plan or a family plan (up to 8 members in a household).",
              },
              {
                b: "Unlimited Virtual Primary Care (VPC)",
                t: "- A comprehensive primary care service that allows you to establish a relationship with a primary care physician and manage ongoing health conditions, prescriptions, and preventive care through virtual consultations. This package includes: unlimited access to Virtual Urgent Care; unlimited access to Virtual Primary Care; management of health conditions over time; medication management, including ongoing refills; lab tests and routine screening; review and interpretation of lab test results and screenings; health assessments and evaluations; dermatology visits; mental health care; access to a team of expert Care Coordinators; ability to message a team of expert medical and mental health specialists; recommendations/referrals for specialty care services; available for groups/employers/organizations; available with an individual plan or a family plan (up to 8 members in a household).",
              },
              {
                b: "TeleVet Pet Care",
                t: "- Virtual veterinary care that connects pet owners with Licensed Veterinarians for consultations, advice, and treatment recommendations without needing an in-person visit.",
              },
              {
                b: "Musculoskeletal (MSK) Care for Organizations",
                t: "- A specialized package for businesses and organizations, offering support for musculoskeletal conditions such as joint pain, back pain, and other related injuries through virtual consultations with healthcare professionals. These packages provide flexible, focused care based on your needs and are available individually through organizational use.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "more-commonly-chosen",
    label: "MORE COMMONLY CHOSEN PACKAGES",
    questions: [
      {
        q: "What Are The More Commonly Chosen Packages by Individuals?",
        blocks: [
          { type: "p", text: "Below are our more commonly chosen packages:" },
          {
            type: "ul",
            items: [
              "Urgent Care + Behavioral Health for Family",
              "Urgent Care + Behavioral Health + Advanced Behavioral Health for Family",
              "Urgent Care + Behavioral Health + Advanced Behavioral Health + TeleVet for Family",
              "Primary Care + Advanced Behavioral Health for Family",
              "Primary Care + Advanced Behavioral Health + TeleVet for Family",
            ],
          },
          {
            type: "p",
            text: "Family Plans are designed for families covering up to 8 people within the same household.",
          },
        ],
      },
      {
        q: "What Are The More Commonly Chosen Packages by Groups/Organizations/Corporations?",
        blocks: [
          {
            type: "p",
            text: "For groups, organizations, and corporations, the following comprehensive packages are more often chosen:",
          },
          {
            type: "ul",
            items: [
              "Virtual Primary Care",
              "Advanced Behavioral Health Care",
              "Musculoskeletal (MSK) Care",
              "TeleVet Pet Care",
            ],
          },
          {
            type: "p",
            text: "These packages are designed to provide a complete range of services for your employees or members, addressing both their physical and mental health needs.",
          },
        ],
      },
    ],
  },

  {
    id: "add-on-services",
    label: "ADD-ON SERVICES",
    questions: [
      {
        q: "What Services Are Available to Add-On to Any Package?",
        blocks: [
          {
            type: "p",
            text: "We offer the following additional services that can be added to any of our existing packages for more comprehensive care:",
          },
          {
            type: "ul",
            items: [
              {
                b: "Behavioral Health Care",
                t: "- This add-on provides access to licensed mental health professionals for support with issues such as anxiety, depression, stress, grief, and more. You can schedule virtual therapy sessions for individuals or families, allowing you to receive counseling in the comfort of your home. - In-the-Moment Care - short-term support when you need to discuss a specific issue or feeling right away. - Virtual Counseling Care - clinically-determined sessions or six (6) session limit counseling sessions. - Discounted Virtual Psychology Visits - work with licensed psychologists for therapy sessions at a discounted rate.",
              },
              {
                b: "Advanced Behavioral Health Services",
                t: "- This service includes a more comprehensive mental health support plan that offers tools and resources to help you manage your well-being: - Personal Journals (written or spoken) - Shareable Data - track and share progress with your care team - Personal Voice Affirmations - record and listen to affirmations for daily motivation - Moods and Feelings Survey Tool - track and monitor emotional patterns over time - Cognitive Behavioral Therapy (CBT) Tool - a structured tool to help you manage negative thoughts and behaviors - Personal Safety Plan - Protective Factors - create a personalized safety plan in case of a mental health emergency - Personal Analytics - review insights into your mental health progress - Daily Affirmations - receive positive, uplifting statements each day - Daily News Feeds - stay informed with daily updates on mental health topics",
              },
              {
                b: "TeleVet",
                t: "- This add-on provides access to virtual veterinary consultations for pet owners. You can speak with licensed veterinarians to discuss your pet's health concerns and get advice. This service is ideal for non-emergency conditions, general health checks, and ongoing care for your pets.",
              },
              {
                b: "Medication Prescription Plans",
                t: "- Silver Prescription Plan - Urgent Care Medication Prescription Program - get access to 37 drugs at no charge, plus great discounts on all other medications. - Gold Prescription Plan - Primary Care Medication Subscription Program - get access to 37 drugs at no charge AND get access to 200 medications for just $5.00, along with substantial discounts on other medications. - Platinum Prescription Plan - Medications for Acute and Chronic Needs - get access to over 1000 acute and chronic medications for $0 per medication.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "virtual-urgent-care",
    label: "VIRTUAL URGENT CARE",
    questions: [
      {
        q: "Do You Provide Access to a Doctor 24/7?",
        blocks: [
          {
            type: "p",
            text: "Yes! iWILL 'til i'mWELL offers access to licensed doctors 24/7, 365 days a year - including nights, weekends, and holidays. Care when you need it, anytime.",
          },
        ],
      },
      {
        q: "How to Use Virtual Urgent Care?",
        blocks: [
          { type: "p", text: "Getting started is simple:" },
          {
            type: "ol",
            items: [
              "Download the iWILL 'til i'mWELL app or visit www.iwilltilimwell.com, then log into your Member Portal to schedule a consultation with a state-licensed physician.",
              "A Care Coordinator will speak with you first to triage your concerns and update your Electronic Health Record (EHR).",
              "You'll then consult with a physician who will assess your condition and recommend an appropriate treatment plan.",
            ],
          },
        ],
      },
      {
        q: "When to Use Virtual Urgent Care?",
        blocks: [
          {
            type: "p",
            text: "We're here for you 24/7/365 - offering convenient, affordable care when you need it most:",
          },
          {
            type: "ul",
            items: [
              "When you need care right away",
              "When you have a health-related question and need professional guidance",
              "When you're thinking about going to the ER or urgent care for a non-emergency issue",
              "When you're traveling, on a business trip, or away from home",
            ],
          },
        ],
      },
      {
        q: "With 70% of low acuity illnesses being taken care of virtually in Virtual Urgent Care, what are some of the most common conditions seen?",
        blocks: [
          {
            type: "ul",
            items: [
              "Abrasions",
              "Acne",
              "Allergies",
              "Back & neck pain",
              "Bronchitis",
              "Cold & Flu Symptoms",
              "Cough, Sore Throat",
              "COVID-19",
              "Diarrhea",
              "Ear Infection",
              "Eye Infection (e.g. Pink Eye)",
              "Headaches/Migraines",
              "Head lice Recommendations",
              "Insect bites and stings",
              "Minor skin conditions or rashes",
              "Nausea",
              "Painful urination (e.g. Urinary Tract Infections)",
              "RSV",
              "Second Opinions",
              "Sinus Problems",
              "Stomach Viruses",
            ],
          },
        ],
      },
      {
        q: "What Is Your Response Time After a Consultation Is Requested?",
        blocks: [
          {
            type: "p",
            text: "We guarantee a callback within two (2) hours of your consultation request. On average, our response time is about 23 minutes.",
          },
        ],
      },
      {
        q: "Can a Doctor Refill a Prescription?",
        blocks: [
          {
            type: "p",
            text: "Yes, a doctor can provide a short-term prescription refill when appropriate. Common reasons include:",
          },
          {
            type: "ul",
            items: [
              "Your primary care physician is unavailable (e.g., on vacation)",
              "You're traveling and your medication was lost or left behind",
              "You need a temporary refill - limited to a 14-day supply",
            ],
          },
          {
            type: "p",
            lead: "Please Note:",
            text: "Controlled substances and certain medications may not be eligible for refill via telemedicine, depending on state laws and clinical guidelines.",
          },
        ],
      },
    ],
  },

  {
    id: "virtual-primary-care",
    label: "VIRTUAL PRIMARY CARE",
    questions: [
      {
        q: "What Is Virtual Primary Care?",
        blocks: [
          {
            type: "p",
            text: "Virtual Primary Care (VPC) gives patients the ability to have face-to-face visits with a physician using video or phone - no office visit required. VPC allows for continuity of care and helps build a trusted relationship between you and your provider, all from the comfort of home or wherever you are.",
          },
        ],
      },
      {
        q: "Why Integrated Primary Care?",
        blocks: [
          {
            type: "p",
            text: "Integrated Primary Care helps uncover hidden conditions. Key benefits include:",
          },
          {
            type: "ul",
            items: [
              {
                b: "Comprehensive Service Integration",
                t: "- ensures continuity of care across all services",
              },
              {
                b: "Immediate Savings",
                t: "- by redirecting healthcare, immediate cost savings can be realized",
              },
              {
                b: "Long-Term Savings",
                t: "- ongoing care results in significant long-term savings",
              },
              {
                b: "24/7/365 Collaborative Care",
                t: "- our care team works around the clock to support treatment adherence and medication management",
              },
            ],
          },
        ],
      },
      {
        q: "What Services Are Provided by Virtual Primary Care?",
        blocks: [
          {
            type: "p",
            text: "Virtual Primary Care offers a comprehensive range of services, including:",
          },
          {
            type: "ul",
            items: [
              {
                b: "Unlimited Virtual Urgent Care Visits",
                t: "- 24/7 urgent care for common conditions",
              },
              {
                b: "Unlimited Virtual Primary Care Visits",
                t: "- Establishing a relationship with a Virtual Primary Care Physician for long-term management of health conditions",
              },
              "Medication management and ongoing prescription refills",
              {
                b: "Lab Panels",
                t: "- Once-a-year adult male and/or adult female Comprehensive Metabolic Panel with most additional labs at a discounted rate. Ordering and reviewing lab tests and routine screenings. Preventive leverage data to determine potential risk factors to manage specific issues.",
              },
              {
                b: "Health Risk Assessments",
                t: "- Every member fills out a Health Risk Assessment before their Virtual Primary Care consult and for continuity of care between every Urgent and Primary Care visit.",
              },
              {
                b: "Virtual Dermatology",
                t: "- Whether it's a suspicious growth on your arm or an itchy rash, get three (3) free visits per year, per family for your common skin, nail, and hair ailments diagnosed and treated with one of our board-certified dermatologists through our virtual services.",
              },
              {
                b: "Message a Specialist",
                t: "- Members can communicate via email in the patient portal with specialists who are experts within their domains.",
              },
              {
                b: "Care Coordinators",
                t: "- Members have 24/7/365 access to a team of expert patient coordinators to help coordinate care and navigate through the complicated medical industry.",
              },
              {
                b: "Behavioral Health Care",
                t: "- Speak with a licensed therapist from the comfort of your own private space, wherever that space may be.",
              },
              {
                b: "Discounted Behavioral Health Psychology and Psychiatry Sessions",
                t: "- For a discounted fee, you can schedule appointments to meet with a psychologist or a psychiatrist for ongoing care.",
              },
              {
                b: "Advanced Behavioral Health App",
                t: "- Mental Health Assessments, Shareable Data, Create Personal Journals, Create Personal Voice Affirmations, Track and analyze your Moods and Feelings, CBT techniques to help challenge negative thinking patterns and improve mental health, Create A Personal Safety Plan, View insights and trends related to your mental health journey and progress, Daily Affirmations, Daily News Feeds.",
              },
              {
                b: "Providing Referrals",
                t: "- Community referrals for specialty care services.",
              },
            ],
          },
        ],
      },
      {
        q: "When to Use Virtual Primary Care?",
        blocks: [
          {
            type: "p",
            text: "Anytime you like but especially when you need to manage your long-term health needs and staying on top of your physical health and caring for your body:",
          },
          {
            type: "ul",
            items: [
              "Preventive care",
              "Ongoing management of chronic or routine health conditions",
              "Medication management and prescription refills",
              "Lab tests and routine health screenings",
              "Health assessments, evaluations, and wellness check-ins",
              "Referrals to specialists when needed",
            ],
          },
        ],
      },
      {
        q: "How to Use Virtual Primary Care?",
        blocks: [
          {
            type: "p",
            text: "Download the iWILL 'til i'mWELL app or visit www.iwilltilimwell.com to log into your Member Portal and schedule a consultation with a state-licensed primary care physician.",
          },
          {
            type: "ol",
            items: [
              { b: "Update:", t: "update your Electronic Health Record (EHR)." },
              {
                b: "Schedule:",
                t: "choose your preferred provider, appointment date, and time.",
              },
              {
                b: "Reminder:",
                t: "you'll receive confirmation and reminder notifications prior to your visit.",
              },
              {
                b: "Consult:",
                t: "at your scheduled time, your selected physician will contact you via phone or video for your virtual visit.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "virtual-dermatology",
    label: "VIRTUAL DERMATOLOGY CARE",
    questions: [
      {
        q: "What is Virtual Dermatology?",
        blocks: [
          {
            type: "p",
            text: "Virtual Dermatology is affordable, convenient, and timely care that connects you with board-certified dermatologists. Our dermatologists can diagnose and treat hundreds of common skin, nail, and hair conditions, as well as manage chronic skin issues. Say goodbye to long waits in overbooked dermatology offices. After submitting your consultation request, you'll receive a treatment plan and, if needed, a prescription within 72 hours.",
          },
        ],
      },
      {
        q: "When to Use Virtual Dermatology?",
        blocks: [
          {
            type: "p",
            text: "Our goal is to provide you with convenient, affordable healthcare 24/7/365. Virtual dermatology is perfect for:",
          },
          {
            type: "ul",
            items: [
              "When you need care now",
              "If you have a health-related question and need professional guidance",
              "If you're considering going to the ER or an urgent care center for a non-emergency issue",
              "When you're on vacation, traveling for business, or away from home",
            ],
          },
        ],
      },
      {
        q: "What Conditions Does Virtual Dermatology Diagnose and Treat?",
        blocks: [
          {
            type: "p",
            text: "Virtual dermatology can diagnose and treat a wide range of skin, nail, and hair conditions, including:",
          },
          {
            type: "ul",
            items: [
              "Acne",
              "Alopecia (hair loss)",
              "Athlete's foot",
              "Boils",
              "Cold sores",
              "Cysts",
              "Dermatitis (including maskne)",
              "Eczema",
              "Folliculitis",
              "Fungal skin infections",
              "Hives",
              "Keratosis",
              "Moles, warts, and suspicious spots",
              "Poison ivy",
              "Psoriasis",
              "Rashes",
              "Ringworm",
              "Rosacea",
              "Shingles",
              "Skin infections",
            ],
          },
          { type: "p", text: "And much more." },
          {
            type: "p",
            text: "70% of low-acuity dermatology conditions can be diagnosed and treated virtually.",
          },
        ],
      },
      {
        q: "How to Use Virtual Dermatology?",
        blocks: [
          { type: "p", text: "Getting started with virtual dermatology is simple:" },
          {
            type: "ol",
            items: [
              {
                b: "Log in to Request a Consult",
                t: "- Download the iWILL 'til i'mWELL app or visit www.iwilltilimwell.com to log into your member portal and schedule a consultation with a dermatologist, available 24/7/365.",
              },
              {
                b: "Upload Images",
                t: "- Describe the condition you're experiencing and upload at least three images of the affected area for the dermatologist's review.",
              },
              {
                b: "Dermatologist Review",
                t: "- Our board-certified dermatologist will review your consultation details, health records, and attached images within 72 hours. Based on the assessment, you will receive a treatment plan and prescriptions if necessary.",
              },
              {
                b: "Prescription Fulfillment",
                t: "- If prescribed, your medication(s) will be sent electronically to your preferred local pharmacy or home delivery pharmacy.",
              },
            ],
          },
          {
            type: "p",
            text: "If you need additional assistance, our dedicated Care Coordination team is available around the clock to provide support.",
          },
        ],
      },
      {
        q: "How Long Will It Take to Get a Diagnosis?",
        blocks: [
          {
            type: "p",
            text: "On average, you can expect to receive a diagnosis within 12 hours of submitting your consultation. Additionally, we are proud to report that 87% of cases are fully treated via a virtual visit, ensuring convenience and effective care.",
          },
        ],
      },
      {
        q: "Can Dermatology Care be purchased alone?",
        blocks: [
          {
            type: "p",
            text: "No, Dermatology visits are only a part of our Virtual Primary Care program.",
          },
        ],
      },
    ],
  },

  {
    id: "virtual-counseling",
    label: "VIRTUAL COUNSELING",
    questions: [
      {
        q: "What Is Counseling?",
        blocks: [
          {
            type: "p",
            text: "Counseling is a confidential and supportive relationship between you and a professional counselor. Together, you'll work to:",
          },
          {
            type: "ul",
            items: [
              "Identify personal goals",
              "Improve communication and coping skills",
              "Explore potential solutions to challenges",
              "Build self-esteem and confidence",
              "Promote healthy behavior change",
              "Achieve a greater sense of emotional well-being and mental health",
            ],
          },
          {
            type: "p",
            text: "Counseling is a safe space to grow, heal, and move forward with clarity and support.",
          },
        ],
      },
      {
        q: "What Is Virtual Counseling?",
        blocks: [
          {
            type: "p",
            text: "Also known as Teletherapy, it is just like traditional counseling, but delivered by phone or video through a secure platform. You can connect with a licensed mental health provider from the privacy and comfort of your own home to address common emotional and behavioral health concerns. It's a convenient, confidential way to get the support you need - wherever you are.",
          },
        ],
      },
      {
        q: "What is Virtual Group Counseling?",
        blocks: [
          {
            type: "p",
            text: "Virtual group counseling brings individuals together online to address shared challenges under the guidance of a trained counselor. Through secure video platforms, participants connect, share experiences, and develop coping strategies in a confidential and supportive virtual environment.",
          },
        ],
      },
      {
        q: "Do I Need to Schedule an Appointment to Meet with a Counselor?",
        blocks: [
          {
            type: "p",
            text: "Yes and No. Yes, if you want to meet with a counselor on a regular basis, you'll need to schedule an appointment for ongoing mental health support. No, if you're experiencing a mental health crisis or need to speak with a counselor for in-the-moment support, you can simply call in - no appointment needed. We're here to support you when you need it most, whether it's scheduled or in-the-moment.",
          },
        ],
      },
      {
        q: "Can I Meet with My Personal Counselor When I Leave the State Where I've Been Working with Them?",
        blocks: [
          {
            type: "p",
            text: "Not always. Counselors are licensed by state, so if you're traveling or temporarily outside your home state, your assigned counselor may not be able to continue sessions with you during that time. While you're away, you can still receive support by connecting with one of our on-call clinical care counselors. Once you return to your home state, you can resume sessions with your personal counselor.",
          },
        ],
      },
      {
        q: "What Are My Session Limits and What Happens When I Reach My Session Limit but Still Need More Counseling?",
        blocks: [
          {
            type: "p",
            text: "iWILL 'til i'mWELL offers several types of counseling sessions based on your needs:",
          },
          {
            type: "ul",
            items: [
              {
                b: "Virtual Crisis Counseling with Licensed Master's Level Counselors",
                t: "- If you reach out to iWILL 'til i'mWELL during a crisis, our team will promptly assess your situation and triage according to established legal protocols and clinical guidelines. This includes evaluating risk, determining the appropriate level of care, and connecting you to the most suitable resources or interventions to ensure your safety and well-being. iWILL 'til i'mWELL is not intended for emergency or crisis management.",
              },
              {
                b: "Virtual In-The-Moment Care with Master's Level Counselors",
                t: "- Is available when you need to quickly discuss or process a thought, need, or concern.",
              },
              {
                b: "Virtual Clinically-Determined Counseling Sessions with Licensed Master's Level Counselors",
                t: "- The number of sessions is determined based on the issue you're facing. If you reach your clinically determined session limit and still need more counseling, you will be referred to a community therapist or counselor. You will be responsible for covering the cost of additional sessions either out-of-pocket or through your insurance. You can also return for new sessions whenever a new issue arises. In-person visits may be available if applicable in your area.",
              },
              {
                b: "Virtual Pre-Determined Six Counseling Sessions with Licensed Master's Level Counselors and Psychologists",
                t: "- If you reach your six-session limit and still need more counseling, you will be referred to a community therapist or counselor. You will be responsible for additional costs either out-of-pocket or through your insurance. You can also return for new sessions whenever a new issue arises. In-person visits may be available if applicable in your area.",
              },
              {
                b: "Virtual Psychology Visits with Psychologists",
                t: "- You can work with the same psychologist for as many sessions as deemed appropriate by you and the therapist. Each session is discounted to $100. This is a virtual-only service.",
              },
              {
                b: "Virtual Psychiatry Visits with Psychiatrists",
                t: "- You can work with the same psychiatrist for as many sessions as necessary. The initial session is $215 and each follow-up session is discounted to $100. This is a virtual-only service.",
              },
            ],
          },
        ],
      },
      {
        q: "When is Short-Term Teletherapy Not The Best Choice of Service?",
        blocks: [
          {
            type: "p",
            text: "Short-term teletherapy may not be appropriate when any of the following conditions exist (this is not an exhaustive list):",
          },
          {
            type: "ul",
            items: [
              "A heightened risk of harm to oneself or others",
              "Lack of access to or difficulty with communication technology",
              "Significant disruptions in communication services",
              "A need for more intensive services, such as treatment for substance abuse, severe eating disorders, psychosis, or recent psychiatric hospitalization",
            ],
          },
          {
            type: "p",
            text: "In these cases, alternative care options that offer a higher level of support or intensity will need to be pursued.",
          },
        ],
      },
      {
        q: "Is Online Counseling Private and Secure?",
        blocks: [
          {
            type: "p",
            text: "Yes. Protecting patient privacy and ensuring information security are top priorities. iWILL 'til i'mWELL is designed to be a private, secure, and HIPAA-compliant platform that allows you to consult with a mental health provider safely and confidentially.",
          },
          {
            type: "p",
            text: "We take privacy seriously, and our Code of Ethics guarantees that your sessions are completely confidential.",
          },
        ],
      },
      {
        q: "Are Online Counseling Sessions Recorded?",
        blocks: [
          {
            type: "p",
            text: "No. iWILL 'til i'mWELL counseling sessions are neither recorded nor stored, in order to maintain privacy and ensure data security. Only minimal notes are taken, and these are used solely to inform the work of the therapist. We prioritise your privacy and confidentiality throughout the entire counseling process.",
          },
        ],
      },
    ],
  },

  {
    id: "virtual-psychology",
    label: "VIRTUAL PSYCHOLOGY",
    questions: [
      {
        q: "What is a Psychologist?",
        blocks: [
          {
            type: "p",
            text: "Psychologists study both normal and abnormal mental states, as well as perceptual, cognitive, emotional, and social processes. They observe, interpret, and record how individuals relate to one another and their environments. Psychologists use a variety of approaches to understand and treat behavior.",
          },
          {
            type: "p",
            text: "To become a clinical psychologist, one must typically complete an undergraduate degree (4-5 years of college) followed by a doctorate degree (4-7 years of graduate school). In total, most individuals spend 8 to 12 years in higher education to enter this specialty field.",
          },
        ],
      },
      {
        q: "What is Virtual Psychology and is there an Additional Supplemental Cost to Meet with a Psychologist?",
        blocks: [
          {
            type: "p",
            text: "Virtual Psychology provides rapid access to psychologists at lower costs, all from the comfort of your own home. Our licensed psychologists (PhD, PsyD, or EdD) will assess your symptoms, review your medical and family history, and work with you to determine the best course of action moving forward.",
          },
          {
            type: "p",
            text: "Yes, there is an additional supplemental cost to meet with a psychologist. Each session is discounted to $100. This is a virtual-only service.",
          },
        ],
      },
      {
        q: "When to Use Virtual Psychology?",
        blocks: [
          {
            type: "p",
            text: "Virtual psychology services are ideal for addressing a variety of emotional and mental health concerns. Virtual psychology provides an accessible and convenient way to work through these challenges with professional support from psychologists:",
          },
          {
            type: "ul",
            items: [
              "Depression",
              "Stress Management",
              "Grief and Loss",
              "Eating Disorders",
              "Health Psychology",
              "Relationship Issues",
              "Family Counseling",
              "COVID-19 Stress",
              "Addiction",
              "Life Changes",
            ],
          },
        ],
      },
      {
        q: "When Should I Choose to Work with a Psychologist for My Mental Health Care?",
        blocks: [
          {
            type: "p",
            text: "If you are not feeling like yourself, confused about a personal situation, experiencing anxiety or depression, or overwhelmed with life and would prefer to work with a psychologist. Psychologists possess advanced training and greater expertise in addressing mental health concerns.",
          },
        ],
      },
      {
        q: "How to Schedule an Appointment with a Virtual Psychologist?",
        blocks: [
          {
            type: "p",
            text: "To schedule an appointment with a virtual psychologist, visit iwilltilimwell.com or download our free app to complete your registration and account setup. Once registered, you can easily schedule your session at a time that works best for you.",
          },
          {
            type: "ul",
            items: [
              {
                b: "Appointments:",
                t: "available Monday - Friday, 8 am to 5 pm in all time zones.",
              },
              { b: "Consultations:", t: "available via phone or video." },
              {
                b: "Select your therapist:",
                t: "choose the psychologist that best meets your needs.",
              },
            ],
          },
        ],
      },
      {
        q: "May I Speak To The Same Therapist Every Time?",
        blocks: [
          {
            type: "p",
            text: "Yes. You select and can keep your same provider throughout your treatment.",
          },
        ],
      },
      {
        q: "Can a Psychologist Prescribe Medication?",
        blocks: [
          {
            type: "p",
            text: "Unlike psychiatrists, psychologists cannot prescribe medication to patients. Psychologists focus on therapy and mental health assessments, while psychiatrists, who are medical doctors, can prescribe medication.",
          },
        ],
      },
    ],
  },

  {
    id: "virtual-psychiatry",
    label: "VIRTUAL PSYCHIATRY",
    questions: [
      {
        q: "What is a Psychiatrist?",
        blocks: [
          {
            type: "p",
            text: "iWILL 'til i'mWELL's Psychiatrists are Licensed and Board-Certified (MD, DO). Within the pool of psychiatrists are bi-lingual (English/Spanish) doctors with outstanding clinical expertise. Your information is safe, secure, and confidential.",
          },
        ],
      },
      {
        q: "What Is Virtual Psychiatry Services and is there an Additional Supplemental Cost to Meet with a Psychiatrist?",
        blocks: [
          {
            type: "p",
            text: "Virtual Psychiatry Services is when you connect with a U.S. based, board-certified Psychiatrist who can diagnose, treat, and prescribe medications for a range of mental health conditions.",
          },
          {
            type: "p",
            text: "Yes, there is an additional supplemental cost to meet with a psychiatrist. There is an initial session fee of $215 and each follow-up session is discounted to $100. This is a virtual-only service.",
          },
        ],
      },
      {
        q: "What Services Are Provided?",
        blocks: [
          { type: "p", text: "Our virtual psychiatry services include:" },
          {
            type: "ul",
            items: [
              "Establishment of a Virtual Psychiatrist",
              "Management of mental health conditions over time",
              "Medication management, including ongoing refills",
              "Lab tests and routine screening",
              "Health assessment screening and evaluation",
              "Review and interpretation of lab test results and screenings",
              "In-network recommendations and referrals for specialty care services",
            ],
          },
        ],
      },
      {
        q: "When to Use Virtual Psychiatry?",
        blocks: [
          {
            type: "p",
            text: "Our goal is to provide you with convenient, affordable healthcare when you need it most. Members can select a psychiatrist to manage their ongoing mental health conditions, including medication management and preventative care. Available Monday - Friday, 8 am to 5 pm, virtual psychiatry is ideal for:",
          },
          {
            type: "ul",
            items: [
              "When you have a mental health question and need professional guidance",
              "If you're struggling with stress or life-changing events",
              "For relationship issues or addiction concerns",
              "If you're dealing with grief or loss",
            ],
          },
        ],
      },
      {
        q: "What Concerns Do You Treat and Support?",
        blocks: [
          {
            type: "p",
            text: "Virtual psychiatry services are ideal for addressing a variety of emotional and mental health concerns. Virtual psychiatry provides an accessible and convenient way to work through these challenges with professional support:",
          },
          {
            type: "ul",
            items: [
              "Anxiety",
              "Addictive Behaviors",
              "Stress Management",
              "Bipolar Disorders",
              "Trauma & PTSD",
              "Postpartum Depression",
              "Depression",
              "Grief & Loss",
              "Panic Disorders",
              "Medication Management",
            ],
          },
        ],
      },
      {
        q: "What Are The Hours Psychiatrists Are Available To See Patients?",
        blocks: [
          {
            type: "p",
            text: "You can meet with a psychiatrist any day and time Monday - Friday, 8 am to 5 pm in all time zones.",
          },
        ],
      },
      {
        q: "How to Use Virtual Psychiatry?",
        blocks: [
          {
            type: "p",
            text: "Virtual Psychiatry is available Monday - Friday, 8 am to 5 pm. It's a fast, convenient, and affordable way to get help when feeling overwhelmed, experiencing anxiety, or dealing with depression. Here's how to get started:",
          },
          {
            type: "ol",
            items: [
              "Login to your iWILL 'til i'mWELL account online or through the app, available 24/7/365.",
              "Request a consultation with a psychiatrist, update your electronic health records (EHR), and complete an intake questionnaire.",
              "The psychiatrist will contact you for your appointment, assess your symptoms, review your medical and family history, and determine the best course of action moving forward.",
              "Prescriptions (if needed) will be sent electronically to your preferred local pharmacy.",
            ],
          },
        ],
      },
      {
        q: "What Medications Can The Psychiatrist Prescribe?",
        blocks: [
          {
            type: "p",
            text: "Psychiatrists can prescribe the following medications: Lexapro; Effexor; Paxil; Elavil; Zoloft; Cymbalta; Wellbutrin; Remeron; Celexa; Prozac; Pristiq.",
          },
        ],
      },
      {
        q: "What Prescriptions Are NOT Prescribed with Psychiatry Services?",
        blocks: [
          {
            type: "p",
            text: "Psychiatry services do not prescribe the following medications:",
          },
          {
            type: "ul",
            items: [
              "DEA-controlled substances (e.g., ADHD stimulants, sleep medications, anti-anxiety medications like benzodiazepines)",
              "Stimulants (e.g., Adderall, Ritalin, etc.)",
              "Medications intended for intra-muscular injections",
              "Detox medications (e.g., Suboxone, Methadone)",
              "Other drugs with potential for abuse (e.g., muscle relaxants, pseudoephedrine)",
              "Medications that require regular lab work and monitoring (e.g., Lithium, Depakote, Tegretol) if lab results are not available for review",
            ],
          },
        ],
      },
      {
        q: "What Conditions Are NOT Treated with Virtual Psychiatry Services?",
        blocks: [
          {
            type: "p",
            text: "Virtual Psychiatry services do not treat the following conditions:",
          },
          {
            type: "ul",
            items: [
              "Emergency situations (e.g., suicidal thoughts, homicidal thoughts, self-harm)",
              "ADHD prescription of stimulants (therapy and non-stimulant medication management are within scope)",
              "Active hallucinations or delusions",
              "Substance use in an active medical detox program",
              "Moderate to severe autism spectrum disorders",
              "Internationally located patients",
              "Conditions that require laboratory or diagnostic imaging to determine final treatment recommendations, when lab work is unavailable for review",
              "Patients under the age of 12",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "advanced-behavioral-health-app",
    label: "ADVANCED BEHAVIORAL HEALTH APP",
    questions: [
      {
        q: "What Comes with the iWILL 'til i'mWELL Advanced Behavioral Health App?",
        blocks: [
          {
            type: "p",
            text: "The iWILL 'til i'mWELL Advanced Behavioral Health App provides comprehensive mental health support, featuring a variety of tools and resources to help manage emotional and behavioral health. With this app, users can access:",
          },
          {
            type: "ul",
            items: [
              {
                b: "Mental Health Assessments",
                t: "- Comprehensive evaluations to identify emotional and psychological needs.",
              },
              {
                b: "Personal Journals",
                t: "- Options for written or spoken journaling to track thoughts, moods, and progress.",
              },
              {
                b: "Shareable Data",
                t: "- Enables sharing of health data with your care team for better collaboration.",
              },
              {
                b: "Personal Voice Affirmations",
                t: "- Create and listen to personalized affirmations for daily positivity and motivation.",
              },
              {
                b: "Moods and Feelings Survey Tool",
                t: "- Track and analyze mood patterns over time to better understand your emotional well-being.",
              },
              {
                b: "Cognitive Behavioral Therapy (CBT) Tool",
                t: "- Provides CBT techniques to help challenge negative thinking patterns and improve mental health.",
              },
              {
                b: "Personal Safety Plan - Protective Factors",
                t: "- Build a personalized safety plan with protective strategies in case of a mental health crisis.",
              },
              {
                b: "Personal Analytics",
                t: "- View insights and trends related to your mental health journey and progress.",
              },
              {
                b: "Daily Affirmations",
                t: "- Receive positive daily affirmations to improve mental well-being.",
              },
              {
                b: "Daily News Feeds",
                t: "- Stay updated with relevant mental health news, tips, and resources.",
              },
            ],
          },
          {
            type: "p",
            text: "The app also supports telehealth consultations with licensed mental health professionals, allowing you to manage mental health concerns in real time.",
          },
        ],
      },
    ],
  },

  {
    id: "televet-pet-care",
    label: "TELEVET PET CARE",
    questions: [
      {
        q: "What is Virtual Veterinarian Consultation Services?",
        blocks: [
          {
            type: "p",
            text: "Virtual Veterinarian Consultation Services connect pet owners with Licensed Veterinarians through video or phone consultations. This service allows you to discuss your pet's health concerns, receive guidance on treatment all from the comfort of your home. It's ideal for non-emergency situations, routine check-ups, and general pet care advice. Our veterinarians can help with issues such as skin conditions, digestive problems, behavior concerns, and more, without the need for an in-person visit.",
          },
        ],
      },
      {
        q: "What is iWILL 'til i'mWELL Pet Telehealth?",
        blocks: [
          {
            type: "p",
            text: "iWILL 'til i'mWELL Pet Telehealth provides around-the-clock, 24/7/365 unlimited access to a dedicated team of Licensed Veterinarians. The consultation takes place in real-time via phone or video on your mobile device or computer. This service allows you to:",
          },
          {
            type: "ul",
            items: [
              "Ask questions and get expert advice",
              "Receive a second opinion on your pet's health",
              "Understand whether you need to take your pet to the vet or ER",
              "Discuss behavioral issues, training, and overall wellness",
            ],
          },
        ],
      },
      {
        q: "Can I Speak to a Licensed Veterinarian?",
        blocks: [
          {
            type: "p",
            text: "Yes, our dedicated team of veterinarian telehealth specialists are all U.S. Licensed Veterinarians.",
          },
        ],
      },
      {
        q: "What Days and Times Can I Connect with a Licensed Veterinarian?",
        blocks: [
          {
            type: "p",
            text: "You can connect with a Licensed Veterinarian 24/7/365, anywhere in the U.S. We offer round-the-clock access, 24 hours a day, 7 days a week, every day of the year.",
          },
        ],
      },
      {
        q: "What Pets Are Eligible for iWILL 'til i'mWELL TeleVet?",
        blocks: [
          {
            type: "p",
            text: "All pets that live within your home are eligible for iWILL 'til i'mWELL TeleVet services. This includes cats, dogs, and other household pets that can be treated via virtual consultations.",
          },
        ],
      },
      {
        q: "How Does Virtual Veterinarian Consultation Work?",
        blocks: [
          { type: "p", text: "It's easy to schedule a consultation for your pet:" },
          {
            type: "ol",
            items: [
              {
                b: "Log into your Pet Portal",
                t: "- access your account to begin the process.",
              },
              {
                b: "Complete Your Member Profile",
                t: "- make sure your profile is up-to-date with all necessary details.",
              },
              {
                b: "Add Your Pet",
                t: "- include your pet's information, including health history and concerns.",
              },
              {
                b: "Schedule a Consultation",
                t: "- select a time that works best for you to consult with a veterinarian.",
              },
              {
                b: "Veterinarian Contact",
                t: "- a licensed TeleVet veterinarian will contact you at your scheduled time to discuss your pet's health and provide advice or treatment recommendations.",
              },
            ],
          },
        ],
      },
      {
        q: "Can I Upload Documents and Photos for the Vet to Review?",
        blocks: [
          {
            type: "p",
            text: "Yes, document and photo uploads are accepted and encouraged for a more comprehensive review of your pet's condition.",
          },
        ],
      },
      {
        q: "How Long Before the Vet Calls Me Back?",
        blocks: [
          {
            type: "p",
            text: "Once your consultation is scheduled, the veterinarian will typically contact you within an hour.",
          },
        ],
      },
      {
        q: "Can I Consult with a Veterinarian if I'm Traveling Outside of the U.S.?",
        blocks: [
          {
            type: "p",
            text: "Yes, you can consult a vet anytime, anywhere - even if you're traveling outside the U.S.",
          },
        ],
      },
      {
        q: "Can Your Veterinarians Prescribe Medications?",
        blocks: [
          {
            type: "p",
            text: "iWILL 'til i'mWELL consultative pet service providers cannot diagnose or prescribe medications for your pet. Our veterinarians provide expert advice, guide you on managing your pet's condition, and help determine whether an in-person visit or prescription medication is needed. If your pet requires a prescription, we will direct you to an in-person veterinarian or a facility where a prescription can be legally and appropriately issued. We prioritize compliance with state laws, ensuring that our services are safe, ethical, and within the scope of each state's regulations.",
          },
        ],
      },
      {
        q: "Do You Provide a Pet Prescription Discount Virtual Card?",
        blocks: [
          {
            type: "p",
            text: "Yes, we offer a Pet Prescription Discount Virtual Card, which can be used at over 68,000 participating pharmacies nationwide. This card provides a discount of up to 75% on prescription medications for your pet, helping you save on the cost of necessary treatments.",
          },
        ],
      },
      {
        q: "Is TeleVet a Pet Insurance Program?",
        blocks: [
          {
            type: "p",
            text: "No, iWILL 'til i'mWELL and TeleVet are not insurance programs. TeleVet is NOT for emergencies and should not be used for urgent medical situations. If your pet is experiencing an emergency, please contact your vet immediately or visit the nearest Animal Hospital.",
          },
          {
            type: "p",
            text: "TeleVet is intended to complement regular veterinary care, not replace it. It does not provide full veterinary advice, diagnosis, or treatment and should not be considered a substitute for in-office visits or vaccinations. TeleVet vets reserve the right to deny service in cases of potential misuse and operates subject to state regulations.",
          },
        ],
      },
    ],
  },

  {
    id: "musculoskeletal-care",
    label: "MUSCULOSKELETAL CARE",
    questions: [
      {
        q: "How many MSK programs do you offer?",
        blocks: [
          {
            type: "p",
            text: "iWILL 'til i'mWELL offers two tiers of MSK: Core and Enhanced.",
          },
          {
            type: "table",
            headers: ["Feature", "Core", "Enhanced"],
            rows: [
              ["Live 1:1 virtual visits*", "Yes (1 virtual wellness visit)", "Yes (unlimited)"],
              ["Dedicated multidisciplinary care team", "Yes", "Yes"],
              ["MSK Risk Assessments", "Yes", "Yes"],
              ["18 Digital Pain Reduction Programs and Recovery Platform", "Yes", "Yes"],
              ["1,500+ video guided exercises", "Yes", "Yes"],
              ["Injury prevention programs", "Yes", "Yes"],
              ["Lifestyle and maintenance programs", "Yes", "Yes"],
              ["Long Covid - Breathworks Programs", "Yes", "Yes"],
              ["Care Packs", "Yes", "Yes"],
              ["Care management programs**", "Yes", "Yes"],
              ["Educational Programs and Support", "Yes", "Yes"],
              ["Triage and referrals into medical benefit", "Yes", "Yes"],
              ["Targeted Communication & Claims Based Risk Stratification", "Yes", "Yes"],
              ["Vendor collaboration and integration", "Yes", "Yes"],
              ["Data collection and reporting", "Yes", "Yes"],
              ["Multi-Language Support", "-", "Yes"],
              ["Surgical COE Network", "-", "Yes"],
              ["Episodic in-person treatment***", "-", "Yes"],
              ["Directly contracted, nationwide provider networks", "-", "Yes"],
              ["Member/Provider services, claims pricing, processing and/or payment", "-", "Yes"],
            ],
            notes: [
              "*Core includes 1 (one) virtual wellness visit. Enhanced includes unlimited virtual visits subject to medical necessity and applicable local, state and federal regulations.",
              "**Core care management program includes oversight, monitoring and collaboration by our multidisciplinary care team. Enhanced care management program(s) include Credentialing and Utilization Management (UM) and may include Quality Management (QM), Claims, Member Service programs and delegation as applicable.",
              "***Enhanced care management program includes Credentialing and Utilization Management (UM). May include Quality Management (QM), Claims, Member Service programs and delegation as applicable.",
            ],
          },
        ],
      },
      {
        q: "Can individuals register for Musculoskeletal Care?",
        blocks: [
          {
            type: "p",
            text: "Musculoskeletal Care is not available to single paying members. Musculoskeletal Care can only be purchased by groups, organizations or employers sponsoring a group of members, employees, etc.",
          },
        ],
      },
      {
        q: "What specialists are a part of the MSK Multidisciplinary Care Team?",
        blocks: [
          {
            type: "ul",
            items: [
              "Licensed Physical Therapist",
              "Behavioral Therapist",
              "Physical Therapist",
              "Occupational Therapist",
              "Speech Therapist",
              "Orthopedists",
              "Chiropractor",
              "Acupuncturist",
              "Health Coach",
            ],
          },
        ],
      },
      {
        q: "Does Mental Health Care come with your Virtual Musculoskeletal Care Package?",
        blocks: [
          {
            type: "p",
            text: "Yes, Mental Health Care comes with Virtual Musculoskeletal Care.",
          },
        ],
      },
    ],
  },
];

// Flatten a question's blocks to a plain-text string (used for FAQPage JSON-LD).
export function faqPlainText(question) {
  const parts = [];
  for (const block of question.blocks) {
    if (block.type === "p") {
      const lead = block.lead ? block.lead + " " : "";
      const text = block.text || "";
      const combined = (lead + text).trim();
      if (combined) parts.push(combined);
    } else if (block.type === "ul" || block.type === "ol") {
      for (const item of block.items) {
        if (typeof item === "string") parts.push(item);
        else parts.push((item.b + " " + item.t).trim());
      }
    } else if (block.type === "table") {
      for (const row of block.rows) parts.push(row.join(": "));
      if (block.notes) parts.push(...block.notes);
    }
  }
  return parts.join(" ");
}
