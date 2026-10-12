export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  pages: string;
  year: number;
  doi: string;
  category: 'Air Quality' | 'Transportation & Urban Transit' | 'Environmental & WASH';
  summary: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  division?: string;
  period: string;
  location: string;
  type: string;
  description: string;
  keyResponsibilities: {
    title: string;
    items: string[];
  }[];
  skillsUsed: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: 'Geospatial & Remote Sensing' | 'Machine Learning & Transit' | 'BIM & Structural' | 'Infrastructure & Cost Engineering';
  image: string;
  summary: string;
  methodology: string[];
  tools: string[];
  outcomes: string[];
  metrics?: { label: string; value: string }[];
  caseNumber?: string;
  overlayTag?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  thesisOrFocus?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  periodOrDate: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Engr. Md Shahriar Rahman Naeem Patwary",
  shortName: "Shahriar Rahman Naeem",
  designation: "Civil Engineer & Cost Control Engineer",
  affiliation: "MIEB (Member #M54334)",
  location: "BGB camp, Rajendrapur, Gazipur, Bangladesh",
  email: "srnpatwary7991.srnaeem@gmail.com",
  phone: "+880 1537 574 535",
  whatsapp: "+880 1537 574 535",
  linkedin: "https://linkedin.com/in/naeemsensei001",
  researchgate: "https://www.researchgate.net/profile/Md-Patwary-11",
  githubPortfolio: "https://shahriarnaeem.github.io/About-NaeemSensei/",
  nationality: "Bangladeshi",
  dateOfBirth: "10 September 1998",
  heroBio: "Civil & Cost Control Engineer blending heavy infrastructure project economics with environmental remote sensing, Python analytics, and machine learning. Experienced in mega transit projects (DMRT Line-6) and ADB-backed infrastructure, with research focus on sustainable finance and climate analytics.",
  statement: "Civil Engineer and Cost Control Engineer with interdisciplinary expertise in project economics, financial analysis, infrastructure management, environmental research, geospatial data science, Python, and machine learning (ML). Experienced in environmental impact assessment, urban emissions and air pollution analysis, BIM technologies, and the environmental and socioeconomic impacts of mega infrastructure projects.",
  researchVision: "Developing expertise in ESG investment, sustainable finance, carbon finance, and climate change through professional learning, climate literacy training for policymakers, and symposiums organised by the International Universities Climate Alliance (IUCA). Preparing to join the 9th GLF Investment Case Symposium: AI and the Future of Sustainable Finance alongside COP31. Aspiring to integrate financial analysis, AI-driven environmental analytics, and climate policy to advance sustainable investment, climate mitigation, and resilient urban development."
};

