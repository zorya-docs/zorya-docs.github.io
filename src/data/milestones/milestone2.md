---
id: 'milestone2'  
title: 'MS 2 - Elaboration'
iframe_url: 'https://docs.google.com/presentation/d/e/2PACX-1vQ0X0bVUTxH5vdvb1qO8J5nBNr8RvlBF4YXcSzi3FcIgHmS6vACpFqgxRX0lTyX9RZHagTcKH3peb3N/embed?start=false&loop=false&delayms=3000"'
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

## **5. Personas**

---

## **6. User Stories and Use Cases**

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

## **7. System Architecture**

---

## **8. Domain Model**

---

## **9. Mock-ups**



