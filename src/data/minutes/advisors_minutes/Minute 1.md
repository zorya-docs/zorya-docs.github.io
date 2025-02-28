---
id: 1
date: 2025-10-10
title: Minute 1 - 12/02
title2: 12/02
---

# Minute 1 - 12/02, 9:30 - Online

**Attendees:** Carolina, Diogo, João, Raquel, Henrique, Supervisors (Luís Bastião and Carlos Costa)

**Absentees:**

## Workflow:
1. Request a detailed explanation of the project or explain our understanding
2. Identify the technologies to be used
3. Schedule the weekly meeting time
4. Other topics

## Notes:
### 1. **Detailed Explanation of the Project**
   - The files we will use in the project are in **DICOM** format.
   - The current workflow involves scanning glass slides, which are digitized in photos. After this, the images are sent to the repository - these are our main data source.
   - There is already a repository called **Dicoogle**, which analyzes metadata.
   - We need to develop an annotator for each organ since this information is not included in the metadata. Our service must extract additional metadata, i.e., be able to filter based on specifications. We should research whether there are existing tools for this categorization.
   - **Pathology Staining Type** relates to the image color **(HIE)** - the type of reagent applied to the glass slide before digitization.
   - Datasets can come from either the repository itself or public sources.
   - **Algorithm catalog** can include more classical approaches - for a given slide, a specific type of algorithm must be used depending on the organ or staining type, for example. We need to determine the best algorithm for each image (each slide/staining type).
   - **API** - Users will want to integrate these types of algorithms.
   - Image display is already implemented, and many open-source tools exist. We need to determine how to send parts of images, including **zoom in, zoom out, pan, and cut** functionalities.
   - **Cataloging different image types** enables workload distribution among different medical professionals. - **Service**
   - **Training classification models (per organ)** - This is valuable, as algorithms should be tailored to specific organs.
   - Defining a work list per user (e.g., only images from a specific region) - user interface/usability (personalized user pages).
   - Heavy use of **abstraction**, as in many cases, knowing all the details is unnecessary.

### 2. **Technologies:**
   - **Data repository:** A container will be provided.
   - **Frontend:** REACT
   - **Java REST**, for example.
   - **Backend:** Spring, Django, FastAPI (choose the best option).
   - **Database:** PostgreSQL, etc.
   - Use **indexing** for search bar, ranking, etc.

### 3. **Weekly Meeting with Advisors** - Thursdays at 9 AM at IEETA

### 4. **Other Topics:**
   - Organization: Project management in a work environment, internal code reviews, and testing.
   - The advisors will create a repository for us.
   - Send GitHub usernames - Raquel will send them.
   - The project is very promising, with exciting components.
   - Use AI, train models.
   - We have everything necessary for the project's success, both within and beyond the university.
