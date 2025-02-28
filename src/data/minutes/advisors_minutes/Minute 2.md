---
id: 2
date: 2025-10-10
title: Minute 2 - 20/02
---

# Minute 2 - 20/02, 9:00 - IEETA

**Attendees:** Carolina, Diogo, João, Raquel, Henrique, Supervisors (Luís Bastião and Carlos Costa)

**Absentees:**

## Workflow:
1. Communication platform beyond email
2. Repositories
3. Meeting minutes on GitHub
4. Project contextualization
5. Application use cases
6. Other topics

## Notes:
### 1. **Communication Platform Beyond Email**
   - **Slack** - create a group with all members - _**`João`**_ is responsible for this.

### 2. **Repositories:**
   - Organization under deti - **bioinformatics-ua**
   - Repository - **PathoWorkflow**
   - Backlog for better tracking

### 3. **Meeting Minutes**
   - Upload these minutes to the shared repository's wiki.

### 4. **Project Contextualization**
   - Initially, focus more on the interface and understanding the dataset concept and models to be used. For each image, understand the associated metadata. Multiple users with different roles.
   - Henrique explains our understanding of the project.
   - Prof. Bastião agrees, stating that it is the final goal; however, initially, we need to focus on something more central. Although we have **Dicoogle**, we still need to build our own database. For each image, we need to identify the organ, the available metadata, and the datasets of that category.
   - We can create our algorithm registry and store it in the database. Catalog of publicly available algorithms. Whenever data enters the system, we create a service to understand the organ, staining, and perform extraction. Based on this, we check our model service to determine which models are relevant for that image.

### 5. **Guidance to Start the Project**
   - **Well-documented API** - Start creating sequence diagrams to better understand the connections.
   - **Define entities** -> relationships -> then define use cases.
   - Analyze qupath, kapanaa, dicoogle - evaluate these tools and understand their functionalities, analyzing pathologies - pathobox.bmd.
   - Integrate various components - software engineering.
   - Software tailored to users - gain literacy in the field.
   - Detect the type of tissue in the inserted image + metadata.
   - Use **open-source algorithms** with an API.
   - Enable **image section selection** - send to the service and check results - Dicoogle already accepts this type of images.
   - Deepen knowledge in the field.

### 6. **Application Use Cases**
   - Currently, doctors manually input visualization details; our software should allow for more efficient, faster, and personalized cataloging.
   - Later, we can consult doctors to better understand their needs.

### 7. **Other Topics:**
   - Organize everything in the shared repository (minutes, milestones, backlog, calendar, etc.) to facilitate better guidance from the advisors.
