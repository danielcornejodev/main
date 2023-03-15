import Box from "@mui/material/Box";
import ButtonAppBar from "./TopNav";
import Typography from "@mui/material/Typography";
import CategoryMenu from "./CategoryMenu";
import BodySearch from "./BodySearch";
import JobList from "./JobList";
import { useState } from "react";
import React from "react";

export default function JobBoard({ allJobs }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [];

  for (let job of allJobs) {
    if (!categories.includes(job.category)) {
      categories.push(job.category);
    }
  }

  console.log(categories);

  return (
    <>
      <ButtonAppBar />
      <Box
        sx={{
          height: "500px",
          display: "flex",
          padding: "10% 50px",
          textAlign: "left"
        }}
      >
        <Box sx={{ width: "30%" }}>
          <Typography variant="h5" gutterBottom sx={{ marginBottom: "30px" }}>
            Find Work
          </Typography>
          <Typography variant="h6" gutterBottom>
            Categories
          </Typography>
          <CategoryMenu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </Box>
        <Box sx={{ width: "70%" }}>
          <BodySearch />
          <JobList
            jobs={allJobs.filter((job) => job.category === selectedCategory)}
          />
        </Box>
      </Box>
    </>
  );
}
