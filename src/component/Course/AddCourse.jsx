import React from "react";
import { db, storage } from "../../firebase/firebase";
import CircularProgress from "@mui/material/CircularProgress";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, setDoc, doc, average } from "firebase/firestore";

function AddCourse() {
  async function addCourseWithSubjects(courseId, subjectList) {
    const courseRef = doc(db, "PURCHASEDCOURSES", courseId);

    // Step 1: Add the course document with the subject list
    await setDoc(courseRef, {
      subject_list: subjectList,
    });

    // Step 2: Add subcollections for each subject
    for (const subject of subjectList) {
      const subjectRef = doc(courseRef, subject, "lectures");

      await setDoc(subjectRef, {
        title_list: [],
        url_list: [],
      });

      const subjectRef1 = doc(courseRef, subject, "notes");
      await setDoc(subjectRef1, {
        title_list: [],
        url_list: [],
      });

      const subjectRef2 = doc(courseRef, subject, "tests");
      await setDoc(subjectRef2, {
        title_list: [],
        url_list: [],
      });

      // Adding documents for lecture, notes, and tests
      //   await setDoc(doc(subjectRef, "l"), {
      //     /* Your lecture data here */
      //     note: "test",
      //   });
      //   await setDoc(doc(subjectRef, "n"), {
      //     /* Your notes data here */
      //     note: "test",
      //   });
      //   await setDoc(doc(subjectRef, "t"), {
      //     /* Your tests data here */
      //     note: "test",
      //   });
    }

    console.log(`Course ${courseId} with subjects added successfully.`);
  }

  function handelOnAddCourse() {
    // Usage
    const courseId = "CodingCourse";
    const subjectList = ["JAVA", "C++", "PYTHON"];

    addCourseWithSubjects(courseId, subjectList)
      .then(() => console.log("Data added successfully."))
      .catch((error) => console.error("Error adding data: ", error));
  }
  return (
    <div className="w-full flex items-center justify-center  mt-32">
      <button onClick={handelOnAddCourse}>Add Course</button>
    </div>
  );
}

export default AddCourse;
