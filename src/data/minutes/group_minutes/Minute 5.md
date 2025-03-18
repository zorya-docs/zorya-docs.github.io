---
id: 5
title: Minute 5 - 08/03
---

# Minute 4 - 08/03, 10:00 - Online

**Attendees:** Carolina, Diogo, Raquel, João, Henrique  
**Absentees:** 

## Workflow:  
1. Frontend site analysis
2. Analysis of personas, scenarios, and actors

## Notes:

### 1. **Frontend Site Analysis**

- **Homepage:**
    - Should it be possible to view datasets without logging in, or should it only be available after login, or perhaps just a welcome page directing users to login? It was decided that datasets should not be accessible without logging in.
    - After logging in, it makes sense for some datasets to be displayed.
    - Option to filter datasets by type (organ, tissue, staining, my datasets, my institution datasets).
    - Ability to mark datasets as favorites.
    - Notification icon: Clicking it will show a dropdown with notifications, including new annotations on images made by the doctor, updates on new datasets or annotations in the doctor's institution, available results from triggered models, etc.
    - Side navbar could be more useful.

- **Clicking on a Dataset:**
    - All images within that dataset should be displayed with information such as what it is, whether it has annotations, institution, author, etc.
  
- **Clicking on an Image from the Dataset:**
    - More detailed information should appear about the image.
    - The image should be displayed in a viewer to allow cropping, annotation, etc.
    - There should be a panel showing existing annotations, separated by AI-generated and human-generated annotations (in the case of human annotations, the institution and author name should be displayed).
    - Button to analyze available algorithms for the image, allowing the user to choose and activate the analysis.
    - Option to activate or create a workflow.

- **Models Page:**
    - To allow model training, the doctor/researcher should be able to select images from a dataset (previously uploaded by the technician), tag them with important labels like disease, lung, etc., so the AI model can learn more about lungs.

- **Workflow:**
    - Create model sequences, allowing the user to trigger multiple models at once, for example, a model that analyzes the image contents, and another model that analyzes image characteristics, etc.
    - Would it make sense to have a homepage instead of the datasets page showing information like the last dataset viewed? It was decided that it is not very important and that upon login, the user will go directly to the datasets page.

- **Profile Page:**
    - Edit profile.
    - View favorite datasets.
    - View important events that may need to be remembered.
    - Analyze work assigned by another doctor.

- **Admin Interface:**
    - Create accounts for doctors from specific institutions.

- **Analysis of Personas, Scenarios, and Actors:**
    - Previous requirements were reviewed and decisions were made, such as creating a dashboard for lead doctors to distribute work to specialist doctors. Doctors will be able to analyze the results of AI models and request new analyses.
    - After reviewing the requirements, it made sense to add new personas, such as admins and doctors creating workflows.
    - A new scenario was introduced: a doctor imports an external model.
    - Use cases associated with these personas and scenarios were also introduced.

