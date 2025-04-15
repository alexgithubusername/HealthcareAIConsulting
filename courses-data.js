// Course data
const courses = [
    {
        title: "ABAIM Introductory Course & Certification",
        sponsor: "American Board of Artificial Intelligence in Medicine",
        audience: "Physicians",
        cost: "$600",
        duration: "2-day virtual course + certification exam",
        ce: "Yes (2-year certification)",
        objectives: "Comprehensive introduction to artificial intelligence in medicine for physicians. The course covers all material on the introductory certification assessment. The certification process consists of 110 questions with a two-hour time limit, requiring a minimum of 70 correct answers. Once complete, the certification is valid for two years. Package includes two attempts to pass the Educational Certification.",
        link: "https://abaim.org/",
        last_verified: "2025-04-14",
        notes: "Course details verified via ABAIM website. No discrepancies found.",
        keywords: ["Certification", "Physician", "Introductory", "Virtual"]
    },
    {
        title: "ABAIM Introductory Course & Certification",
        sponsor: "American Board of Artificial Intelligence in Medicine",
        audience: "Residents, Fellows, RNs, Technicians, etc.",
        cost: "$300",
        duration: "2-day virtual course + certification exam",
        ce: "Yes (2-year certification)",
        objectives: "Comprehensive introduction to artificial intelligence in medicine for healthcare trainees and staff. The course covers all material on the introductory certification assessment. The certification process consists of 110 questions with a two-hour time limit, requiring a minimum of 70 correct answers. Once complete, the certification is valid for two years. Package includes two attempts to pass the Educational Certification.",
        link: "https://abaim.org/",
        keywords: ["Certification", "Trainee", "Staff", "Introductory", "Virtual"]
    },
    {
        title: "ABAIM Introductory Course & Certification",
        sponsor: "American Board of Artificial Intelligence in Medicine",
        audience: "High School, College, University, Medical/Professional/Graduate School Students",
        cost: "$120",
        duration: "2-day virtual course + certification exam",
        ce: "Yes (2-year certification)",
        objectives: "Comprehensive introduction to artificial intelligence in medicine for students. The course covers all material on the introductory certification assessment. The certification process consists of 110 questions with a two-hour time limit, requiring a minimum of 70 correct answers. Once complete, the certification is valid for two years. Package includes two attempts to pass the Educational Certification.",
        link: "https://abaim.org/",
        keywords: ["Certification", "Student", "Introductory", "Virtual"]
    },
    {
        title: "ABAIM Advanced Course & Certification",
        sponsor: "American Board of Artificial Intelligence in Medicine",
        audience: "Physicians",
        cost: "$600",
        duration: "2-day virtual course + certification exam",
        ce: "Yes (2-year certification)",
        objectives: "Advanced training in artificial intelligence in medicine for physicians. The course covers all material on the advanced certification assessment. The certification process consists of 110 questions with a two-hour time limit, requiring a minimum of 70 correct answers. Once complete, the certification is valid for two years. Package includes two attempts to pass the Educational Certification.",
        link: "https://abaim.org/",
        keywords: ["Certification", "Physician", "Advanced", "Virtual"]
    },
    {
        title: "ABAIM Advanced Course & Certification",
        sponsor: "American Board of Artificial Intelligence in Medicine",
        audience: "Residents, Fellows, RNs, Technicians, etc.",
        cost: "$300",
        duration: "2-day virtual course + certification exam",
        ce: "Yes (2-year certification)",
        objectives: "Advanced training in artificial intelligence in medicine for healthcare trainees and staff. The course covers all material on the advanced certification assessment. The certification process consists of 110 questions with a two-hour time limit, requiring a minimum of 70 correct answers. Once complete, the certification is valid for two years. Package includes two attempts to pass the Educational Certification.",
        link: "https://abaim.org/",
        keywords: ["Certification", "Trainee", "Staff", "Advanced", "Virtual"]
    },
    {
        title: "ABAIM Advanced Course & Certification",
        sponsor: "American Board of Artificial Intelligence in Medicine",
        audience: "High School, College, University, Medical/Professional/Graduate School Students",
        cost: "$120",
        duration: "2-day virtual course + certification exam",
        ce: "Yes (2-year certification)",
        objectives: "Advanced training in artificial intelligence in medicine for students. The course covers all material on the advanced certification assessment. The certification process consists of 110 questions with a two-hour time limit, requiring a minimum of 70 correct answers. Once complete, the certification is valid for two years. Package includes two attempts to pass the Educational Certification.",
        link: "https://abaim.org/",
        keywords: ["Certification", "Student", "Advanced", "Virtual"]
    },
    {
        title: "Generative AI for Healthcare",
        sponsor: "Google Cloud Skills Boost",
        audience: "Healthcare professionals",
        cost: "1 Credit",
        duration: "1 hour",
        ce: "No",
        objectives: "Specifically designed for healthcare professionals, this course demystifies generative AI, the latest breakthrough in artificial intelligence, and the large language models (LLMs) that drive it. Discover real-world applications of generative AI in healthcare settings and master the art of crafting effective prompts tailored to your goals. The course covers introduction to generative AI, large language models in healthcare, medical foundation models, multimodal LLMs, and prompt design for specific healthcare examples. Modules include: Introduction to Generative AI for Healthcare, Large Language Models in Healthcare, and hands-on labs.",
        link: "https://www.cloudskillsboost.google/course_templates/1081",
        last_verified: "2025-04-14",
        notes: "Course validated via Google Cloud Skills Boost. Content and objectives reflect current offerings.",
        keywords: ["Generative AI", "Google", "Healthcare Professional", "LLM", "Prompting", "Online", "Short Course"]
    },
    {
        title: "Anthropic API and Prompt Engineering Courses",
        sponsor: "Anthropic",
        audience: "Developers and AI practitioners",
        cost: "Free",
        duration: "Self-paced",
        ce: "No",
        objectives: "A comprehensive set of educational courses covering: 1) Anthropic API fundamentals - essentials of working with the Claude SDK, getting an API key, working with model parameters, writing multimodal prompts, streaming responses, etc. 2) Prompt engineering interactive tutorial - step-by-step guide to key prompting techniques. 3) Real world prompting - incorporating techniques into complex, real world prompts. 4) Prompt evaluations - writing production prompt evaluations to measure prompt quality. 5) Tool use - implementing tool use successfully in workflows with Claude. The courses favor Claude 3 Haiku to keep API costs down for students following along with the materials.",
        link: "https://github.com/anthropics/courses",
        last_verified: "2025-04-14",
        notes: "Verified on GitHub repository (anthropics/courses). All details are up-to-date.",
        keywords: ["Anthropic", "API", "Prompt Engineering", "Developer", "Claude", "Free", "Online"]
    },
    {
        title: "AI Red Teaming Professional Certification (AIRTP+)",
        sponsor: "Learn Prompting",
        audience: "Professionals interested in AI security",
        cost: "Not specified",
        duration: "4-12 Weeks",
        ce: "No",
        objectives: "Take your expertise to the professional level. Master advanced techniques in AI security assessment and lead sophisticated testing scenarios. This certification is designed for professionals who want to specialize in AI security and learn how to identify and mitigate vulnerabilities in AI systems.",
        link: "https://learnprompting.org/certificates",
        last_verified: "2025-04-14",
        notes: "Verified via Learn Prompting website. Data is consistent with published course information.",
        keywords: ["AI Security", "Red Teaming", "Certification", "Professional", "Online"]
    },
    {
        title: "Certified Prompt Engineering Professional",
        sponsor: "Learn Prompting",
        audience: "Professionals interested in prompt engineering",
        cost: "Not specified",
        duration: "4 Weeks",
        ce: "No",
        objectives: "Master the art of prompt engineering and earn a respected expert certification in this rapidly growing field. Learn to create effective, secure, and optimized prompts for AI systems. This certification covers advanced techniques for crafting prompts that generate high-quality outputs from various AI models.",
        link: "https://learnprompting.org/certificates",
        last_verified: "2025-04-14",
        notes: "Course details validated from Learn Prompting website. Current offering details match.",
        keywords: ["Prompt Engineering", "Certification", "Professional", "Online"]
    },
    {
        title: "Certified AI Engineering Professional",
        sponsor: "Learn Prompting",
        audience: "Professionals interested in AI engineering",
        cost: "Not specified",
        duration: "12 Weeks",
        ce: "No",
        objectives: "Become a certified AI engineering expert and master the skills needed to build and deploy AI solutions. Learn advanced techniques for developing and optimizing AI systems. This certification covers the entire AI development lifecycle, from design to deployment and maintenance.",
        link: "https://learnprompting.org/certificates",
        keywords: ["AI Engineering", "Certification", "Professional", "Online"]
    },
    {
        title: "Data Augmented Technology Assisted MDM",
        sponsor: "University of Michigan",
        audience: "Medical students, residents, fellows, practicing physicians, advanced practice providers, and registered nurses",
        cost: "Included with Coursera Plus",
        duration: "11 hours (3 weeks at 3 hours a week)",
        ce: "Yes (3.5 AMA PRA Category 1 Credits)",
        objectives: "Artificial intelligence (AI) and machine learning (ML) have the potential to increase diagnostic accuracy, decrease diagnostic errors, and improve patient outcomes. This course teaches how to use AI to augment diagnostic decision-making. You'll learn to: describe the crucial role, strengths, and limitations of AI and ML in evidence-based medical decision making; evaluate machine learning studies for bias and systematic error to enhance diagnostic decisions; apply the results of machine learning studies and outputs to diagnostic decisions; and identify legal and ethical issues and best practices for AI and ML use in healthcare settings.",
        link: "https://www.coursera.org/learn/data-augmented-technology-assisted-medical-decision-making#modules",
        keywords: ["Machine Learning", "Decision Making", "Coursera", "Physician", "Nurse", "Trainee", "Online", "CE"]
    },
    {
        title: "AI and ML for Primary Care Curriculum (AiM-PC)",
        sponsor: "Society of Teachers of Family Medicine (STFM)",
        audience: "Medical students, primary care residents, faculty, and primary care physicians",
        cost: "Free",
        duration: "Multiple modules, each ~60 minutes",
        ce: "Yes (AAFP CME Credit)",
        objectives: "Equip learners with the skills needed to be engaged stakeholders in AI/ML, use AI/ML in their practice, and ensure responsible and ethical use. Modules include: AI/ML Essentials, Social and Ethical Implications of AI/ML, Evidence-Based Evaluation of AI/ML-Based Tools, AI/ML-Enhanced Clinical Encounters, and Integrating AI/ML into the Clinic. The curriculum aims to prepare the primary care workforce to appraise and apply AI/ML literature and outputs in clinical practice, ensuring all patients benefit from AI/ML-augmented clinical care.",
        link: "https://stfm.org/teachingresources/curriculum/aim-pc/aiml_curriculum/#44168",
        keywords: ["Machine Learning", "Primary Care", "STFM", "Physician", "Trainee", "Faculty", "Free", "Online", "CE"]
    },
    {
        title: "Artificial Intelligence in Health Care",
        sponsor: "MIT",
        audience: "Health Industry Professionals",
        cost: "$2,950",
        duration: "6 weeks, online",
        ce: "No",
        objectives: "A robust AI decision framework, helping you understand the considerations associated with implementing AI in health care, and equipping you to ask the right questions about AI's suitability to your context. An awareness of how AI-powered solutions can transform health care, with opportunities including disease diagnosis and monitoring, clinical workflow augmentation, and hospital optimization. Insights into the various AI-based techniques impacting and improving upon traditional health care structures, including natural language processing, data analytics, and machine learning.",
        link: "https://mit-online.getsmarter.com/presentations/lp/mit-ai-in-healthcare-online-short-course",
        keywords: ["MIT", "Healthcare Professional", "Management", "Strategy", "Online"]
    },
    {
        title: "Become an AI Leader in a Day",
        sponsor: "Section",
        audience: "Business professionals seeking AI leadership skills",
        cost: "$62/month (AI Academy membership)",
        duration: "1 day",
        ce: "No",
        objectives: "Enhance AI leadership capabilities through comprehensive workshops and resources.",
        link: "https://www.sectionschool.com/events/become-an-ai-leader-in-a-day",
        keywords: ["Leadership", "Business", "Strategy", "Section", "Online", "Short Course"]
    },
    {
        title: "Integrating AI in Clinical Practice: A Practical Guide",
        sponsor: "Technocrinology",
        audience: "Healthcare Professionals",
        cost: "Free",
        duration: "Self-paced",
        ce: "No",
        objectives: "Equip clinicians with knowledge to effectively integrate AI into daily medical practice.",
        link: "https://technocrinology.thinkific.com/",
        keywords: ["Clinical Practice", "Healthcare Professional", "Integration", "Free", "Online"]
    },
    {
        title: "Mastering AI Basics: Crafting Effective Prompts for Precise Results",
        sponsor: "Technocrinology",
        audience: "Individuals interested in AI prompt engineering",
        cost: "Free",
        duration: "Self-paced",
        ce: "No",
        objectives: "Teach the fundamentals of generative AI and prompt engineering for precise AI interactions.",
        link: "https://technocrinology.thinkific.com/courses/PromptingCourse"
    },
    {
        title: "Navigating AI in Health Care",
        sponsor: "American Medical Association",
        audience: "Healthcare professionals exploring AI applications",
        cost: "Free",
        duration: "Webinar series",
        ce: "No",
        objectives: "Discuss practical uses of AI in medical practice, addressing risks and transformational potential.",
        link: "https://www.ama-assn.org/member-benefits/events/navigating-ai-health-care"
    },
    {
        title: "Gemini in Google Drive",
        sponsor: "Udacity",
        audience: "General public interested in AI tools for productivity",
        cost: "Free",
        duration: "1 hour",
        ce: "No",
        objectives: "Utilize Gemini's generative AI features within Google Drive to enhance workflows.",
        link: "https://www.udacity.com/course/gemini-in-google-drive--cd14099"
    },
    {
        title: "Healthcare Leadership",
        sponsor: "SUNY Canton",
        audience: "Healthcare professionals aspiring for leadership roles",
        cost: "Not specified",
        duration: "Microcredential program",
        ce: "No",
        objectives: "Examine challenges in healthcare impacting access, cost, quality, and patient experiences.",
        link: "https://www.canton.edu/academics/micro/health-leadership/"
    },
    {
        title: "Change Management for Generative AI",
        sponsor: "Vanderbilt University via Coursera",
        audience: "Professionals managing AI-driven change",
        cost: "Free",
        duration: "Approx. 1 hour",
        ce: "No",
        objectives: "Strategies and frameworks for implementing generative AI technologies in organizations.",
        link: "https://www.coursera.org/learn/change-management-generative-ai"
    },
    {
        title: "Foundations of Career Navigating and Coaching",
        sponsor: "Goodwill Industries International via Coursera",
        audience: "Aspiring career coaches and navigators",
        cost: "Free",
        duration: "1-4 weeks",
        ce: "Yes",
        objectives: "Fundamental concepts of career coaching and navigating, including theories and tools.",
        link: "https://www.coursera.org/learn/foundations-of-career-navigating-and-coaching"
    },
    {
        title: "Google Prompting Essentials",
        sponsor: "Google via Coursera",
        audience: "Individuals seeking to improve AI prompting skills",
        cost: "$49",
        duration: "Less than 10 hours",
        ce: "No",
        objectives: "Teach effective AI prompting techniques applicable across various AI tools.",
        link: "https://www.coursera.org/learn/google-prompting-essentials"
    },
    {
        title: "Navigating Disruption: Generative AI in the Workplace",
        sponsor: "University of Michigan",
        audience: "Professionals adapting to AI disruptions",
        cost: "Free",
        duration: "Self-paced",
        ce: "No",
        objectives: "Explore how generative AI influences industries and ensure responsible use in workplaces.",
        link: "https://online.umich.edu/series/navigating-disruption-generative-ai-in-the-workplace/"
    },
    {
        title: "New Ways of Working in an AI World",
        sponsor: "London Business School via Coursera",
        audience: "Business professionals adapting to AI transformations",
        cost: "Included with Coursera Plus",
        duration: "Approx. 22 hours",
        ce: "No",
        objectives: "Understand the impact of AI on work practices and develop strategies to adapt.",
        link: "https://www.coursera.org/learn/new-ways-of-working-in-an-ai-world"
    },
    {
        title: "Social Media Content and Strategy",
        sponsor: "Adobe via Coursera",
        audience: "Individuals interested in social media marketing",
        cost: "Free",
        duration: "Approx. 3 hours",
        ce: "No",
        objectives: "Basics of social media marketing, content creation, and audience engagement strategies.",
        link: "https://www.coursera.org/learn/social-media-content-and-strategy"
    },
    {
        title: "AI in Medicine Summer School",
        sponsor: "Cambridge Centre for AI in Medicine",
        audience: "Physicians, medical students, and clinicians",
        cost: "Not specified",
        duration: "5 days",
        ce: "No",
        objectives: "Introduction to AI and machine learning applications in healthcare.",
        link: "https://www.vanderschaar-lab.com/ccaim-ai-and-machine-learning-summer-school/"
    },
    {
        title: "1 Hour to AI Proficiency",
        sponsor: "Section",
        audience: "Individuals seeking quick AI proficiency",
        cost: "Free",
        duration: "1 hour",
        ce: "No",
        objectives: "Rapid introduction to AI concepts and applications.",
        link: "https://www.sectionschool.com/free-workshop"
    },
    {
        title: "ChatGPT & AI Hacks with MS Office",
        sponsor: "Skill Nation",
        audience: "Professionals seeking to enhance productivity using AI and MS Office",
        cost: "₹299",
        duration: "3 hours",
        ce: "No",
        objectives: "Learn secret hacks to make AI analyze data, generate insights, and design presentations with increased speed.",
        link: "https://getautomatex.com/office-hacks/"
    },
    {
        title: "10X Your Productivity as a Physician Using ChatGPT",
        sponsor: "AI4Healthcare",
        audience: "Physicians aiming to enhance productivity with ChatGPT",
        cost: "Free",
        duration: "Self-paced",
        ce: "No",
        objectives: "Techniques and prompts to automate time-consuming tasks, reducing burnout and increasing patient interaction time.",
        link: "https://www.ai4healthcare.org/collections"
    },
    {
        title: "AI for Strategic Decision Making",
        sponsor: "Section",
        audience: "Business leaders integrating AI into strategic decisions",
        cost: "Included with Section membership",
        duration: "2 hours",
        ce: "No",
        objectives: "Understand the four roles AI can play in decision-making and how to utilize AI as a thought partner.",
        link: "https://www.sectionschool.com/courses/ai-for-strategic-decision-making"
    },
    {
        title: "Discovering Quantum Computing",
        sponsor: "Udacity",
        audience: "Individuals interested in understanding quantum computing",
        cost: "Free for 30 days",
        duration: "1 hour",
        ce: "No",
        objectives: "Explore quantum computing's distinctions from traditional computing, grasp complex concepts through real-world examples, and uncover its potential applications.",
        link: "https://www.udacity.com/course/discovering-quantum-computing--cd13463"
    },
    {
        title: "Code in Place",
        sponsor: "Stanford University",
        audience: "Individuals learning programming",
        cost: "Free",
        duration: "6 weeks",
        ce: "No",
        objectives: "Learn the fundamentals of Python programming, including control flow, loops, conditionals, and more, through a community-driven approach.",
        link: "https://codeinplace.stanford.edu/"
    },
    {
        title: "AI In Clinical Medicine",
        sponsor: "Harvard Medical School",
        audience: "Clinicians treating patients in any type of setting",
        cost: "$1,900",
        duration: "2 days, live virtual",
        ce: "Yes",
        objectives: "Define the unique challenges and opportunities for integrating AI in specialized health care fields. Discuss the ethical considerations and potential biases in AI algorithms, especially in decision-making processes related to patient care, diagnosis, and treatment planning. Review the current status area of AI regulation and how it can impact health care. Assess the long-term quality and accuracy of AI technologies and their impact on patient care. Develop methods for integrating AI into medical education, including content generation, evaluation, and ensuring alignment with educational objectives.",
        link: "https://cmecatalog.hms.harvard.edu/ai-clinical-medicine"
    },
    {
        title: "Generative AI Online Certificate Program",
        sponsor: "eCornell",
        audience: "All-industry professionals",
        cost: "$3,750",
        duration: "2.5 months, online",
        ce: "Yes",
        objectives: "Cornell offers several online certificate programs developed by expert faculty to provide you with the opportunity to learn today's leading-edge practices for leveraging AI and Generative AI in your work. Whether you're a business leader, marketer or software developer, choose a program that meets your needs and equip yourself with innovative solutions and data-driven strategies for success in today's fast-moving AI era.",
        link: "https://online.cornell.edu/ai"
    },
    {
        title: "AI In Healthcare Specialization",
        sponsor: "Stanford via Coursera",
        audience: "Healthcare providers and computer science professionals, CME accreditation",
        cost: "$79",
        duration: "1 month @ 10 hrs/week, online",
        ce: "No",
        objectives: "Identify problems healthcare providers face that machine learning can solve, Analyze how AI affects patient care safety, quality, and research, Relate AI to the science, practice, and business of medicine, Apply the building blocks of AI to help you innovate and understand emerging technologies",
        link: "https://www.coursera.org/specializations/ai-healthcare"
    },
    {
        title: "AI in Healthcare",
        sponsor: "Great Learning Academy",
        audience: "General Public",
        cost: "Free",
        duration: "2 hrs, self-paced video",
        ce: "No",
        objectives: "We will be looking into some deep learning concepts line CNN, its various components, how CNN works, How AI is working parallelly with Healthcare, Applications of AI, how AI can be dangerous and we will be doing one hands-on where we will be building a classification model to identify the probability of Covid by giving the x-ray image as an input to the model.",
        link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/ai-in-healthcare"
    },
    {
        title: "AI for Healthcare",
        sponsor: "Udacity by Accenture",
        audience: "General Public",
        cost: "$846",
        duration: "3 months, online",
        ce: "No",
        objectives: "The AI for Healthcare program offers two courses that apply AI to 2D and 3D medical imaging data. The first course covers fundamental skills needed to work with 2D imaging data, such as extracting images from DICOM files, building AI models, and obtaining regulatory approval. The course project involves training a CNN to classify chest X-rays for the presence of pneumonia and writing an FDA validation plan. The second course covers 3D imaging data, including clinical fundamentals, imaging modalities, and common analysis tasks. It also explores how AI can be integrated into the clinical workflow. Both courses are designed to teach students how to derive clinically relevant insights from medical imaging data using AI.",
        link: "https://www.udacity.com/course/ai-for-healthcare-nanodegree--nd320"
    },
    {
        title: "Trustworthy AI for Healthcare Management",
        sponsor: "Politecnico Milano via Coursera",
        audience: "Healthcare professionals, patients, and AI practitioners",
        cost: "$79",
        duration: "3 weeks, 1 hr per week, online",
        ce: "No",
        objectives: "This includes modules on basics of artificial intelligence and an introduction to trustworthy and ethical applications of artificial intelligence. A dedicated lesson will present the Z-Inspection® process for assessing trustworthy AI, and real-world case studies will illustrate how to apply the knowledge.",
        link: "https://www.coursera.org/learn/trustworthy-ai-for-healthcare-management"
    },
    {
        title: "Evaluations of AI Applications in Healthcare",
        sponsor: "Stanford via Coursera",
        audience: "Health Industry Professionals, CME accreditation",
        cost: "$79/month",
        duration: "11 hours, online self-paced",
        ce: "No",
        objectives: "Principles and practical considerations for integrating AI into clinical workflows, Best practices of AI applications to promote fair and equitable healthcare solutions, Challenges of regulation of AI applications and which components of a model can be regulated, What standard evaluation metrics do and do not provide",
        link: "https://www.coursera.org/learn/evaluations-ai-applications-healthcare"
    },
    {
        title: "Business Applications of ML and AI in Healthcare",
        sponsor: "Northeastern University vs Coursera",
        audience: "Business professionals in healthcare space",
        cost: "$79/month",
        duration: "12 hours, online self-paced",
        ce: "No",
        objectives: "1. Determine the factors involved in decision support that can improve business performance across the provider/payer ecosystem. 2. Identify opportunities for business applications in healthcare by applying journey mapping and pain point analysis in a real world context. 3. Identify differences in methods and techniques in order to appropriately apply to pain points using case studies. 4. Critically assess the opportunities to leverage decision support in adapting to trends in the industry.",
        link: "https://www.coursera.org/learn/artificialintelligence-in-healthcare"
    },
    {
        title: "AI in Healthcare",
        sponsor: "Queens University",
        audience: "Health care professionals",
        cost: "$845 CAD",
        duration: "Self-paced, 7 modules within 1 year",
        ce: "No",
        objectives: "Aiming to bridge the gap between AI and health care delivery. Students learn a blend of lectures, case studies and hands-on exercises on the applications, from developing advanced diagnostic tools and personalized medicine to optimizing administrative tasks and enhancing patient care. The course emphasizes practical implementation to use AI technologies to streamline health care processes and improve patient outcomes.",
        link: "https://edconnect-off.queensu.ca/product?catalog=1692798425Rberb"
    },
    {
        title: "Artificial Intelligence in Healthcare Certificate",
        sponsor: "Michigan Tech",
        audience: "Health informatics professionals",
        cost: "$14,855",
        duration: "3 classes, 9 credits, 2 semesters, online or in person",
        ce: "No",
        objectives: "Work with providers, healthcare professionals, and patients to assess and implement information solutions. Characterize, evaluate, and refine clinical processes. Develop, implement, and refine clinical decision support systems. Lead procurement, customization, development, implementation, management, evaluation, and continuous improvement of clinical information systems such as electronic health records and order-entry systems.",
        link: "https://www.mtu.edu/health-informatics/certificates/ai-healthcare/"
    },
    {
        title: "AI for Healthcare: Concepts and Applications",
        sponsor: "Harvard School of Public Health",
        audience: "Senior managers and executives",
        cost: "$2,600",
        duration: "Online, 3 fixed days",
        ce: "Yes",
        objectives: "Discuss how large language models can and have been applied in health care. Detail and implement prompt engineering and tuning and optimizing large language models. Explain how AI can be used to solve clinical problems. Describe the process of successfully implementing AI projects in large health care organizations. Identify future challenges and opportunities in generative AI",
        link: "https://www.hsph.harvard.edu/ecpe/programs/ai-for-health-care-concepts-and-applications/"
    },
    {
        title: "Ethics and Governance of AI for Health",
        sponsor: "World Health Organization (WHO)",
        audience: "Policymakers, AI developers and designers, and health care providers",
        cost: "Free",
        duration: "3.5 hours, online",
        ce: "No",
        objectives: "This course covers the ethical challenges posed by AI in the health care sector. It is designed to provide students with an understanding of the principles necessary for the responsible development and application of AI technology. The program emphasizes the importance of ensuring fairness, transparency and the well-being of patients in all AI-related processes. Students will learn about the ethical considerations of AI and the principles that underpin good governance in the development and deployment of AI. The course explores strategies for building and using AI in ways that promote health equity.",
        link: "https://openwho.org/courses/ethics-ai"
    },
    {
        title: "AI in Healthcare",
        sponsor: "Johns Hopkins University Whiting School of Engineering",
        audience: "Students, data scientists, executives, and physicians",
        cost: "$2,080",
        duration: "Self paced online",
        ce: "No",
        objectives: "This course covers how AI is transforming health care in areas, such as diagnostics, treatment methods and the delivery of services. Students will gain an understanding of the AI techniques that are being employed in the field of medicine, including examining real-world applications of AI techniques. The program emphasizes the ethical and regulatory challenges that arise with the integration of AI.",
        link: "https://lifelonglearning.jhu.edu/course/ai-in-healthcare/"
    },
    {
        title: "Introduction to AI in Health Care",
        sponsor: "American Medical Association (AMA)",
        audience: "Physicians",
        cost: "$399 for non-members, free for members",
        duration: "Self-paced online",
        ce: "Yes",
        objectives: "This course provides an understanding of machine learning and artificial intelligence within the health care industry. It begins with the role and significance of big data in the development and efficacy of ML and AI applications. A significant portion of the course is also devoted to identifying and assessing the advantages and challenges associated with the implementation of AI, including development and testing.",
        link: "https://edhub.ama-assn.org/change-med-ed/interactive/18827029"
    },
    {
        title: "Machine Learning for Healthcare",
        sponsor: "Massachusetts Institute of Technology (MIT)",
        audience: "Data scientists, software engineers, software engineering managers, healthcare professionals",
        cost: "$3,200",
        duration: "3 days intensive, on campus",
        ce: "No",
        objectives: "Tailored for professionals working in health-related fields, this course offers a practical approach to using machine learning techniques. A key feature of the course is the hands-on experience, where students engage with real-world health data to practice machine learning and inference techniques. Students will learn strategies for integrating data from patients, providers and insurers.",
        link: "https://professional.mit.edu/course-catalog/machine-learning-healthcare"
    },
    {
        title: "NVIDIA DLI Generative AI Teaching Kit",
        sponsor: "NVIDIA",
        audience: "Educators, AI instructors, and training professionals",
        cost: "Free",
        duration: "Self-paced, variable by module",
        ce: "No",
        objectives: "Comprehensive teaching kit providing a structured syllabus for generative AI training. Covers modules including: Introduction to Generative AI; NLP fundamentals; Large Language Models and Transformers; Scaling Laws; Multimodal Learning; Diffusion Models; Model Training; LLM Orchestration; and Distributed Training. Includes lecture slides, labs, demos, and links to suggested DLI online courses.",
        link: "https://github.com/qompassai/Equator/tree/main/Python/5_NVIDIA/DLI",
        last_verified: "2025-04-14",
        notes: "Course details taken from NVIDIA DLI Generative AI Teaching Kit syllabus on GitHub."
    },
    {
        title: "Azure AI Foundry SDK: Hands-On Tutorial - Part 1",
        sponsor: "Microsoft Azure",
        audience: "Developers, AI practitioners, and technology professionals",
        cost: "Free",
        duration: "Self-paced",
        ce: "No",
        objectives: "Tutorial: Part 1 - Set up project and development environment to build a custom knowledge retrieval (RAG) app with the Azure AI Foundry SDK. In this tutorial, you create a project, deploy models (gpt-4o-mini and text-embedding-ada-002), create an Azure AI Search service, and configure your development environment. This is part one of a three-part tutorial series to build and evaluate a custom chat app for Contoso Trek.",
        link: "https://learn.microsoft.com/en-us/azure/ai-foundry/tutorials/copilot-sdk-create-resources?tabs=macos",
        last_verified: "2025-04-14",
        notes: "Free hands-on approach tutorial from Microsoft Azure AI Foundry, published on 02/28/2025."
    }
];

// Export the courses array as the default export
export default courses;
