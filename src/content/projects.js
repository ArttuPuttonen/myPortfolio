import speedcubingFinland from "../assets/img/speedcubing-finland.webp";
import matkahuoltoTracker from "../assets/img/matkahuolto-tracker.webp";
import cryptoTracker from "../assets/img/crypto-tracker.webp";

// Order here is the order on the Work page. `featured` puts a project on Home.
// Each section has a heading and either `paragraphs`, `bullets`, or both.
export const projects = [
  {
    slug: "traffic-sign-cnn",
    title: "Comparing CNNs for traffic sign recognition",
    summary:
      "My bachelor's thesis. I trained three neural networks on 43 classes of German traffic signs and compared them on accuracy, speed and size.",
    year: "2026",
    kind: "Thesis",
    role: "Sole author, Tampere University of Applied Sciences",
    featured: true,
    stack: ["TensorFlow", "Docker", "FastAPI", "React", "TypeScript"],
    links: [
      {
        label: "Code on GitHub",
        href: "https://github.com/ArttuPuttonen/CNN_Comparison_for_ADAS_thesis_spring_2026",
      },
    ],
    sections: [
      {
        heading: "The question",
        paragraphs: [
          "Driver-assistance systems have to recognise traffic signs in real time, on hardware that is often far from a data centre. Which convolutional neural network is the best overall choice for that job?",
          "I used the German Traffic Sign Recognition Benchmark (GTSRB), 43 sign classes, and compared three transfer-learning models: VGG16, ResNet50 and MobileNetV3Small.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "A TensorFlow training pipeline in Docker with fixed seeds, so every run can be reproduced.",
          "A FastAPI service that serves all three trained models.",
          "A React and TypeScript app: upload a photo of a sign, crop it, and see the three models' predictions side by side with confidence and latency charts.",
          "Scripts that generate the thesis figures and tables, including learning curves, confusion matrices and the most common mix-ups.",
        ],
      },
      {
        heading: "What was compared",
        paragraphs: [
          "Accuracy and loss, training time, parameter count, inference latency, and which sign classes each model confuses with each other.",
        ],
      },
    ],
  },
  {
    slug: "speedcubing-finland",
    title: "Speedcubing Finland",
    summary:
      "Website and membership system for the Finnish speedcubing association. I've built most of it.",
    year: "2025–present",
    kind: "Association",
    role: "Board secretary and main developer",
    featured: true,
    image: speedcubingFinland,
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    links: [
      { label: "speedcubingfinland.fi", href: "https://speedcubingfinland.fi" },
      { label: "Code on GitHub", href: "https://github.com/Speedcubing-Finland" },
    ],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "The public site introduces the association, lists upcoming WCA competitions in Finland and lets people apply for membership. Behind it is an admin panel the board uses to run the membership register.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "The React front end: home, competitions, membership form, info and contact pages.",
          "An Express and MySQL API with JWT sign-in and hashed passwords for board members.",
          "A review queue where new membership applications wait for approval.",
          "A CSV tool that checks competition registrations against the member list.",
          "Automatic emails when a new WCA competition is announced in Finland.",
        ],
      },
    ],
  },
  {
    slug: "kuutiostore",
    title: "Kuutiostore",
    summary:
      "An online store for speedcubing puzzles. I co-founded it in 2022 and still run it as CEO.",
    year: "2022–present",
    kind: "Own company",
    role: "Co-founder and CEO",
    featured: true,
    stack: [],
    links: [{ label: "kuutiostore.fi", href: "https://kuutiostore.fi" }],
    sections: [
      {
        heading: "What I do",
        paragraphs: [
          "I run the store with a friend. Between us we have around 20 years of speedcubing behind us, which is most of what we sell on.",
          "I look after the website, product photos, YouTube tutorials (100k+ views so far), marketing and the admin that comes with running a company. In summer 2024 we moved the warehouse to a fulfilment partner, so I no longer pack orders myself.",
        ],
      },
      {
        heading: "Tools I've built for it",
        paragraphs: [
          "I wrote a Telegram bot that warns us when a parcel stops moving. It's the Matkahuolto parcel tracker further down the Work page.",
        ],
      },
    ],
  },
  {
    slug: "south-tours",
    title: "Booking and finance system at South Tours",
    summary:
      "A summer internship in Málaga, working on the company's internal booking and finance system.",
    year: "2025",
    kind: "Internship",
    role: "Full-stack developer intern",
    stack: ["React", "JavaScript", "Node.js", "PHP", "MySQL"],
    links: [],
    sections: [
      {
        heading: "What I did",
        paragraphs: [
          "I worked in an international team that develops and maintains the company's internal system for bookings and finances. Much of the work was bringing data from different sources into one platform, mostly in JavaScript and PHP.",
        ],
      },
    ],
  },
  {
    slug: "matkahuolto-tracker",
    title: "Matkahuolto parcel tracker",
    summary:
      "A Telegram bot that tells us when a Kuutiostore parcel stops moving in Matkahuolto's network.",
    year: "2025",
    kind: "Internal tool",
    role: "Built it",
    image: matkahuoltoTracker,
    stack: ["Python", "Telegram Bot API", "Matkahuolto API"],
    links: [{ label: "Code on GitHub", href: "https://github.com/ArttuPuttonen/mh_tracker" }],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The script checks the tracking status of our open shipments. If a parcel hasn't moved for too long, it sends a message to our Telegram chat.",
        ],
      },
    ],
  },
  {
    slug: "crypto-tracker",
    title: "ESP8266 crypto price display",
    summary:
      "A small gadget that shows live cryptocurrency prices, built for an embedded systems course.",
    year: "2024",
    kind: "Course project",
    role: "Built it",
    image: cryptoTracker,
    stack: ["ESP8266", "C++", "Arduino", "Binance API"],
    links: [
      {
        label: "Code on GitHub",
        href: "https://github.com/ArttuPuttonen/SJOM/tree/main/bitcoin_tracker",
      },
    ],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "An ESP8266 microcontroller connects to Wi-Fi, fetches prices from the Binance API and shows them on a display.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function findProject(slug) {
  return projects.find((p) => p.slug === slug);
}
