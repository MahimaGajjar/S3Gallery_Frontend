import React from "react";
import { Grid, Image, Segment, Button } from "semantic-ui-react";
import Art from "../assets/Art.jpg";
import Mountain from "../assets/Mountain.jpg";
import Nature from "../assets/Nature.jpg";

const Dashboard = () => {
  const handleUpload = () => {
    // Logic for handling file upload
    console.log("Upload button clicked");
  };

  return (
    <div style={{ margin: "5rem auto", maxWidth: "1200px" }}>
      <Segment basic textAlign="center">
        <Button primary onClick={handleUpload}>
          Upload Image
        </Button>
      </Segment>
      <Grid columns={3} stackable centered>
        <Grid.Row>
          <Grid.Column>
            <Image src={Art} fluid />
          </Grid.Column>
          <Grid.Column>
            <Image src={Mountain} fluid />
          </Grid.Column>
          <Grid.Column>
            <Image src={Nature} fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
