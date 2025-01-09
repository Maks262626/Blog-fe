import { Box, Button, IconButton } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./styles.mui";

interface IImageUploader {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}
function ImageUploader({ setFile }: IImageUploader) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setFile(null);
  }

  return <>
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      sx={styles.btn}
    >
      Upload Avatar
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        multiple
      />
    </Button>
    {imagePreview && (
      <Box
        sx={styles.wrapper}
      >
        <Box
          component="img"
          src={imagePreview}
          alt="Preview"
          sx={styles.img}
        />
        <IconButton
          onClick={handleRemoveImage}
          sx={styles.icon}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    )}
  </>
}

export default ImageUploader;