export const HIGHLIGHTS_METRICS = [
  { label: "Peer-Reviewed Papers", value: "4", detail: "International civil & environmental journals" },
  { label: "Remote Sensing Data", value: "72 Mo", detail: "Satellite NO2 longitudinal analysis" },
  { label: "BIM & Structural LOD", value: "350-400", detail: "Revit, Navisworks & Tekla modeling" },
  { label: "Mega Project Roles", value: "2+", detail: "Dhaka Metro Line-6 & ADB BGB Works" },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Bachelor of Science in Civil Engineering",
    institution: "Ahsanullah University of Science & Technology (AUST)",
    location: "Dhaka, Bangladesh",
    period: "2017 – 2022",
    grade: "CGPA: 3.383 / 4.00",
    thesisOrFocus: "Effects on air quality in Dhaka city due to Covid-19 pandemic induced nationwide lockdown"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Milestone College",
    location: "Dhaka, Bangladesh",
    period: "2014 – 2016",
    grade: "GPA: 5.00 / 5.00 (Golden A+)",
    thesisOrFocus: "Science Group with Physics, Chemistry, Higher Mathematics"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Mozadded E Alfesany Academy",
    location: "Rangamati, Chittagong, Bangladesh",
    period: "2013 – 2014",
    grade: "GPA: 5.00 / 5.00 (Golden A+)",
    thesisOrFocus: "Science Group"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-mrt6",
    title: "The impact of MRT Line-6 construction work on the environment, road users, and traffic during the construction period",
    authors: "Patwary, M. S. R. N., Mahmud, M. H., Zishan, S. M. J. U., & Alam, S. U.",
    journal: "International Journal of Social Impact",
    volume: "9(4)",
    pages: "24–40",
    year: 2024,
    doi: "https://doi.org/10.25215/2455/0904002",
    category: "Transportation & Urban Transit",
    summary: "Comprehensive empirical investigation into the environmental externalities, commuter delay patterns, noise variations, and particulate emissions during the construction phases of Dhaka Mass Rapid Transit (MRT Line-6).",
    highlights: [
      "Quantified traffic delay index along Mirpur-Agargaon corridor during viaduct erection",
      "Assessed ambient noise levels and road user sentiment through structured surveying",
      "Formulated mitigation frameworks for mega urban transport civil projects"
    ]
  },
  {
    id: "pub-darussalam",
    title: "Variations in gaseous pollutants and suspended particulate matter over the season in the Darussalam area",
    authors: "Shadin, M. U., Mahmud, M. H., Naeem Patwary, M. S. R., Jahan, S., Zishan, S. M. J. U., & Biswas, P.",
    journal: "International Journal of Research in Civil Engineering and Technology",
    volume: "5(2)",
    pages: "31–40",
    year: 2024,
    doi: "https://doi.org/10.22271/27078264.2024.v5.i2a.68",
    category: "Air Quality",
    summary: "Seasonal evaluation of criteria air pollutants (PM2.5, PM10, SO2, NO2, CO) in high-density urban bottleneck areas of Dhaka, identifying meteorology-driven inversion effects and vehicular exhaust concentrations.",
    highlights: [
      "Monitored seasonal fluctuations across pre-monsoon, monsoon, and dry winter periods",
      "Correlated particulate matter concentrations with local traffic congestion spikes",
      "Provided baseline empirical data for urban health risk mitigation"
    ]
  },
  {
    id: "pub-lockdown",
    title: "Effects on air quality in Dhaka City due to COVID-19 pandemic induced nationwide lockdown",
    authors: "Mahmud, M. H., Patwary, M. S. R. N., & Avash, R.",
    journal: "International Journal of Social Impact",
    volume: "9(3)",
    pages: "21–30",
    year: 2024,
    doi: "https://doi.org/10.25215/2455/0903004",
    category: "Air Quality",
    summary: "Evaluated drastic anthropogenic emission drops across Dhaka during the stringent COVID-19 nationwide lockdowns, contrasting vehicular and industrial shutdown data against historical normal baselines.",
    highlights: [
      "Analyzed air quality index (AQI) shifts across primary Dhaka continuous monitoring stations",
      "Demonstrated quantifiable recovery intervals in particulate and gaseous contaminants",
      "Underpinned Bachelor thesis findings from Ahsanullah University of Science & Technology"
    ]
  },
  {
    id: "pub-wash-slum",
    title: "Household: Wash roles and responsibilities for women, adolescents (girls and boys), aged and informal male workers at Pora Bari slum in Kallaynpur, Dhaka",
    authors: "Shorif-Ul-Alam, Jahan, S., Naeem Patwary, M. S. R., Mahmud, M. H., Ahmed, M. J., & Das, U.",
    journal: "International Journal of Research in Civil Engineering and Technology",
    volume: "6(1)",
    pages: "23–34",
    year: 2025,
    doi: "https://doi.org/10.22271/27078388.2025.v6.i1a.36",
    category: "Environmental & WASH",
    summary: "Socio-environmental field research assessing Water, Sanitation, and Hygiene (WASH) dynamics, gender burdens, and infrastructural vulnerability among marginalized urban informal slum communities.",
    highlights: [
      "Field-level primary data collection across vulnerable demographic groups",
      "Analysis of infrastructure deficits and daily potable water fetching hours",
      "Policy recommendations for resilient municipal water distribution"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "pran-rfl",
    role: "Cost Engineer",
    company: "Property Development Limited of Pran-RFL Group",
    division: "Pran-RFL Group’s Construction Business",
    period: "April 2026 – Present",
    location: "Gazipur, Dhaka, Bangladesh",
    type: "Full Time Employment",
    description: "Leading construction economics, quantity surveying, cost forecasting, and contractual administration for Asian Development Bank (ADB)-backed infrastructure projects.",
    keyResponsibilities: [
      {
        title: "Quantity Surveying & Project Management",
        items: [
          "Construction Economics and Cost Management for ADB's project for Border Guard Bangladesh (63 BGB Battalion, Gazipur & Sylhet BGB project).",
          "Advanced project scheduling and Work Breakdown Structure (WBS) modeling using MS Project; critical path monitoring.",
          "Application of Construction Law and FIDIC contract provisions to project deliverables.",
          "Preparation of comprehensive daily, weekly, and monthly progress reports for stakeholders.",
          "Site-measurement quantity estimations verified rigorously against detailed engineering drawings.",
          "Processing of interim payment claims, running bills, client negotiations, and subcontractor certifications.",
          "Rate analysis and preparation of itemized Bills of Quantities (BOQ)."
        ]
      },
      {
        title: "Cost Control & Financial Management",
        items: [
          "Cost forecasting for upcoming works and macro cash flow modeling (cash inflow vs outflow).",
          "Price escalation calculations, inflation adjustments, and material variation assessments.",
          "Material Order Quantity (MOQ) optimization reducing waste and inventory holding cost.",
          "Preparation of comprehensive project-wise Profit & Loss (P&L) statements incorporating VAT, tax, overheads, and target profit margins."
        ]
      }
    ],
    skillsUsed: ["MS Project", "Quantity Surveying", "Cost Forecasting", "BOQ", "Construction Law", "ADB Guidelines", "Financial Modeling", "P&L Reporting"]
  },
  {
    id: "itd-dmrt",
    role: "QS & Cost Control Engineer",
    company: "Italian-Thai Development Public Company Limited (ITD)",
    division: "CP-03 & CP-04 of DMRT Line-6 (Dhaka Metro Rail Project)",
    period: "July 2023 – March 2026",
    location: "Agargaon, Dhaka, Bangladesh",
    type: "Full Time Employment",
    description: "Managed quantity surveying, contract administration, billing, and subcontractor claims on Bangladesh's flagship mega elevated metro transit corridor.",
    keyResponsibilities: [
      {
        title: "Quantity Surveying (QS) & Site Inspection",
        items: [
          "Material cost estimations and Requests for Inspection (RFI) lifecycle management.",
          "On-site physical audits comparing real progress against interim payment certificate data.",
          "Detailed rate analysis and preparation of Bills of Quantities (BOQ).",
          "Drafting variation proposals, managing client engineer approvals, and preparing final bills and closure statements."
        ]
      },
      {
        title: "Cost, Procurement & Contract Management",
        items: [
          "Project cash flow and Interim Payment Certificate (IPC) forecasting.",
          "Budget formulation and tender item profitability calculations.",
          "Vendor technical comparison statements and subcontractor invoice reconciliation.",
          "FIDIC contract compliance advising, claims development, and contract closure documentation."
        ]
      }
    ],
    skillsUsed: ["FIDIC Contracts", "DMRT Line-6", "IPC Forecasting", "RFI Administration", "BOQ", "Subcontractor Invoicing", "AutoCAD", "Cost Control"]
  },
  {
    id: "innovate-eng",
    role: "Structural Engineer",
    company: "Innovate Engineering & Development (IED)",
    period: "August 2022 – June 2023",
    location: "Dhaka, Bangladesh",
    type: "Full Time Employment",
    description: "Conducted structural analysis, foundation design, and geotechnical assessment for residential and commercial multi-story building systems.",
    keyResponsibilities: [
      {
        title: "Structural Modeling & Design",
        items: [
          "Modeled and analyzed reinforced concrete structures using ETABS and SAFE in compliance with BNBC-20 standards.",
          "Geotechnical investigations and surcharged load calculation via Geo5.",
          "Generated detailed 2D structural CAD blueprints and 3D Tekla / Revit models."
        ]
      }
    ],
    skillsUsed: ["ETABS", "SAFE", "BNBC-20", "Geo5", "Tekla Structures", "AutoCAD", "Revit"]
  },
  {
    id: "bim-envision",
    role: "BIM Modeler – Team Leader",
    company: "BIM Envision",
    period: "December 2021 – July 2022",
    location: "Dhaka, Bangladesh",
    type: "Full Time Employment",
    description: "Led BIM drafting teams in generating multi-discipline building models and architectural solar integrations.",
    keyResponsibilities: [
      {
        title: "BIM Coordination & Leadership",
        items: [
          "3D architectural and structural building information modeling using Autodesk Revit.",
          "Coordination with AutoCAD drawings and clash detection preparation.",
          "Solar panel roof-mount design and solar azimuth layout modeling using SketchUp."
        ]
      }
    ],
    skillsUsed: ["Autodesk Revit", "AutoCAD", "SketchUp", "Solar Design", "Team Leadership"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-satellite-no2",
    caseNumber: "Case 01",
    overlayTag: "23.8103° N, 90.4125° E · Sentinel-5P TROPOMI L3",
    title: "Geospatial NO2 Atmospheric Analysis over Dhaka",
    subtitle: "Sentinel-5P Satellite Remote Sensing & Ground-Station Synthesis",
    period: "2019 – 2024",
    category: "Geospatial & Remote Sensing",
    image: "/src/assets/images/geospatial_no2_analysis_1791819160686.jpg",
    summary: "Comprehensive spatio-temporal investigation of tropospheric Nitrogen Dioxide (NO2) column density across the Dhaka metropolitan delta over 72 months (6 years), integrating Google Earth Engine, Sentinel-5P TROPOMI satellite imagery, ground-based CAMS air quality observations, ArcGIS Pro cartography, and Python data automation.",
    methodology: [
      "Acquired Sentinel-5P TROPOMI level-3 satellite raster datasets over Dhaka division coordinates (2019–2024)",
      "Processed ground station continuous monitoring data (CAMS) and executed geospatial kriging interpolation via ArcGIS Pro",
      "Conducted Python time-series regression, seasonal decomposition, and Pearson correlation analysis using Pandas & Scikit-learn",
      "Modeled spatial distribution discrepancies during monsoon washouts vs winter meteorological inversions"
    ],
    tools: ["Google Earth Engine", "Sentinel-5P", "ArcGIS Pro", "Python", "Pandas", "QGIS", "Origin Pro"],
    outcomes: [
      "Established 72-month empirical calibration factor between satellite column density and ground respirable NO2",
      "Demonstrated 48% seasonal concentration swings between winter stagnant air and monsoon washout periods",
      "Delivered reproducible GIS workflow for urban environmental policy planning"
    ],
    metrics: [
      { label: "Data Duration", value: "72 Months" },
      { label: "Temporal Span", value: "2019–2024" },
      { label: "Spatial Tech", value: "Sentinel-5P / GIS" }
    ]
  },
  {
    id: "proj-traffic-ml",
    caseNumber: "Case 02",
    overlayTag: "Supervised ML · Feature Attribution & Risk Classification",
    title: "Traffic Flow & Accident Behaviour Modelling",
    subtitle: "Predictive Urban Mobility Analytics via Scikit-Learn & XGBoost",
    period: "2012 – 2018 Data Baseline",
    category: "Machine Learning & Transit",
    image: "/src/assets/images/traffic_flow_ml_1791819177355.jpg",
    summary: "Predictive machine learning framework analyzing urban traffic congestion patterns, road user behavior, and accident severity factors along high-density metropolitan corridors (Westbound I-94), integrating adverse meteorological features, precipitation, and federal holidays.",
    methodology: [
      "Ingested multi-year Minnesota DOT hourly traffic volume datasets with localized NOAA weather feeds",
      "Engineered cyclical time features (hour of day, day of week sine/cosine transforms) and weather anomaly flags",
      "Trained and evaluated Scikit-learn Random Forests, Gradient Boosting, and XGBoost regressor pipelines",
      "Engineered an interactive real-time prediction simulator to evaluate congestion thresholds under adverse conditions"
    ],
    tools: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Seaborn", "Jupyter", "Matplotlib"],
    outcomes: [
      "Achieved R² score > 0.94 on test datasets with tight Mean Absolute Error (MAE)",
      "Identified critical precipitation and freezing rain thresholds precipitating secondary bottleneck accidents",
      "Demonstrated machine learning feasibility for real-time intelligent transportation systems (ITS)"
    ],
    metrics: [
      { label: "Model Accuracy", value: "R² > 0.94" },
      { label: "Feature Matrix", value: "Weather + Temporal" },
      { label: "Corridor", value: "I-94 Westbound" }
    ]
  },
  {
    id: "proj-bim-structural",
    caseNumber: "Case 03",
    overlayTag: "LOD 350–400 · Parametric QTO & Clash Matrix",
    title: "BIM-Based Project Delivery & 3D Structural Coordination",
    subtitle: "LOD 350–400 Parametric Modeling, Clash Detection & BNBC-20 Analysis",
    period: "2021 – 2023",
    category: "BIM & Structural",
    image: "/src/assets/images/bim_structural_model_1791822712038.jpg",
    summary: "Building Information Modeling (BIM) via Autodesk Revit and Navisworks Manage for complex elevated transit infrastructure and multi-story concrete/steel building structures. Encompasses Scan-to-BIM point cloud integration via Autodesk ReCap, finite element structural analysis (ETABS, SAFE, Geo5) compliant with BNBC-20 standards, structural steel detailing in Tekla, and parametric Quantity Takeoff (QTO).",
    methodology: [
      "Modeled high-detail 3D architectural and structural systems in Autodesk Revit with custom parametric family libraries",
      "Integrated 3D terrestrial laser scan point-cloud data using Autodesk ReCap for Scan-to-BIM verification",
      "Executed automated interdisciplinary clash detection and construction phasing (4D BIM) within Navisworks Manage",
      "Analyzed multistory reinforced concrete frames per BNBC-20 criteria with ETABS and SAFE foundation load modeling",
      "Performed geotechnical slope stability and surcharged load estimations utilizing Geo5 software",
      "Extracted automated parametric Quantity Takeoff (QTO) linking 3D geometry directly to cost forecasting sheets"
    ],
    tools: ["Autodesk Revit", "Navisworks Manage", "Tekla Structures", "ETABS", "SAFE", "Geo5", "Autodesk ReCap", "AutoCAD", "SketchUp"],
    outcomes: [
      "Pre-empted and resolved 100+ interdisciplinary structural and MEP clashes before physical site fabrication",
      "Accelerated bill of quantities (BOQ) estimation cycles by 40% through bidirectional Revit model scheduling",
      "Delivered BNBC-20 compliant structural analysis drawings and Tekla steel connection schedules"
    ],
    metrics: [
      { label: "Model Detail", value: "LOD 350–400" },
      { label: "Coordination", value: "Navisworks 4D" },
      { label: "Structural Standard", value: "BNBC-20 / ETABS" }
    ]
  },
  {
    id: "proj-dmrt-infra",
    caseNumber: "Case 04",
    overlayTag: "DMRT Line-6 CP-03&04 · FIDIC Contract Economics",
    title: "DMRT Line-6 Mega Viaduct & Station Cost Engineering",
    subtitle: "Contractual Management, BOQ & Cash Flow Forecasting",
    period: "2023 – 2026",
    category: "Infrastructure & Cost Engineering",
    image: "/src/assets/images/regenerated_image_1791822167612.png",
    summary: "Project economics and quantity surveying for CP-03 & CP-04 of the Dhaka Mass Rapid Transit Line-6, spanning elevated prestressed concrete viaduct segments and modern passenger stations under FIDIC conditions.",
    methodology: [
      "Formulated detailed itemized Bills of Quantities (BOQ) with comprehensive rate analysis",
      "Conducted physical site inspection cross-verification against Request for Inspection (RFI) records",
      "Modeled project cash flow curves, interim payment certificates (IPC), and price escalation adjustments",
      "Managed subcontractor agreements, claims assessments, and contract closure procedures"
    ],
    tools: ["FIDIC Standards", "AutoCAD", "MS Project", "Planswift", "MS Excel", "Cost Control"],
    outcomes: [
      "Delivered precision billing administration across multi-million dollar viaduct sections",
      "Minimised billing cycle delays through structured subcontractor invoice verification",
      "Successfully submitted Final Bill & Final Statement documentation for package closeouts"
    ],
    metrics: [
      { label: "Project Scale", value: "CP-03 & CP-04" },
      { label: "Contract Mode", value: "FIDIC Guidelines" },
      { label: "Scope", value: "Viaduct & Stations" }
    ]
  }
];

export const SKILLS_DATA = {
  programmingData: [
    { name: "Python for Data Analysis", level: 90, desc: "Data processing, statistical algorithms, automation" },
    { name: "Pandas & NumPy", level: 92, desc: "High-performance tabular manipulation & mathematical arrays" },
    { name: "Scikit-learn & XGBoost", level: 85, desc: "Regression, clustering, tree-based predictive modeling" },
    { name: "Matplotlib, Seaborn & Plotly", level: 88, desc: "Publication-grade charts and interactive dashboards" },
    { name: "ArcGIS Pro & Google Earth", level: 86, desc: "Geospatial vector/raster analysis, TROPOMI satellite data" },
    { name: "SPSS & Origin Pro", level: 84, desc: "Parametric/non-parametric tests, curve fitting" },
    { name: "HTML & CSS", level: 78, desc: "Web UI and interactive reporting demonstration" }
  ],
  engineeringBim: [
    { name: "Autodesk Revit", level: 92, desc: "Proficient 3D structural & architectural modeling" },
    { name: "AutoCAD", level: 95, desc: "Certified 2D/3D civil drafting & reinforcement detailing" },
    { name: "ETABS & SAFE", level: 86, desc: "Multi-story building analysis & foundation design per BNBC-20" },
    { name: "Tekla Structures", level: 80, desc: "Structural steel detailing and connection modeling" },
    { name: "Geo5", level: 78, desc: "Geotechnical slope stability & surcharged load estimation" },
    { name: "Autodesk ReCap (Scan-to-BIM)", level: 75, desc: "Point-cloud processing for existing infrastructure" },
    { name: "Navisworks Integration", level: 80, desc: "Clash detection and construction sequencing (4D)" },
    { name: "SketchUp & Lumion", level: 82, desc: "Architectural visualization and solar panel design" }
  ],
  costManagement: [
    { name: "Quantity Surveying & BOQ", level: 95, desc: "Site measurement verification, rate analysis, tender preparation" },
    { name: "Cost Forecasting & Cash Flow", level: 92, desc: "IPC prediction, monthly macro cash inflow/outflow" },
    { name: "FIDIC Contract Management", level: 88, desc: "Variations, claims documentation, compliance" },
    { name: "Material Order Quantity (MOQ)", level: 90, desc: "Batch sizing and price escalation calculations" },
    { name: "P&L & Financial Breakdown", level: 90, desc: "Taxes, VAT, overheads, profitability margins" },
    { name: "MS Project & Work Breakdown", level: 88, desc: "Gantt charts, critical path method (CPM), milestone tracking" },
    { name: "Planswift & Excel Modeling", level: 94, desc: "Digital takeoff and advanced spreadsheet formulas" }
  ]
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Key Concepts of Project Management & Application in Bangladesh",
    issuer: "The Institution of Engineers, Bangladesh (IEB)",
    periodOrDate: "April – May 2025"
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "Project Management Institute (PMI)",
    periodOrDate: "September 2026"
  },
  {
    title: "Six Sigma Lean Level 1 (Passed)",
    issuer: "Pran-RFL Group, Dhaka, Bangladesh",
    periodOrDate: "June – July 2026"
  },
  {
    title: "Sustainability & Environmental Literacy for the Next Generation",
    issuer: "World Environment Council (WEC) National Webinar",
    periodOrDate: "September 2026"
  },
  {
    title: "Training on Computer Aided Analysis & Design of Buildings & Foundation (ETABS & SAFE)",
    issuer: "Engineering Staff College of Bangladesh (ESCB)",
    periodOrDate: "January – February 2023"
  },
  {
    title: "Autodesk Certified Professional: AutoCAD for Design and Drafting Exam Prep",
    issuer: "Coursera",
    periodOrDate: "June – July 2020"
  },
  {
    title: "Excel Skills for Business: Intermediate I",
    issuer: "Coursera",
    periodOrDate: "August – September 2020"
  },
  {
    title: "Conversational English Skills",
    issuer: "Coursera",
    periodOrDate: "June – July 2020"
  }
];

