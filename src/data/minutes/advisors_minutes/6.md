---
id: 6
date: 2025-03-20
title: Minute 6 - 20/03
---

# Minute 6 - 20/03, 09:15 - IEETA

**Attendees:**  
Carolina, Diogo, Raquel, João, Henrique, Supervisors (Luís Bastião and Carlos Costa)

**Absentees:**  

## Agenda:
1. Progress check
2. Confirm use of Dicoogle for indexing and whether to abstract it
3. Define image storage location (linked to Dicoogle decision)
4. Create Dataset


## Notes:
### 1. **Progress Check**
- Frontend development is ongoing.
- Initial implementation of the database and API has started.
- Need to explore tools capable of exporting/generating image metadata.

### 2. **Dataset Creation - How will work?**
- Datasets will serve as work units, already containing metadata for model validation.
- Current dataset provided includes:
  - One folder with images,
  - One with annotations,
  - One with reports.
- Goal: create training datasets to test models.
- Creating a dataset involves selecting studies (not isolated images).
- Images belong to studies → selecting studies makes more sense.
- Uploading to a general archive is more complex.
- Dataset creation could also be based on applying “Actions” (rules).
- Workflow idea:
  - A new exam arrives → automatic annotation algorithms run → results stored in the file system.
  - Ideally, this includes a quality control (QC) step.
- It should be possible to assign datasets to doctors.
- When creating a dataset:
  - Link existing images based on filters (e.g., tissue type, patient ID).
  - Datasets always contain studies.
  - Exams = images.
  - Structure: Datasets → Studies → Images.
- A dataset is essentially a query to the database.
- Should support grouping by staining type or other factors.
- Link images to studies by process number.
- When an image is uploaded, it must be associated with a study.

### 3. **Study Structure Clarification**
- A patient can have multiple studies with multiple images.
- A study = every time a tissue sample is analyzed (typically 1–3 images).
- Datasets contain studies, not images directly.
- Studies have:
  - Upload date,
  - Description,
  - Patient association.
- DICOM files already contain associated metadata.
- For now, uploads will be limited to regions of interest (ROIs).
- Cornerstone provides demos we can explore.
- Use Dicoogle to extract metadata.
- Abstract the system via our own API and integrate with Dicoogle.

### 4. **Dicoogle Integration**
- URI setup?
- Ideally: Upon receiving a new study, a plugin triggers:
  - Iterates through images,
  - Performs annotation,
  - Stores result in the database.
- Image transfer to Dicoogle should be automatic.
- Use DICOM send (small executables) pointed to Dicoogle instance.
- Prof. Bastião will update the wiki with this info.
- Check if uploading to Dicoogle via frontend is possible.
- Dicoogle provides an indexing API: given a folder path, it indexes all files within.
