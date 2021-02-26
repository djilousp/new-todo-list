import React, { useState } from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import { FiUpload as UploadIcon } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import "./style.css";

Modal.setAppElement("#root");
export default function TodoModal({
  modalIsOpen,
  setModalIsOpen,
  setInputText,
  handleSubmitTodos,
  inputText,
}) {
  const handleUploadedImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleInputText = (event) => {
    const { value } = event.target;
    setInputText(value);
  };
  const submitTodos = (e) => {
    e.preventDefault();
    setIsUploaded(false);
    setModalIsOpen(false);
    handleSubmitTodos();
  };
  const [image, setImage] = useState(undefined);
  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          background: "rgba(20, 20, 43, 0.45)",
        },
        content: {
          height: 591,
          width: 855,
          top: "calc(50% - 591px/2 + 34.5px)",
          left: "calc(50% - 855px/2 - 0.5px)",
          borderRadius: 24,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        },
      }}
    >
      <h1>Create new To-Do</h1>
      <form id="to-do-form" onSubmit={submitTodos} className="to-do">
        <textarea
          value={inputText}
          onChange={handleInputText}
          name="inputText"
          placeholder="Name To-Do"
        />
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => handleUploadedImage(e)}
        />
        <div
          className="upload-image"
          style={!isUploaded ? { border: "2px dashed #a0a3bd" } : {}}
        >
          {!isUploaded ? (
            <label style={{ textAlign: "center" }} htmlFor="image">
              <UploadIcon style={{ display: "inline-block" }} size={24} />
              <h5>Insert Image</h5>
            </label>
          ) : (
            <>
              <FaTimes
                className="fa-times"
                color="#a0a3bd"
                size={15}
                onClick={() => setIsUploaded(false)}
              />
              <img
                style={{
                  width: 485,
                  height: 234,
                  objectFit: "cover",
                  borderRadius: 16,
                }}
                src={image}
                alt=""
              />
            </>
          )}
        </div>
        <Button
          style={{
            borderRadius: 20,
            width: "100%",
            cursor: "pointer",
          }}
          variant="contained"
          color="primary"
          width="20%"
          type="submit"
        >
          Create
        </Button>
      </form>
    </Modal>
  );
}