export const VOLUNTEERING_ACTIVITIES = [
  {
    role: "Member (M54334)",
    organization: "Institution of Engineers, Bangladesh (IEB)",
    period: "May 2026 – Present",
    desc: "Active contributor to professional technical seminars, voter engagement, and engineering sector advancements."
  },
  {
    role: "Ambassador / Global Participant",
    organization: "International Youth Conference (IYC) for Global Youth Governance",
    period: "Active",
    desc: "Engaged in global youth governance and sustainability policy deliberations."
  },
  {
    role: "Delegate in Preparation",
    organization: "9th GLF Investment Case Symposium alongside COP31",
    period: "Upcoming",
    desc: "Focusing on AI and the Future of Sustainable Finance, mobilizing private capital for nature and climate resilience."
  },
  {
    role: "Member",
    organization: "AUST Innovation & Design Club",
    period: "Dec 2017 – Dec 2021",
    desc: "Contributed to university design competitions, team project prototyping, and technical workshops."
  },
  {
    role: "Organizer",
    organization: "Civil Job Fiesta 2018 (AUST)",
    period: "Oct 2018",
    desc: "Liaised with major civil engineering recruiters and industry firms, managed participant registration and logistics."
  },
  {
    role: "Volunteer",
    organization: "2nd AUSTDC National Debate Festival 2018",
    period: "Feb 2018",
    desc: "Supported event coordination, participant scheduling, and logistics for national debate teams."
  },
  {
    role: "Member",
    organization: "Bangladesh Scouts",
    period: "Jan 2010 – Feb 2014",
    desc: "Rangamati, Chittagong. Participated in community cleanliness drives, disaster relief support, tree plantations, and health camps."
  }
];

export const REFERENCES = [
  {
    name: "Trin Petchkarnphum",
    designation: "Cost Control Manager, Line-6 (CP03&04 & KMP Extension)",
    organization: "Italian-Thai Development Public Company Limited (ITD) - Dhaka Metro Project",
    email: "tinpetch.kmp@gmail.com",
    phone: "(+880) 01311925558"
  },
  {
    name: "Ass. Prof. Mr. Md. Asif Hossain",
    designation: "Assistant Professor, Civil Engineering Department",
    organization: "Ahsanullah University of Science and Technology (AUST)",
    email: "asifhossain.ce@aust.edu",
    phone: "(+880) 01735647608"
  },
  {
    name: "Dr. Md. Mahmudur Rahman",
    designation: "Professor, Civil Engineering Department",
    organization: "Ahsanullah University of Science and Technology (AUST)",
    email: "mahmudurdr@aust.edu",
    phone: "(+880) 01798663399"
  }
];

export const LANGUAGE_SKILLS = [
  { language: "Bangla", proficiency: "Native speaker", level: "C2" },
  { language: "English", proficiency: "Competent User (IELTS Academic 6.5 Overall)", level: "B2", breakdown: "L: 7.5 | R: 5.5 | W: 6.0 | S: 6.5" }
];
