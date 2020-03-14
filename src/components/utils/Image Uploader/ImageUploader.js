import React, { useState } from "react";
import { Button, Header, Icon, Segment, Image, Modal } from "semantic-ui-react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";

const ImageUploader = ({ placeholder, type, aspectRatio }) => {
  const [openModal, setOpenModal] = useState(false);

  const [image, setImage] = useState({
    imageSrc: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: aspectRatio,
    croppedAreaPixels: null,
    croppedImage: null,
    isCropping: false
  });

  const onCropChange = crop => {
    setImage({ ...image, crop });
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setImage({ ...image, croppedAreaPixels });
  };

  const onZoomChange = zoom => {
    setImage({ ...image, zoom });
  };

  const showResult = async () => {
    try {
      setImage({ ...image, isCropping: true });

      console.log(image.croppedAreaPixels);

      const croppedImage = await getCroppedImg(
        image.imageSrc,
        image.croppedAreaPixels
      );

      console.log("done", { croppedImage });

      setImage({
        ...image,
        croppedImage,
        isCropping: false
      });

      setOpenModal(false);
    } catch (e) {
      console.log(e);
      setImage({ ...image, isCropping: false });
      setOpenModal(false);
    }
  };

  const onClose = async () => {
    setImage({ ...image, croppedImage: null });
    setOpenModal(false);
  };

  const onFileChange = async files => {
    if (files && files.length > 0) {
      const file = files[0];
      let imageDataUrl = await readFile(file);

      setImage({
        ...image,
        imageSrc: imageDataUrl,
        crop: { x: 0, y: 0 },
        zoom: 1
      });

      setOpenModal(true);
    }
  };

  const readFile = file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div>
        <label htmlFor={type}>
          <Image
            fluid
            wrapped
            style={{ cursor: "pointer", margin: 0 }}
            rounded
            src={image.croppedImage || placeholder}
          />
        </label>
        <input
          style={{ display: "none" }}
          id={type}
          type="file"
          accept="image/*"
          onChange={({ target }) => {
            onFileChange(target.files);
            // resetting the value to enable uploading same file again
            target.value = "";
          }}
        />
      </div>

      {image.imageSrc && (
        <Modal open={openModal}>
          <Modal.Content>
            <Modal.Description>
              <Header>Resize {type}</Header>

              <Segment basic style={{ height: "350px" }}>
                <Cropper
                  image={image.imageSrc}
                  crop={image.crop}
                  zoom={image.zoom}
                  aspect={image.aspect}
                  onCropChange={onCropChange}
                  onCropComplete={onCropComplete}
                  onZoomChange={onZoomChange}
                />
              </Segment>
            </Modal.Description>
          </Modal.Content>

          <Modal.Actions>
            <Button onClick={onClose} negative>
              Cancel
            </Button>
            <Button
              onClick={showResult}
              positive
              labelPosition="right"
              icon="checkmark"
              content="Confirm"
            />
          </Modal.Actions>
        </Modal>
      )}
    </>
  );
};

export default ImageUploader;
