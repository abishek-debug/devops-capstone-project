# DevOps Capstone Project — End-to-End CI/CD Pipeline

A complete DevOps pipeline for a Node.js web application, demonstrating continuous integration, continuous deployment, containerization, infrastructure monitoring, and automated backups.

## 📌 Project Overview

This project automates the full software delivery lifecycle:

**Developer pushes code → GitHub → Jenkins (build & test) → Docker Hub (image registry) → AWS EC2 (deployment) → Prometheus/Grafana (monitoring)**

## 🛠️ Tech Stack

| Layer | Tools |
|---|---|
| Source Control | Git + GitHub |
| CI/CD | Jenkins (on AWS EC2) |
| Application | Node.js + Express |
| Containerization | Docker + Docker Hub |
| Infrastructure | AWS EC2 (Ubuntu) |
| Monitoring | Prometheus, Grafana, Node Exporter |
| Automation | Bash + Cron |

## 🏗️ Architecture

1. Developer pushes code to GitHub
2. GitHub webhook triggers a Jenkins build automatically
3. Jenkins pipeline:
   - Checks out the latest code
   - Builds a Docker image
   - Pushes the image to Docker Hub
   - SSHes into the App Server and deploys the new container
4. Prometheus scrapes system metrics; Grafana visualizes them on a live dashboard
5. A cron job runs a daily bash script to back up app data and logs

## 🚀 Setup & Run Locally

```bash
git clone https://github.com/abishek-debug/devops-capstone-project.git
cd devops-capstone-project
npm install
node app.js
```

App will be available at `http://localhost:3000`

## 🐳 Run with Docker

```bash
docker build -t devops-capstone-app .
docker run -d -p 3000:3000 --name capstone-container devops-capstone-app
```

## 🔄 CI/CD Pipeline Flow

The `Jenkinsfile` in this repo defines a 4-stage pipeline:

1. **Checkout** — pulls the latest code from GitHub
2. **Build Docker Image** — builds the app into a container image
3. **Push to Docker Hub** — publishes the image to a Docker Hub registry
4. **Deploy to App Server** — SSHes into the production EC2 instance and redeploys the container with zero manual steps

Triggered automatically via a **GitHub webhook** on every push to `main`.

## 📊 Monitoring

- **Prometheus** collects system metrics (CPU, memory, disk, network) via Node Exporter
- **Grafana** dashboard (imported from community template ID 1860) visualizes these metrics in real time
- Accessible at `http://<app-server-ip>:3001`

## 💾 Backups

A bash script (`backup.sh`) runs daily via cron at 2:00 AM:
- Archives the app source code and container logs
- Compresses into a timestamped `.tar.gz`
- Automatically deletes backups older than 7 days

## 📁 Project Structure
.
├── app.js # Main application file
├── package.json # Node.js dependencies
├── Dockerfile # Container build instructions
├── .dockerignore
├── Jenkinsfile # CI/CD pipeline definition
├── backup.sh # Automated backup script
└── README.md




## 👤 Author

Abishekmani — DevOps Capstone Project
