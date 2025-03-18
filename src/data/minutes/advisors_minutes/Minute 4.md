---
id: 4
date: 2025-03-06
title: Minute 4 - 06/03
---

# Minute 4 - 06/03, 10:00 - IEETA

**Attendees:**  
Carolina, Diogo, João, Raquel, Henrique, Supervisors (Luís Bastião and Carlos Costa)

**Absentees:**  


## Workflow:
1. Presentation of requirements (shared via Slack if time is limited)
2. Architecture review and feedback request
3. State of the art
4. Database integration with Dicoogle
5. Definition of user roles (Are there only three? Doctor, technician, admin?)
6. OpenHI database example discussion

## Notes:
### 1. **Architecture Review**
   - Presented architecture; feedback indicated that most points were relevant for PI rather than the project itself.
   - Developed an upload form for concept testing.
   - Plan to work with image segments.
   - Reviewed existing image viewers.
   - Analyzed QuPath and Kaapana to determine if existing tools meet our needs.
   - Emphasis on abstraction to avoid unnecessary implementation efforts.
   - Implemented drag-and-drop functionality.
   - Initially, images will be in PNG/JPG format to keep processing lightweight.

### 2. **Database & Image Processing**
   - Created a database to store images and their cropped versions.
   - Defined a workflow where one user uploads images for model training, categorizing into A, B, or C types.
   - Model training plan: 80% dataset for training, 20% for validation.
   - Discussed connecting image repository with annotation and metadata.

### 3. **Frontend & Backend Development**
   - Developed mockups for the frontend.
   - Backend architecture discussion and validation.
   - QuPath was confirmed as a relevant tool, while Kaapana is not directly part of the platform.
   - Addressed a question regarding Dicoogle integration and its abstraction for search functionalities.
   - Defined API endpoints, with Dicoogle as one possible endpoint.

### 4. **Image Visualization & Annotations**
   - Reviewed potential image visualization tools:  
    <a href="https://github.com/ImagingDataCommons/slim?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">Slim Viewer</a>
   - Discussed state of the art and image repository enrichment.
   - Image classification crucial for workflow management.
   - Automatic annotation tools could support doctors by identifying key image areas.
   - Pre-annotated images save time in medical analysis.
   - **User Personas:**
     - **Pulmonologist:** Specialist focused on detailed image analysis.
     - **Lead Doctor:** Responsible for distributing workload among the team.

### 5. **Key Questions Raised to Supervisors**
   - Should users be able to create annotations? How should manual annotations be distinguished from AI-generated ones?
   - Manual annotations and tool-generated annotations would be ideal; the only difference is how they are created. A distinction should be made between AI-generated annotations and non-AI annotations.

