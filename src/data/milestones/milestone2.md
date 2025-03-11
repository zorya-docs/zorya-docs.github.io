---
id: 'milestone2'  
title: 'MS 2 - Elaboration'
iframe_url: 'https://docs.google.com/presentation/d/e/2PACX-1vQ0X0bVUTxH5vdvb1qO8J5nBNr8RvlBF4YXcSzi3FcIgHmS6vACpFqgxRX0lTyX9RZHagTcKH3peb3N/embed?start=false&loop=false&delayms=3000"'
pdf_url: '/milestones/milestone2.pdf'
topics:
  - 'Context and Goals'
  - 'State of the art'
  - 'Requirements'
  - 'Actors'
  - 'User Stories'
  - 'Use Cases'
  - 'System Architecture'
  - 'Domain Model'
  - 'Mock-ups'

---

#### Date: 11/03/2025

## **1. Contextualization and Goals**
The project aims to develop an **information system for digital pathology**, enabling **indexing, searching, and processing of Whole Slide Images (WSI)**. AI-driven workflows will be incorporated to **automatically annotate images**, facilitating medical diagnosis by identifying **cellular necrosis, muscle lesions, and other pathological features**.

#### **Main Features:**
- **Characteristics-driven search**: Enables searches based on **organ type, cellular patterns, diagnosis, and specific features** such as mitosis.
- **Sample comparison**: Supports structured **comparative studies between different tissue types and pathologies**.
- **AI-assisted Automated Annotation**: Uses **machine learning models** to categorize and label images.
- **Improved Workflow**: Facilitates **automatic task distribution** among specialists.
- **Normalization with medical ontologies**: Ensures interoperability through **SNOMED CT, ICD-O**, and other standards.

---

## **2. State of the Art**

The field of **digital pathology** has seen significant advancements, leading to the development of various tools that address different aspects of image analysis, annotation, and AI-assisted diagnosis. However, many of these solutions remain **fragmented**, lacking a fully integrated workflow that meets the needs of both pathologists and researchers.

### **Comparison of Existing Solutions**  
The table below presents a comparative analysis of popular tools in digital pathology, evaluating essential features for an integrated system.

| Tasks | QuPath | OpenSlide | ImageJ | CellProfiler | Kaapana | Zorya |
|-------|--------|-----------|--------|-------------|---------|-------|
| **Diverse Image Repositories** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Assign Cases to Specialists** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **User Management** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Image Annotation Tools** | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ |
| **AI-Assisted Diagnosis Integration** | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |

### **Key Limitations of Existing Solutions**  
- **QuPath**: Excellent for **image annotation**, but lacks **user management** and does not natively integrate AI-assisted diagnosis.  
- **OpenSlide**: Primarily focused on **image visualization**, with no support for advanced features like case management or annotation.  
- **ImageJ** and **CellProfiler**: Strong in **image processing and analysis**, but lack **user management, case handling, and AI integration**.  
- **Kaapana**: Provides **user management and AI integration**, but does not include **native annotation tools**.  
- **Zorya**: The most **comprehensive solution**, covering all analyzed functionalities, but may present challenges when integrating with existing hospital workflows.  

### **How Our Project Differentiates Itself**  
Our system aims to **unify essential functionalities**, offering:  
✅ **Support for diverse image repositories**, handling multiple formats.  
✅ **Automated case assignment** among specialists.  
✅ **User management** with role-based permissions.  
✅ **Advanced image annotation tools** to assist pathologists.  
✅ **AI-powered diagnosis integration**, enabling automated image analysis and decision support.  

By addressing the **limitations of existing solutions**, our project provides a **more integrated and efficient** digital pathology system.


---

## **3. Requirements**
### <span style="text-decoration: underline;">Functional Requirements</span> <span style="text-decoration: none;">(FR)</span>


#### User Interface Requirements
To be implemented in the web-based dashboard.

- The users can explore and visualize whole-slide images (WSI) with zoom, pan, and annotation tools.
- The users can search and filter datasets based on metadata, pathology type, and AI model results.
- The users can tag datasets with relevant metadata.
- The users can export selected datasets for external use.
- The users can monitor the training and validation of AI models.
- The users can integrate and run AI models from MONAI Zoo, Hugging Face, and QuPath.
- The users can benchmark AI models on different datasets.

#### Medical Interface Requirements
To be implemented in the medical research interface.

- The medical researchers can access and manage pathology datasets.
- The medical researchers can annotate medical images.
- The medical researchers can collaborate with other institutions in federated learning experiments.
- The medical researchers can monitor the results of AI model training and validation.
- The medical researchers can access the version history of medical images and AI models.
- The medical researchers can receive push notifications regarding dataset updates, AI performance, and research progress (important events updates).
- The medical research leader can assign different datasets to specialized doctors.

