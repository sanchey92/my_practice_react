import React, {useContext, useEffect} from "react";
import Form from "../../components/form";
import Notes from "../../components/notes";
import {FirebaseContext} from "../../context/firebase/firebase-context";
import Loading from "../../components/loading";


const HomePage = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Form/>
      {loading
        ? <Loading/>
        : <Notes notes={notes} onRemove={removeNote}/>}

    </div>
  )
};

export default HomePage;