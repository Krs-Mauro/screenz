import React from "react";

import { Stack } from "@mui/system";
import { Modal, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import ModalTabs from "./ModalTabs";

type Props = {
  open: boolean;
  onClose: () => void;
};

const stackStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "40px",
  borderRadius: "8px",
  backgroundColor: "#F3EFE6",
  border: "none",
  outline: "none",
  width: "80%",
};

const DetailModal = ({ open, onClose }: Props) => {
  const selectedItem = useSelector(
    (state: RootState) => state.media.selectedItem
  );
  const mediaType = useSelector((state: RootState) => state.media.mediaType);

  return (
    <Modal open={open} onClose={onClose}>
      <Stack sx={stackStyle}>
        {mediaType === "movie" ? (
          <Typography variant="h2" marginBottom="32px">
            {selectedItem.title}
          </Typography>
        ) : (
          <Typography variant="h2" marginBottom="32px">
            {selectedItem.name}
          </Typography>
        )}
        <Stack direction="row" marginBottom="32px">
          <img
            src={selectedItem.big_backdrop_path}
            alt={`Poster for the ${selectedItem.title} show`}
            style={{
              maxWidth: "60%",
              objectFit: "contain",
              borderRadius: "8px",
              marginTop: "3px",
            }}
          />
          <Stack margin="0 0 0 40px" justifyContent="center">
            <Typography variant="h3">
              {selectedItem.vote_average} / 10
            </Typography>
            <Typography variant="h5">
              First aired on:{" "}
              {mediaType === "movie"
                ? selectedItem.release_date
                : selectedItem.first_air_date}
            </Typography>
            <Typography variant="h6" marginTop="32px">
              {selectedItem.overview}
            </Typography>
          </Stack>
        </Stack>
        <ModalTabs />
      </Stack>
    </Modal>
  );
};

export default DetailModal;
