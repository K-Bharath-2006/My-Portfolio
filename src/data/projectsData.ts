export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  bgGradient: string; // for the premium preview box
  readmeMarkdown: string;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: "agroshield",
    title: "AgroShield",
    description: "An AI-powered crop insurance platform that leverages satellite NDVI analysis, weather intelligence, and deep learning models to automatically verify crop damage claims.",
    tags: ["ReactJS", "React Native", "Node.js", "Express.js", "MongoDB", "FastAPI", "Google Satellite APIs"],
    githubUrl: "https://github.com/bharathk/agroshield",
    liveUrl: "https://agroshield-demo.vercel.app",
    bgGradient: "from-cyan-900/60 to-emerald-900/60",
    features: [
      "Satellite-based crop monitoring",
      "NDVI analysis integration",
      "AI-based damage verification",
      "Geo-tagged crop registration",
      "Digital insurance claim workflow",
      "Microservice-based backend architecture"
    ],
    readmeMarkdown: `# AgroShield - AI-Powered Crop Insurance & Damage Verification

AgroShield is a modern, architecture-driven, and AI-enabled crop insurance platform that accelerates claim settlement for farmers by leveraging satellite imagery analysis and predictive weather telemetry.

---

## 🛠️ Microservice Architecture

The platform operates on a distributed microservice model:
- **Frontend App**: Built with ReactJS (Admin Dashboard) and React Native (Farmer Mobile Client).
- **Core Orchestrator**: Node.js & Express API for data persistence, authentication, and user registration.
- **NDVI & AI Engine**: Python FastAPI microservice that fetches satellite imagery and triggers PyTorch-based damage classification.

\`\`\`python
# FastAPI Endpoint for Satellite NDVI Calculation
from fastapi import FastAPI, HTTPException
import numpy as np

app = FastAPI()

@app.post("/api/v1/ndvi/analyze")
async def analyze_ndvi(near_infrared: list, red: list):
    try:
        nir = np.array(near_infrared)
        r = np.array(red)
        
        # Calculate Normalised Difference Vegetation Index
        ndvi = (nir - r) / (nir + r + 1e-10)
        mean_ndvi = float(np.mean(ndvi))
        
        # Classify damage: NDVI < 0.2 represents severe crop stress/damage
        status = "Healthy" if mean_ndvi > 0.45 else "Stressed" if mean_ndvi > 0.2 else "Damaged"
        
        return {
            "mean_ndvi": round(mean_ndvi, 4),
            "status": status,
            "verification_confidence": 0.945
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
\`\`\`

## 🚀 Key Features

* **Satellite Crop Monitoring**: Connects to Google Earth Engine APIs to pull geo-boundary surface metrics.
* **NDVI Indexing**: Real-time vegetative health calculations to detect crop stress before claim authorization.
* **Biometric Verification**: Geotagging and metadata confirmation to verify farmers on-site.
* **Blockchain-Inspired Claims Ledger**: Immutable logging of inspections.

## 💾 Installation & Dev Setup

1. Clone the core gateway:
   \`\`\`bash
   git clone https://github.com/bharathk/agroshield.git
   cd agroshield/backend
   npm install
   npm run dev
   \`\`\`

2. Initialize python analytical worker:
   \`\`\`bash
   cd ../ai-service
   pip install -r requirements.txt
   uvicorn main:app --reload --port 8000
   \`\`\`
`
  },
  {
    id: "smart-civic",
    title: "Smart Civic System",
    description: "A digital civic management platform where citizens can report public issues using live images and GPS-based location tracking for accurate complaint registration.",
    tags: ["ReactJS", "React Native", "Spring Boot", "Firebase Auth", "Firebase Realtime DB"],
    githubUrl: "https://github.com/bharathk/smart-civic-system",
    liveUrl: "https://smartcivic-demo.vercel.app",
    bgGradient: "from-blue-900/60 to-cyan-900/60",
    features: [
      "GPS issue tagging",
      "Real-time issue tracking dashboard",
      "Automated field worker routing",
      "Proof-of-resolution completion verification"
    ],
    readmeMarkdown: `# Smart Civic System - Public Infrastructure Management

Smart Civic System is a modern enterprise web and mobile suite that bridges communication gaps between citizens and regional municipal authorities. 

---

## 🏛️ System Core Layout

The backend architecture is built with **Spring Boot** (Java) supporting clean MVC abstractions and secure token exchanges, leveraging **Firebase** for low-latency reactive database synchronization.

\`\`\`java
// Spring Boot RestController representing Issue Dispatcher
@RestController
@RequestMapping("/api/v1/issues")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @PostMapping("/report")
    public ResponseEntity<IssueResponse> reportIssue(@RequestBody IssueRequest request) {
        // Enforces spatial limits and uploads geotags
        IssueResponse response = issueService.registerNewIssue(
            request.getTitle(),
            request.getLatitude(),
            request.getLongitude(),
            request.getImageUrl()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
\`\`\`

## 🌟 Capabilities

1. **Citizen Reporting**: Users capture photos of potholes, grid outages, or trash piles. The mobile app automatically injects coordinates.
2. **Authority Console**: Regional managers view heatmaps of reported issues and assign local technicians.
3. **Technician Verification**: Field workers upload the resolve photo, matching GPS telemetry to unlock closure status.
`
  },
  {
    id: "smart-voting",
    title: "Smart Voting System",
    description: "A secure offline voting system that verifies voters using QR codes and biometric fingerprint authentication on a single POS-style device to ensure tamper-proof and accurate vote recording.",
    tags: ["ReactJS", "Django", "SQLite3", "MFS100 Biometric Sensor"],
    githubUrl: "https://github.com/bharathk/smart-voting-system",
    liveUrl: "https://smartvoting-demo.vercel.app",
    bgGradient: "from-violet-900/60 to-purple-900/60",
    features: [
      "Offline localized hardware verification",
      "MFS100 biometric scanning integration",
      "Tamper-proof SQLite voting logs",
      "QR code check-ins"
    ],
    readmeMarkdown: `# Smart Voting System - Offline Biometric Verification

Smart Voting is an embedded hardware-software application designed to run on decentralized point-of-sale (POS) voting units during municipal elections.

---

## 🔌 Hardware / SDK Pipeline

The voting terminal communicates with the **MFS100 Biometric Scanner** via a localized C-wrapper and communicates voter validations to a **Django** web dashboard.

\`\`\`python
# Django view for Voter Fingerprint Matching validation
from django.http import JsonResponse
from .biometric_sdk import verify_fingerprint_template

def validate_voter_credentials(request):
    if request.method == 'POST':
        voter_id = request.POST.get('voter_id')
        scanned_template = request.POST.get('fingerprint_raw')
        
        # Load local database template
        registered_template = get_registered_biometrics(voter_id)
        
        # Compare biometric structures using SDK
        is_verified = verify_fingerprint_template(scanned_template, registered_template)
        
        if is_verified:
            # Emit secure token authorizing ballot unlocking
            ballot_token = generate_secure_ballot_token(voter_id)
            return JsonResponse({"status": "SUCCESS", "token": ballot_token})
        return JsonResponse({"status": "FAILED", "reason": "Biometric mismatch"}, status=400)
\`\`\`

## 🛡️ Security Guarantees

* **Zero Network Exposure**: Unit operates strictly offline.
* **Tamper Prevention**: SQL files are signed with an active device cryptographic key.
* **Voter Anonymity**: Voter biometrics and ballot submissions are written in separate databases with randomized timelines to prevent relational correlation.
`
  },
  {
    id: "tender-management",
    title: "Tender Management System",
    description: "A digital tender management platform for handling tender publication, submission, and tracking workflows with secure bidding pipelines.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication"],
    githubUrl: "https://github.com/bharathk/tender-management",
    liveUrl: "https://tender-management-system-three.vercel.app",
    bgGradient: "from-amber-900/60 to-orange-900/60",
    features: [
      "Multi-role user authentication",
      "Encrypted commercial bids",
      "Auto-ranking of lowest bids (L1 logic)",
      "Audit trail logs"
    ],
    readmeMarkdown: `# Tender Management Platform

An enterprise MERN stack portal designed to streamline government and corporate procurement bidding workflows with security and transparency.

---

## 🔒 Encrypted Bid Submissions

All pricing proposals are encrypted before database insertion to prevent vendor collusion or internal leakage before public opening dates.

\`\`\`javascript
// Node/Express controller for Encrypted Bid Submission
const crypto = require('crypto');
const Bid = require('../models/Bid');

exports.submitBid = async (req, res) => {
  try {
    const { tenderId, vendorId, rawAmount } = req.body;
    
    // Encrypt raw amount using server public key
    const buffer = Buffer.from(rawAmount.toString(), 'utf8');
    const encryptedData = crypto.publicEncrypt(
      process.env.PUBLIC_KEY,
      buffer
    );

    const newBid = new Bid({
      tender: tenderId,
      vendor: vendorId,
      encryptedProposal: encryptedData.toString('base64'),
      submittedAt: Date.now()
    });

    await newBid.save();
    res.status(201).json({ success: true, message: "Bid lodged successfully." });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
\`\`\`

## 📈 Functional Outline

1. **Publishing**: Administrators release tenders detailing specifications, timelines, and pre-qualification metrics.
2. **Bidding**: Registered contractors submit proposals.
3. **L1 Evaluation**: Once deadlines pass, the system automatically decrypts and ranks proposals from lowest cost to highest.
`
  },
  {
    id: "tech-overflow",
    title: "Tech Overflow",
    description: "A technical community discussion platform where users can ask questions, collaborate on technical topics, and upvote answers.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Redis"],
    githubUrl: "https://github.com/bharathk/tech-overflow",
    liveUrl: "https://techoverflow-demo.vercel.app",
    bgGradient: "from-rose-900/60 to-red-900/60",
    features: [
      "Threaded discussion forums",
      "Real-time answer edits (WebSocket)",
      "Caching of trending questions (Redis)",
      "Tag-based classification system"
    ],
    readmeMarkdown: `# Tech Overflow - Developer Q&A Platform

A community forum application built for teams to document tribal knowledge, troubleshoot exceptions, and build a collaborative developer codebase knowledge base.

---

## ⚡ Caching Layer Integration

To support thousands of simultaneous concurrent readers, the platform caches high-traffic trending questions in **Redis**, avoiding repetitive heavy MongoDB lookup aggregates.

\`\`\`javascript
// Redis Middleware for Trending Questions Retrieval
const redisClient = require('../config/redis');

async function getTrendingCached(req, res, next) {
  const cacheKey = 'questions:trending';
  
  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return res.json(JSON.parse(cachedData)); // Cache Hit
    }
    
    // Cache Miss: Delegate to database controller
    next();
  } catch (err) {
    console.error('Redis cache error: ', err);
    next();
  }
}
\`\`\`

## 🛠️ Features

* **Rich Text Editor**: Support markdown inside query posts and responses.
* **Websocket Notifications**: Instant alerts when your questions receive upvotes or solutions.
* **Reputation Engine**: Users earn badges and access moderating privileges as their posts accumulate positive responses.
`
  }
];
