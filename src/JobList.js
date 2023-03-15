import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  console.log(jobs);
  return (
    <Paper>
      {jobs.map((job) => {
        return (
          <Box sx={{ padding: "15px" }} key={job.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/job/${job.id}`}
            >
              <Typography variant="h6" gutterBottom>
                {job.title}
              </Typography>
            </Link>
            <Typography variant="subtitle2" gutterBottom>
              Hourly ${job.hourlyUSD}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Posted {job.postedTime}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <img src="https://assets.codepen.io/6060109/location-icon.png" />
              {job.remote ? " Remote, " : ""}
              {job.location}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {job.description}
            </Typography>
            <Divider />
          </Box>
        );
      })}
    </Paper>
  );
}
