---
id: 5
date: 2025-03-13
title: Minute 5 - 13/03
---

# Minute 5 - 13/03, 09:00 - Online

**Attendees:**  
Carolina, Diogo, João, Raquel, Henrique, Supervisor Luís Bastião

**Absentees:**  
Supervisor Carlos Costa

## Workflow:
1. Request feedback on Figma design
2. Other topics

## Notes:
### 1. **Frontend feedback**
   - **Datasets:**
     - Datasets should be displayed on the main page.
     - Tags should be positioned at the top, but the dataset card should also display tags, such as the associated pathology.
     - Free-text search functionality.
     - Only pathology anatomy images should be used.
     - The application is exclusively for pathology anatomy.
     - Add a "Create Dataset" button.
     - Patient names should not be displayed in the general dataset list; this information belongs inside the dataset details.
     - Missing dataset descriptions, including staining type.
     - Clicking on a dataset should display all studies before accessing the viewer.
     - Add an intermediate page with the studies before proceeding to the viewer.
     - A dataset may contain multiple studies from different patients; each study belongs to a single patient.

   - **Image Viewer**
      - Utilize an existing image viewer.
      - If time allows, develop a more advanced viewer later.
      - "File" and "Export" options make sense; "Open" does not.
      - Images should be transferred via REST API.
      - "Analyze" is relevant; "Tools" and "Automate" might not be necessary.
      - Magnification: Use values between 0 and 40X.

   - **Project & Metadata**
      - Staining issue resolved.
      - Metadata should include organ type and AI-generated analysis results, possibly highlighted in a different color to indicate they may not be 100% accurate.
      - Metadata should be positioned at the top of the page.

   - **Workflows**
      - The organization is slightly confusing; consider restructuring.
      - Rename "Workflow" to "Worklist," "Action," "Trigger," or "Configuration."
      - Consider a better name between "Workflow" and "Worklist."
      - Users should automatically receive study cases based on predefined algorithmic rules.
      - Implement an "Action" feature where users and models to be applied are specified, then assign images accordingly, even from multiple datasets.
      - Introduce a "Worklist" page similar to the datasets page, listing studies with a thumbnail and a "View" button.
      - The platform should optimize the integration of AI models into daily medical practice.
      - Example use case: A user wants to apply a lung identification algorithm.
      - Another "Action" could apply additional models exclusively to lung studies.
      - Define a set of conditions:
      - If an image fails quality control, notify the user.
      - Example: If a certain algorithm highlights more than X cells, another model should be applied automatically.
      - Add logs to the "Actions" page to track successful and failed workflows. 

   - **Models (Algorithms)**
      - Rename "Models" to "Algorithms."
      - Add a search bar.
      - Models should have tags indicating:
      - Compatible image types (e.g., specific organs).
      - Metadata indicating the applicable data types (restrictions/validations).
      - Add a section to display the expected output of each algorithm:
      - Some may only identify organs, while others perform more complex tasks like cancer cell segmentation.
      - Tabs:
         - **Input Description**
         - **Output Description**
         - **Model Details:**
      - Version and accuracy should be displayed together.
      - Version number should be positioned near the name.
      - URL should be placed below the name if available.
      - Add tags.
      - **Importing Models:**
         - Track the source of imported algorithms.
         - Display the logo of the originating organization.
         - Clicking "Analyze" in the viewer should display available algorithms for the image and allow users to execute them.

   - **Assigned Work**
      - Configure an action to automatically distribute work when a study is uploaded.
      - Upon upload, images are stored, and a list of actions is triggered.
      - Work distribution should be automated.
      - In case of incorrect model-based assignment, manual reassignment should be possible but not a primary focus.
      - Improve visibility by creating a dedicated page for assigned work.
      - Use a table or other UI elements to display metadata.
      - **Event Tracking:**
         - Instead of listing individual dataset uploads, summarize events (e.g., "20 lung studies uploaded, 10 Y studies uploaded").
         - Display failed actions on the "Actions" page.
         - The "Assigned Work" page should provide a more operational summary.
         - This page should be personalized for the logged-in user.
      - **Notifications:**
         - Notify users when studies are assigned.
         - The "Assigned Work" page makes sense to include.
         - Display errors related to the logged-in user.

   - **Admin Panel**
      - Relevant but not a high priority.
      - If no model is available to identify organs, avoid blocking functionality.
      - Consider implementing a basic computer vision algorithm for organ classification among a small set of predefined options.
      - If a complex viewer is not feasible, generate a JPG for gradual improvements.

### 2. **Other Topics**
- If we don't find a model to identify organs, we should try not to block and move forward. We could implement a computer vision algorithm that can classify among 4 or 5 organs and proceed. If the viewer cannot be too complex, we can generate a JPG for gradual work.
