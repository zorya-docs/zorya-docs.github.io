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

---

## **5. User Stories and Use Cases**

---

## **6. System Architecture**

---

## **7. Domain Model**

---

## **8. Mock-ups**



