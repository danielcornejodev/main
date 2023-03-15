import ButtonAppBar from "./TopNav";
import {
  MainBox,
  PrimaryButton,
  SpacerBox,
  SecondaryButton
} from "./StyledComponents";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";

export default function JobDetail({ allJobs }) {
  let { id } = useParams();

  const currentJob = allJobs.find((obj) => {
    return obj.id === Number(id);
  });

  console.log({ currentJob });

  return (
    <>
      <ButtonAppBar />
      <MainBox style={{ justifyContent: "space-between" }}>
        <Box sx={{ width: "60%" }}>
          <Typography variant="h5" gutterBottom sx={{ marginBottom: "30px" }}>
            {currentJob.title}
          </Typography>
          <Divider sx={{ marginBottom: "30px" }} />
          <Typography variant="subtitle2" gutterBottom>
            {currentJob.category}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Posted {currentJob.postedTime}
          </Typography>
          <Typography
            sx={{ fontWeight: "500", color: "grey" }}
            variant="subtitle2"
            gutterBottom
          >
            <img src="https://assets.codepen.io/6060109/location-icon.png" />
            {currentJob.remote ? " Remote, " : ""}
            {currentJob.location}
          </Typography>
          <Divider sx={{ margin: "30px 0" }} />
          <Typography variant="body2" gutterBottom sx={{ color: "666666" }}>
            {currentJob.description}
          </Typography>
          <Divider sx={{ marginTop: "30px" }} />
        </Box>
        <Box
          sx={{
            width: "30%",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
        >
          <SpacerBox>
            <PrimaryButton
              sx={{
                fontSize: "15px",
                textTransform: "none",
                width: "100%"
              }}
              variant="contained"
            >
              Submit a Proposal
            </PrimaryButton>
            <SecondaryButton
              sx={{
                fontSize: "15px",
                textTransform: "none",
                width: "100%",
                marginTop: "20px"
              }}
            >
              <img
                style={{ marginRight: "3px" }}
                src="https://assets.codepen.io/6060109/heart-icon.png"
              />
              Save Job
            </SecondaryButton>
          </SpacerBox>
          <Divider />
          <Divider />
        </Box>
      </MainBox>
    </>
  );
}
