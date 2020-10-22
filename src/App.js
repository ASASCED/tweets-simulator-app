import React, { useState, useEffect } from "react";
import { Container, Snackbar } from "@material-ui/core";

import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";
import { TWEETS_STORAGE } from "./utils/constants";

function App() {
  const [toasProps, setToastProps] = useState({
    open: false,
    text: null,
  });

  const [allTweets, setAllTweets] = useState([]);

  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const AllTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(AllTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toasProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toasProps.text}</span>}
      />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
    </Container>
  );
}

export default App;