#### Storage and Encoding Requirements
To be implemented in the storage module.

- The system must support various medical image encoding formats, such as AVIF, JPEG XL, and WebP.
- The system must implement an intelligent archiving strategy to minimize storage usage while maintaining fast access.
- The system must support streaming of image regions of interest for real-time visualization.

#### Sales and Integration Requirements
To be implemented in the external tool integration module.

- The system must provide an API for integrating with external research tools.
- The system must allow seamless import and export of medical imaging data in DICOM format.
- The system must allow integration with external federated learning frameworks.

#### Administration Requirements
To be implemented in the administration interface.

- The administration staff can manage user accounts and access roles.
- The administration staff can monitor dataset usage and storage consumption.
- The administration staff can register new research institutions in the federated learning network.
- The administration staff can access logs of AI training and dataset modifications.

#### Access Requirements (User Authentication and Security)
To be implemented in the authentication module.

- The system must support user login and logout.

#### Federated Learning Requirements
To be implemented in the AI training module.

- The system must support federated learning across multiple institutions without sharing raw data.
- The system must allow users to train AI models on local datasets and share only model updates.
- The system must support model orchestration using platforms such as MONAI Zoo, Hugging Face.

### <span style="text-decoration: underline;">Non-Functional Requirements</span> <span style="text-decoration: none;">(NFR)</span>

#### Performance
- The system should maintain consistent response times as the user base or data volume increases.
- The system should be able to handle an increasing number of transactions or requests per unit of time.

#### Security & Compliance
- The system must enforce secure authentication.

#### Usability & Accessibility
- The system must provide an intuitive user interface for researchers with minimal training.
- The system should allow the use of more than one browser.

#### Reliability & Availability
- If the system crashes, the data should not be lost.

#### Maintainability & Extensibility
- The system must use a modular architecture to allow future enhancements without major redesigns.
- The system must provide clear API documentation for external tool integration.
---

## **4. Actors**

- #### Doctor / Researcher  
  A medical specialist with expertise in a specific field. They can annotate medical images, create and execute workflows, and run AI models for analysis.

- #### Team Leader  
  A senior Doctor/Researcher responsible for overseeing projects and assigning tasks to specialists based on their expertise.

- #### Admin  
  Oversees platform administration, managing user accounts, permissions, and system access.

- #### Data Manager  
  A technical expert responsible for uploading and managing medical images from the backend, ensuring data integrity and availability.


---



## **5. Personas**
- #### Dr. Ana Rodrigues – Pulmonology Specialist  
  **Background:**  
  - Age: 42  
  - Occupation: Senior Pulmonologist at a research hospital  
  - Experience: 15+ years in digital pathology and lung disease research  
  - Technology Proficiency: Intermediate, familiar with medical imaging software but not an IT expert  

  **Goals & Needs:**  
  - Needs quick and efficient access to digital pathology slides related to lung diseases.  
  - Wants to annotate images with observations using AI-driven diagnosis.  
  - Prefers a user-friendly interface that minimizes time spent on technical processes.  
  - Requires the ability to compare cases across multiple datasets and institutions.  
  - Wants a way to verify AI model suggestions before making a final diagnosis.  

  **Challenges:**  
  - Limited time for managing and organizing datasets.  
  - Concerned about accuracy and reliability of AI models.  
  - Needs integration with existing hospital systems for seamless workflow.  
  - Lack of repositories with a wide diversity of medical images and annotations.  

- #### Dr. Miguel Almeida – Lead Researcher & Team Coordinator  
  **Background:**  
  - Age: 50  
  - Occupation: Head of the Medical Imaging Department  
  - Experience: 20+ years in pathology, manages multiple research teams  
  - Technology Proficiency: Advanced, understands AI workflows and data management  

  **Goals & Needs:**  
  - Wants to organize and distribute workload among specialists in his team.  
  - Needs a dashboard to monitor dataset annotations and team contributions.  
  - Requires collaboration tools to share insights between researchers.  
  - Wants to ensure federated learning compliance, allowing secure data usage across institutions.  
  - Requires a platform that categorizes medical images by tissue type, organ, and pathology, allowing him to efficiently assign cases to specialists (e.g., pulmonologists, cardiologists).  

  **Challenges:**  
  - Balancing team efficiency while ensuring high-quality research.  
  - Ensuring secure access management for different roles within the research team.  
  - Difficulty in finding a scalable solution that integrates AI models, datasets, and medical expertise.  
  - Lack of platforms that properly categorize medical images, making it harder to distribute cases to the right specialists.  



