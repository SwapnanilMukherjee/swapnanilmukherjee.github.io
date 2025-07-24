// Academic portfolio data - Replace with your own information
import profileImage from "@/assets/profile-image.jpg";

export const academicData = {
  // Personal Information
  personal: {
    name: "Dr. Jane Smith",
    title: "PhD Student in Computer Science",
    affiliation: "University of Excellence",
    location: "Boston, MA, USA",
    email: "jane.smith@university.edu",
    profileImage: profileImage,
    cvUrl: "/cv.pdf", // Add your CV file to public folder
    githubUrl: "https://github.com/yourusername",
    linkedinUrl: "https://linkedin.com/in/yourusername",
    scholarUrl: "https://scholar.google.com/citations?user=yourid",
  },

  // Biography
  bio: `I am a PhD student in Computer Science at the University of Excellence, working under the supervision of Prof. John Doe. My research focuses on machine learning, artificial intelligence, and their applications in healthcare and robotics.

Prior to my PhD studies, I completed my Master's degree in Computer Science with distinction, where I developed a strong foundation in algorithms, data structures, and software engineering. I am passionate about bridging the gap between theoretical research and practical applications.

I have published several papers in top-tier conferences and journals, and I actively collaborate with researchers from different institutions. My work has been recognized with multiple awards and scholarships.`,

  // Research Interests
  researchInterests: [
    "Machine Learning and Deep Learning",
    "Computer Vision and Image Processing",
    "Natural Language Processing",
    "Robotics and Autonomous Systems",
    "Healthcare AI and Medical Imaging",
    "Ethical AI and Fairness in Machine Learning",
  ],

  // Education
  education: [
    {
      id: "phd",
      degree: "PhD in Computer Science",
      institution: "University of Excellence",
      location: "Boston, MA, USA",
      startYear: 2021,
      gpa: "3.9/4.0",
      thesis: "Advanced Machine Learning Techniques for Healthcare Applications",
      advisor: "Prof. John Doe",
      honors: ["Research Excellence Award", "Graduate Student Fellowship"],
    },
    {
      id: "masters",
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      location: "San Francisco, CA, USA",
      startYear: 2019,
      endYear: 2021,
      gpa: "3.8/4.0",
      thesis: "Deep Learning for Medical Image Analysis",
      advisor: "Prof. Sarah Johnson",
      honors: ["Summa Cum Laude", "Outstanding Thesis Award"],
    },
    {
      id: "bachelors",
      degree: "Bachelor of Science in Computer Engineering",
      institution: "State University",
      location: "Austin, TX, USA",
      startYear: 2015,
      endYear: 2019,
      gpa: "3.7/4.0",
      honors: ["Dean's List", "Engineering Excellence Scholarship"],
    },
  ],

  // Experience
  experience: [
    {
      id: "research-assistant",
      title: "Graduate Research Assistant",
      organization: "AI Lab, University of Excellence",
      location: "Boston, MA, USA",
      startDate: "Sept 2021",
      type: "research" as const,
      description: [
        "Conduct cutting-edge research in machine learning and computer vision",
        "Develop novel algorithms for medical image analysis and diagnosis",
        "Collaborate with medical professionals and industry partners",
        "Mentor undergraduate students in research projects",
        "Present research findings at international conferences",
      ],
      skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "CUDA", "Docker"],
    },
    {
      id: "teaching-assistant",
      title: "Teaching Assistant",
      organization: "Computer Science Department, University of Excellence",
      location: "Boston, MA, USA",
      startDate: "Sept 2021",
      endDate: "May 2023",
      type: "teaching" as const,
      description: [
        "Assisted in teaching CS101: Introduction to Programming (Python)",
        "Conducted weekly lab sessions for 50+ students",
        "Graded assignments and provided detailed feedback",
        "Held office hours to help students with coursework",
        "Developed supplementary learning materials",
      ],
      skills: ["Python", "Pedagogy", "Curriculum Development", "Student Mentoring"],
    },
    {
      id: "summer-intern",
      title: "Machine Learning Research Intern",
      organization: "Google Research",
      location: "Mountain View, CA, USA",
      startDate: "June 2022",
      endDate: "Sept 2022",
      type: "internship" as const,
      description: [
        "Worked on large-scale machine learning models for natural language processing",
        "Implemented and evaluated novel transformer architectures",
        "Collaborated with senior researchers on cutting-edge projects",
        "Contributed to internal research publications and patents",
      ],
      skills: ["Python", "JAX", "Large Language Models", "Distributed Computing"],
    },
  ],

  // Publications
  publications: [
    {
      id: "pub1",
      title: "Advanced Deep Learning Techniques for Medical Image Segmentation: A Comprehensive Survey",
      authors: ["Jane Smith", "John Doe", "Sarah Johnson"],
      venue: "IEEE Transactions on Medical Imaging",
      year: 2024,
      type: "journal" as const,
      paperUrl: "https://example.com/paper1.pdf",
      abstract: "This paper presents a comprehensive survey of advanced deep learning techniques for medical image segmentation, covering recent developments in neural network architectures and training methodologies.",
      bibtex: `@article{smith2024advanced,
  title={Advanced Deep Learning Techniques for Medical Image Segmentation: A Comprehensive Survey},
  author={Smith, Jane and Doe, John and Johnson, Sarah},
  journal={IEEE Transactions on Medical Imaging},
  year={2024},
  volume={43},
  number={2},
  pages={123--145},
  publisher={IEEE}
}`,
    },
    {
      id: "pub2",
      title: "Federated Learning for Privacy-Preserving Healthcare AI",
      authors: ["Jane Smith", "Alice Brown", "Bob Wilson"],
      venue: "Proceedings of the 36th Conference on Neural Information Processing Systems (NeurIPS)",
      year: 2023,
      type: "conference" as const,
      paperUrl: "https://example.com/paper2.pdf",
      codeUrl: "https://github.com/yourusername/federated-healthcare",
      abstract: "We propose a novel federated learning framework that enables collaborative training of AI models across healthcare institutions while preserving patient privacy.",
      bibtex: `@inproceedings{smith2023federated,
  title={Federated Learning for Privacy-Preserving Healthcare AI},
  author={Smith, Jane and Brown, Alice and Wilson, Bob},
  booktitle={Advances in Neural Information Processing Systems},
  pages={1234--1245},
  year={2023}
}`,
    },
    {
      id: "pub3",
      title: "Attention Mechanisms in Computer Vision: Applications and Challenges",
      authors: ["Jane Smith", "John Doe"],
      venue: "International Conference on Computer Vision (ICCV) Workshop",
      year: 2023,
      type: "workshop" as const,
      paperUrl: "https://example.com/paper3.pdf",
      abstract: "This workshop paper explores the application of attention mechanisms in computer vision tasks and discusses current challenges and future directions.",
    },
  ],

  // Contact Information
  contact: {
    email: "jane.smith@university.edu",
    phone: "+1 (555) 123-4567",
    address: `Room 123, Computer Science Building\nUniversity of Excellence\n100 University Ave\nBoston, MA 02101, USA`,
    officeHours: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM (or by appointment)",
    socialLinks: [
      {
        platform: "Google Scholar",
        url: "https://scholar.google.com/citations?user=yourid",
      },
      {
        platform: "ORCID",
        url: "https://orcid.org/0000-0000-0000-0000",
      },
      {
        platform: "ResearchGate",
        url: "https://www.researchgate.net/profile/yourprofile",
      },
    ],
  },

  // Navigation sections
  navigationSections: [
    { id: "header", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ],
};