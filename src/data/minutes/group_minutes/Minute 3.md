---
id: 3
title: Minute 3 - 26/02
---

# Minute 3 - 26/02, 23:00 - Online

**Attendees:** Carolina, Diogo, João, Raquel, Henrique  

**Absentees:**  

## Workflow:  
1. Grand QC Algorithm Analysis  
2. Milestone 2 Review  
3. Documentation Website  
4. Preparing the Meeting with Supervisors  
5. Backlog Organization  
6. Calendar Analysis  

## Notes:  

### 1. Grand QC Algorithm:  
- We will analyze the algorithm suggested by Professor Bastião for data input. From what we understand, GrandQC is used to check the quality of the images we will process, successfully identifying possible defects. If the tool detects issues in the images, should we exclude them from the system? Confirm this point in tomorrow's meeting.  
- **Use GrandQC** on each image before processing.  
- **Analyze the model output** to determine if the image has artifacts or issues.  
- **Define a criterion** to accept or reject images (e.g., if X% of the image is affected, discard it).  
- **If the image is good**, proceed with normal processing.  
- **If the image is bad**, discard it or request a new one (?).  
- First, run the GrandQC algorithm to identify abstracts. Then, run the tissue identification algorithm **without considering** the abstracts detected by GrandQC, as these are errors and could result in incorrect identifications.  

### 2. Elaboration Phase: Requirements Elicitation:  
- We will upload the PowerPoint presentations used in the milestones, similar to the SIO website - PP with an option to go through slides.  
- Divide milestones into topics, as done in the minutes, with a sidebar.  
- The website needs to be completed. Main page, About Us, and Milestones.  
  - **Main page** - Raquel  
  - **About Us** - João  
  - **Milestones** - Carolina  

### 3. Documentation Website:  
- 8 min presentation
- Requirements elicitation (goals, more detailed state-of-art)
- Functional and nonfunctional requirements (actors, use cases,...)
- Context and state of the art
- System architecture
- Design mockups 
- We will create the architecture to send to the supervisors and get feedback. We need at least 4 APIs (Kaapana, GrandQC, QuPath, HuggingFace). Only one centralized database probably.

### 4. Preparing the Meeting with Supervisors:  
- Discuss the analysis of the GrandQC algorithm.  
- Confirm whether we have only one actor (doctor/researcher).  
- Do we still need login access for each doctor to have their own images and analyses? What should be used for authentication?  
- Ask professors if the number of APIs is correct before implementing the architecture. Only one centralized database? - Show high-level architecture diagram.  
- UI design.  

### 5. Backlog Organization:  
Compare IES backlogs and extract advantages from each group.  
- Use tags ([FIX], [FEATURE]...).  
- Divide major milestones into sub-milestones, e.g., 3, 3.1, 3.2, etc.  
- Raquel found a great feature for our issue template (custom color tags on GitHub).  
- We will use the priority option.  
- User stories will also be issues but with the appropriate tag.  

### 6. Calendar Analysis:  
- Review the calendar to ensure everyone agrees with the distribution. If something is incorrect, communicate it in the next meeting.  
- No concerns for now.

