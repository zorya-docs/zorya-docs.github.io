---
id: 3
date: 2025-02-27
title: Minute 3 - 27/02
---

# Minute 3 - 27/02, 10:35 - IEETA

**Attendees:** 
Carolina, Diogo, João, Raquel, Henrique, Supervisor Carlos Costa

**Absentees:** Supervisor Luís Bastião  

## Workflow:
1. Contextualization of the project
2. Analysis of the GrandQC algorithm
3. Confirmation of user roles
4. Authentication requirements
5. API structure and database architecture
6. UI Design
7. Other topics

## Notes:
### 1. **Contextualization of the Project**
   - Database should be more document-oriented.
   - Structure similar to Google Maps (annotations by area or specific classification A, B, C).
   - Research existing annotation structures.
   - **Initial phase:** Simulate a backend, test the model, create a database, analyze images, store results.
   - **Milestones:**
     1. Annotation with metadata and database integration (medium+ difficulty).
     2. Tool triggered by image (high difficulty).
     3. Merge both features (low difficulty).
   - **Dicoogle:** Embed code into a plugin to link files to the database.
   - Visualization tool to consume annotations.
   - Multiple databases possible: metadata DB, annotation DB, algorithm DB.
   - Scalable services (5 to 50 APIs possible, normalized in QuPath).
   - Request images from Prof. Bastião via email.
   - **DICOM images in Dicoogle** allow multi-level API usage (layers ≠ Kaapana layers).
   - Ability to select an area and run algorithm(s).
   - Prof. Carlos Costa presented a PathoBox video showcasing image selection and annotation.
   - **User Flow:** Select area → View all annotations → Integrate annotation tool.

### 2. **Analysis of the GrandQC Algorithm**
   - Tool presented to Prof. Carlos Costa.
   - He confirmed it makes sense to implement it.

### 3. **Confirmation of User Roles**
   - **Three user roles:**
     1. **Admin** - Manages platform.
     2. **Technician** - Backend operations only.
     3. **Doctor/Researcher** - Uses the tool.
   - No additional user roles required.

### 4. **Authentication Requirements**
   - Authentication will be implemented but is not a critical feature.
   - Discussed whether each doctor needs login to manage individual images and analyses.

### 5. **API Structure & Database Architecture**
   - More than one database required.
   - Number of APIs depends on service integration.
   - Prof. Carlos Costa approved the high-level architecture diagram.
   - Next step: Develop detailed architecture.
   - Image loading process in the frontend might differ based on storage strategy.

### 6. **UI Design**
   - Existing visualizers can be used in mockups.
   - Define viewing interface for images and metadata.
   - **Key UI Features:**
     - **Search bar** for archive browsing.
     - **Image viewer** with metadata display.
     - **Crop tool** for region selection.
     - **Existing annotation overlay** for selected regions.
   - Final UI design will resemble existing solutions but customized for project needs.

### 7. Other topics 
   - **Image Upload Process** - We were wondering how image uploads would work in the app.
   - **Standard practice:** Images uploaded by backend services.
   - **Proposed solutions:**
     1. Direct network transfer to the archive.
     2. Technician uploads to the server (takes minutes to hours).
   - **Workflow:** Technician uploads → Doctor selects area → Runs algorithm → Frontend consumes results.
   - Doctors unlikely to handle image uploads themselves.

