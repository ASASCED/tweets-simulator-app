import React from "react";
import { Grid } from "@material-ui/core";
import Tweet from "../Tweet";

import "./ListTweets.scss";

export default function ListTweets(props) {
  const { allTweets, deleteTweet } = props;

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="ListTweets-empty">
        <h2>No hay Tweets...</h2>
      </div>
    );
  }

  return (
    <Grid container spacing={3} className="ListTweets">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet deleteTweet={deleteTweet} tweet={tweet} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}