- #### João Alberto - System Administrator  
  **Background:**  
  - Age: 35  
  - Occupation: IT Administrator at a healthcare institution  
  - Experience: 10+ years in IT management and system administration  
  - Technology Proficiency: Advanced, with expertise in managing healthcare systems, servers, and user access controls  

  **Goals & Needs:**  
  - Needs a secure and efficient way to manage user access and institution registrations.  
  - Wants a simple interface for creating and deleting user accounts and institutions.  
  - Requires access to logs for auditing and troubleshooting purposes.  
  - Aims to ensure smooth operation and compliance of the digital pathology system.  
  - Seeks to avoid system overload by controlling user permissions and activities.  

  **Challenges:**  
  - Limited visibility into medical-specific workflows, making it difficult to understand clinical nuances.  
  - Needs to keep track of system logs, errors, and user activity without overwhelming himself with unnecessary technical details.  



## **6. Scenarios**

- #### Scenario 1: Dr. Ana Rodrigues – Efficient Lung Disease Diagnosis  
  **Context:**  
  Dr. Ana Rodrigues, a pulmonology specialist, is reviewing whole-slide images from a new dataset on lung cancer biopsies. She wants to quickly annotate key regions of interest and compare them with previous cases.  

  **Steps:**  
  - Logs into Zorya and searches for lung pathology datasets.  
  - Uses filters to refine results based on tissue type, pathology, and AI model predictions.  
  - Opens a whole-slide image in the viewer and zooms into suspicious regions.  
  - Uses the annotation tool to highlight abnormalities and add comments.  
  - Analyzes the current case with previously annotated cases for validation.  
  - Saves annotations, which are automatically stored in the database.  

  **Expected Outcome:**  
  Dr. Ana efficiently navigates through lung pathology datasets, making precise annotations.  


- #### Scenario 2: Dr. Miguel Almeida – Distributing Cases to Specialists  
  **Context:**  
  As the head of the Medical Imaging Department, Dr. Miguel Almeida needs to allocate pathology datasets to the right specialists, ensuring efficient workflow across different research teams.  

  **Steps:**  
  - Logs into Zorya and accesses the dataset management dashboard.  
  - Uses the categorization system to filter medical images by organ, tissue type, and pathology.  
  - Identifies a set of lung pathology cases that require further analysis.  
  - Assigns these cases to Dr. Ana Rodrigues, the pulmonology specialist.  
  - Sends a notification with dataset access details.  

  **Expected Outcome:**  
  Dr. Miguel successfully distributes cases based on specialist expertise, ensuring that each dataset is reviewed by the most qualified medical professional.  


- #### Scenario 3: Dr. Ana Rodrigues – Validating AI Model Predictions  
  **Context:**  
  Dr. Ana wants to verify the performance of an AI model in detecting lung diseases in pathology images.  

  **Steps:**  
  - Selects a pre-trained AI model from the platform.  
  - Runs the model on a dataset of lung biopsy slides.  
  - Reviews the automated annotations and predictions made by the AI.  
  - Uses the annotation tool to correct or validate AI-detected abnormalities. *(Do we perform this step, or do we only add human annotations and categorize them separately as AI annotations and human annotations?)*  
  - Submits feedback on AI performance for further improvements.  

  **Expected Outcome:**  
  Dr. Ana ensures that the AI model is accurately detecting lung diseases, contributing to model refinement and improved diagnostic reliability.  


- #### Scenario 4: Creating a Workflow  
  **Context:**  
  Dr. Miguel Almeida needs to set up a structured workflow to manage pathology case analysis efficiently. He wants to ensure cases are categorized, assigned to the right specialists, and analyzed using AI support.  

  **Steps:**  
  - Sets up workflow parameters, including tissue type, pathology type, priority level, and assigned specialists.  
  - Automatically assigns cases using platform filters based on expertise and workload.  
  - Uses AI models to generate preliminary annotations.  
  - Stores final annotations, marking cases as complete for future reference.  

  **Expected Outcome:**  
  Dr. Miguel ensures an organized workflow, optimizing case distribution, AI-assisted analysis, and collaboration within the research team.  


## **7. User Stories and Use Cases**

### **Use Cases**
-  Make Annotations on a Medical Image (Whole-Slide Image - WSI)
-  Filter and Search Datasets by Tissue Type, Organ, Pathology, etc.
-  Choose Algorithm for a Specific Image
-  Analyze Datasets from a Selected Institution
-  Export Datasets
-  Receive Notifications and Alerts About Important Events
-  Compare Different AI Models on a Dataset
-  Create a New Dataset from Selected Images
-  Edit and Update Metadata of an Image
-  Configure Custom Alerts
-  Compare a Medical Image with Previous Cases
-  Validate the Predictions of an AI Model
-  Distribute Work Among Specialists
-  Create, Use a Workflow
-  Use an External Model Through an API
-  Send Notifications to Specialist Doctors


---

## **8. System Architecture**

---

## **9. Domain Model**

---

## **10. Mock-ups**



