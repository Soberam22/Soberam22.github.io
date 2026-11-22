// Source: Lang_Ming_CV_LaTeX.tex, updated 2026-11-21. CV claims preserved with their qualifications.
const profile = {
  "name": "Lang Ming",
  "role": "Electrical & Electronic Engineering Student",
  "introduction": "Working across power electronics, embedded control and AI-assisted engineering research.",
  "about": "BEng (Hons) Electrical and Electronic Engineering student at the University of Nottingham Ningbo China (September 2023–present). My work spans circuit simulation, PCB engineering, embedded firmware and experiments on real hardware. Outside engineering, I play drums in the university band club.",
  "projects": [
    {
      "title": "Wireless Charging for a Pet Collar",
      "category": "Power",
      "text": "Final-year project, 2026–present, supervised by Dr Liang Huang. Modelled a series-compensated inductive link in LTspice with receiver-voltage feedback and bounded PI frequency control. Documented 50 simulation cases across 11 iterations. Achieved 5 V ±5% in tested load and coupling changes under ideal drive and feedback assumptions; nominal model efficiency was approximately 61%, falling to 35% under weak coupling and light load."
    },
    {
      "title": "AutoProbe-GPU",
      "category": "AI",
      "text": "GEARS virtual summer research at North Carolina State University, July–August 2026, supervised by Prof. Huiyang Zhou. Combined LLM-assisted probe synthesis with RTX 4060 hardware validation. Checked compilation and SASS; measured a 2.12% dependent-load latency increase between 128 B and 16 KiB node spacing across three sweeps, without assigning an unverified cache or TLB explanation.",
      "url": "https://github.com/Soberam22/AutoProbe-GPU"
    },
    {
      "title": "Two-Switch Forward Converter",
      "category": "Power",
      "text": "Four-person design project, spring 2026. Contributed to a 50 W, 10 V, 96 kHz converter through output adjustment, PCB assembly and PLECS-to-bench analysis. Helped verify approximately 10 V output and 110 mV peak-to-peak ripple with DC input, Type I control and a 2.2-ohm load, within the 200 mV ripple requirement."
    }
  ],
  "experience": [
    {
      "title": "PCB Engineering Intern · HIKMICRO",
      "dates": "June–September 2026",
      "text": "Layout, routing and revisions in Cadence Allegro 16.6 across assignments involving 30+ boards, including two-layer FPCs, power boards and four-/six-layer test fixtures. Addressed connector alignment, signal spacing, test access and capacitor placement."
    },
    {
      "title": "Embedded Firmware & Vehicle Control Intern · CEMOTO LTD",
      "dates": "June–September 2024 / May–September 2025",
      "text": "Developed STM32 e-bike firmware in C/C++, including FOC adaptation and debugging, sensor acquisition and modular drivers. Implemented operating-state and display logic; used oscilloscopes and multimeters to investigate faults with cross-functional teams."
    }
  ],
  "skills": [
    "Hardware: PCB layout and routing, prototype assembly, soldering and bench testing",
    "Design and simulation: Cadence Allegro 16.6, Design Entry CIS, GstarCAD, KiCad, PLECS and LTspice",
    "Programming: Python, MATLAB and C/C++",
    "Languages: Mandarin (native); English-medium degree and research programme"
  ],
  "email": "ssylm2@nottingham.edu.cn",
  "github": "https://github.com/Soberam22"
};
