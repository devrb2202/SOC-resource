---
title: SIEM Triage for SOC
description: Hands-on SIEM investigation using Splunk to analyze Linux security logs, detect brute force attacks, privilege escalation, and persistence techniques through real-world SOC scenarios.
date: 2026-02-26
category: Blue Team / SOC
---

[← Home](/)

# 📧 SIEM Triage for SOC

Hands-on SIEM investigation using Splunk to analyze Linux and Windows security logs, detect brute force attacks, privilege escalation, and persistence techniques through real-world SOC scenarios.

---

## 🎯 Objective

- Learn how to properly investigate alerts in a SOC environment.
- Understand how to investigate brute-force attacks on Linux systems.
- Discover the persistence mechanism on Windows systems.
- Analyse a web shell on a vulnerable web server.
- Learn how to investigate alerts for three given scenarios using Splunk.

---

## 🛠️ Tools Used

- Splunk

---

## 🧪 Investigation Process

1. Detection & Initial Triage
2. Scope & Impact Analysis
3. Timeline Reconstruction
4. Access Verification
5. Privilege Escalation Analysis
6. Persistence Hunting

---

## 🔍 Findings

- Failed Login Attempts on john.smith
- Duration of the Brute Force Attack
- Privilege Escalation Target Account
- Persistence Account Created

---

## 📚 Lessons Learned

- Importance of Authentication Monitoring
- Timeline Analysis Skills
- Understanding Privilege Escalation
- Persistence Detection Techniques
- End-to-End Attack Chain Awareness

---

## 📷 Evidence & Analysis

### 1️. Failed Login Attempts on john.smith
![Image](/splunk/splunk01.png)

**Explanation:**  
Logs showed repeated Failed password events for john.smith, indicating brute force attack.

**Impact:**
- Increased risk of credential compromise
- Possible account takeover attempts
- Higher chance of unauthorized system access
- Early indicator of brute-force activity

---

### 2. Duration of the Brute Force Attack
![Image](/splunk/splunk02.png)

**Explanation:**  
By comparing the earliest and latest failed login timestamps, the total attack window was calculated

**Impact:**
- Indicates weak brute-force protection mechanisms
- Increased exposure to automated attacks
- Higher probability of successful password guessing
- Lack of effective rate limiting or intrusion prevention

---

### 3. Privilege Escalation Target Account
![Image](/splunk/splunk03.png)

**Explanation:**  
The attacker used sudo to execute su, gaining full administrative privileges.

**Impact:**
- Full administrative control gained by the attacker
- Ability to modify system configurations
- Potential deployment of malware or backdoors
- Compromise of system integrity and confidentiality

---

### 4. Persistence Account Created
![Image](/splunk/splunk04.png)

**Explanation:**  
Logs from useradd / adduser revealed the creation of a new account after privilege escalation.

**Impact:**
- Enables long-term unauthorized access
- Bypasses credential reset efforts
- Increases difficulty of incident remediation
- Supports future lateral movement and reinfection

---